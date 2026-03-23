/* ═══════════════════════════════════════════════════════════════
   THE ULTIMATE BEAUTY — GOOGLE APPS SCRIPT
   Teljes backend: 7 form type → Google Sheets + Email + Páciens Karton

   SETUP: Lásd SETUP.md a részletes telepítési útmutatóért!
   ═══════════════════════════════════════════════════════════════ */

// ─── CONFIG ───────────────────────────────────────────────────
var CONFIG = {
  SPREADSHEET_ID: '1VsYufmvAD1mseRkK1AF-uorG-_NtCAtLiNpLdil_mo8',  // ← A Google Sheet ID-je
  CLINIC_EMAIL: 'info@theultimatebeauty.net',
  CLINIC_NAME: 'The Ultimate Beauty Clinic',
  CLINIC_PHONE: '+36 1 790 3017',
  CLINIC_ADDRESS: '1124 Budapest, Németvölgyi út 68.',
  FOUNDER_EMAIL: 'info@theultimatebeauty.net',  // Founding member értesítések

  // Páciens ID prefix
  PATIENT_ID_PREFIX: 'TUB-',

  // Sheet names (automatikusan létrehozza, ha nem létezik)
  SHEETS: {
    MASTER: 'MASTER PATIENTS',
    KONZULTACIO: 'Konzultáció',
    OBSERV: 'Observ',
    LED_MASK: 'LED Mask',
    CLINICAL: 'Clinical Program',
    FOUNDING: 'Founding Access',
    AKADEMIA: 'Akadémia',
    NEWSLETTER: 'Newsletter',
    DASHBOARD: 'DASHBOARD'
  }
};

// ─── MAIN HANDLER: doPost ─────────────────────────────────────
function doPost(e) {
  try {
    var data;
    // Support both direct JSON body and form-encoded payload parameter
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch(parseErr) {
        // Try form parameter
        data = JSON.parse(e.parameter.payload || '{}');
      }
    } else if (e.parameter && e.parameter.payload) {
      data = JSON.parse(e.parameter.payload);
    } else {
      throw new Error('No data received');
    }

    // Log raw submission
    Logger.log('Form submission: ' + JSON.stringify(data));

    // Route to correct handler
    var formType = data.formType || data.source || 'newsletter';

    // 1. Save to form-specific sheet
    saveToSheet(formType, data);

    // 2. Update Master Patients (if has email)
    if (data.email) {
      updateMasterPatient(data);
    }

    // 3. Send notification email to clinic
    sendNotificationEmail(formType, data);

    // 4. Send autoresponder to patient
    if (data.email) {
      sendAutoresponder(formType, data);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok', formType: formType }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    Logger.log('ERROR: ' + err.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Also handle GET (for testing)
function doGet(e) {
  // Support ?action=init to initialize sheets
  if (e && e.parameter && e.parameter.action === 'init') {
    initializeSheets();
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok', message: 'Sheets inicializálva!' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'TUB Form Backend aktív' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ─── SAVE TO FORM-SPECIFIC SHEET ──────────────────────────────
function saveToSheet(formType, data) {
  var ss = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
  var sheetName = getSheetName(formType);
  var sheet = getOrCreateSheet(ss, sheetName);

  // Get headers from first row, or create them
  var headers = getHeaders(sheet);
  if (headers.length === 0) {
    headers = createHeadersForType(formType);
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    formatHeaderRow(sheet, headers.length);
  }

  // Build row data
  var row = headers.map(function(header) {
    var key = headerToKey(header);
    if (key === 'timestamp' || key === 'beérkezés') return new Date();
    if (key === 'id' || key === 'sorszám') return ''; // auto-filled later
    return data[key] || data[header] || '';
  });

  // Append row
  sheet.appendRow(row);

  // Auto-resize
  try {
    sheet.autoResizeColumns(1, headers.length);
  } catch(e) {}
}

// ─── MASTER PATIENTS UPDATE ───────────────────────────────────
function updateMasterPatient(data) {
  var ss = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
  var sheet = getOrCreateSheet(ss, CONFIG.SHEETS.MASTER);

  // Create headers if empty
  var headers = getHeaders(sheet);
  if (headers.length === 0) {
    headers = [
      'Páciens ID', 'Teljes név', 'Email', 'Telefon',
      'Első kontakt', 'Forrás', 'Érdeklődés', 'Státusz',
      'Founding szint', 'Observ elvégezve', 'Lead Score',
      'Utolsó aktivitás', 'Összes interakció', 'Megjegyzés'
    ];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    formatHeaderRow(sheet, headers.length);
  }

  // Check if patient already exists (by email)
  var emailCol = headers.indexOf('Email') + 1;
  var lastRow = sheet.getLastRow();
  var existingRow = -1;

  if (lastRow > 1 && emailCol > 0) {
    var emails = sheet.getRange(2, emailCol, lastRow - 1, 1).getValues();
    for (var i = 0; i < emails.length; i++) {
      if (emails[i][0].toString().toLowerCase() === data.email.toLowerCase()) {
        existingRow = i + 2; // +2 because 1-indexed + header row
        break;
      }
    }
  }

  var formType = data.formType || data.source || 'newsletter';

  if (existingRow > 0) {
    // UPDATE existing patient
    var currentData = sheet.getRange(existingRow, 1, 1, headers.length).getValues()[0];

    // Update last activity
    var lastActCol = headers.indexOf('Utolsó aktivitás') + 1;
    if (lastActCol > 0) sheet.getRange(existingRow, lastActCol).setValue(new Date());

    // Update interaction count
    var interCol = headers.indexOf('Összes interakció') + 1;
    if (interCol > 0) {
      var current = parseInt(sheet.getRange(existingRow, interCol).getValue()) || 0;
      sheet.getRange(existingRow, interCol).setValue(current + 1);
    }

    // Update lead score
    var scoreCol = headers.indexOf('Lead Score') + 1;
    if (scoreCol > 0) {
      var score = calculateLeadScore(existingRow, sheet, headers, formType);
      sheet.getRange(existingRow, scoreCol).setValue(score);
    }

    // Update founding level if applicable
    if (data.foundingLevel) {
      var foundCol = headers.indexOf('Founding szint') + 1;
      if (foundCol > 0) sheet.getRange(existingRow, foundCol).setValue(data.foundingLevel);
    }

    // Update phone if provided and was empty
    if (data.phone) {
      var phoneCol = headers.indexOf('Telefon') + 1;
      if (phoneCol > 0 && !currentData[phoneCol - 1]) {
        sheet.getRange(existingRow, phoneCol).setValue(data.phone);
      }
    }

    // Update name if provided and was empty
    var name = data.fullName || data.name || '';
    if (name) {
      var nameCol = headers.indexOf('Teljes név') + 1;
      if (nameCol > 0 && !currentData[nameCol - 1]) {
        sheet.getRange(existingRow, nameCol).setValue(name);
      }
    }

  } else {
    // CREATE new patient
    var patientId = generatePatientId(sheet);
    var name = data.fullName || data.name || data.firstName || '';

    var newRow = [
      patientId,
      name,
      data.email,
      data.phone || '',
      new Date(),                    // Első kontakt
      getSourceLabel(formType),      // Forrás
      data.interest || data.program || data.skinProblem || '',  // Érdeklődés
      'Új',                          // Státusz
      data.foundingLevel || '',      // Founding szint
      '',                            // Observ elvégezve
      1,                             // Lead Score (initial)
      new Date(),                    // Utolsó aktivitás
      1,                             // Összes interakció
      ''                             // Megjegyzés
    ];

    sheet.appendRow(newRow);

    // Apply conditional formatting for new patients
    var newRowNum = sheet.getLastRow();
    var statusCell = sheet.getRange(newRowNum, headers.indexOf('Státusz') + 1);
    statusCell.setBackground('#FFF3CD');
  }
}

// ─── PATIENT ID GENERATOR ─────────────────────────────────────
function generatePatientId(sheet) {
  var lastRow = sheet.getLastRow();
  var nextNum = 1;

  if (lastRow > 1) {
    var ids = sheet.getRange(2, 1, lastRow - 1, 1).getValues();
    for (var i = ids.length - 1; i >= 0; i--) {
      var id = ids[i][0].toString();
      var num = parseInt(id.replace(CONFIG.PATIENT_ID_PREFIX, ''));
      if (!isNaN(num) && num >= nextNum) {
        nextNum = num + 1;
      }
    }
  }

  return CONFIG.PATIENT_ID_PREFIX + padNumber(nextNum, 4);
}

function padNumber(num, length) {
  var str = num.toString();
  while (str.length < length) str = '0' + str;
  return str;
}

// ─── LEAD SCORE CALCULATION ───────────────────────────────────
function calculateLeadScore(row, sheet, headers, newFormType) {
  var score = 1; // Base score for any interaction

  // Higher score for more valuable form types
  var scoreMap = {
    'konzultacio': 4,
    'clinical': 5,
    'founding': 5,
    'observ': 3,
    'led-mask': 3,
    'akademia': 2,
    'newsletter': 1
  };

  score = scoreMap[newFormType] || 1;

  // Add points for interaction count
  var interCol = headers.indexOf('Összes interakció') + 1;
  if (interCol > 0) {
    var interactions = parseInt(sheet.getRange(row, interCol).getValue()) || 0;
    score += Math.min(interactions, 3); // Max +3 for interactions
  }

  // Cap at 5
  return Math.min(score, 5);
}

// ─── NOTIFICATION EMAIL TO CLINIC ─────────────────────────────
function sendNotificationEmail(formType, data) {
  var subject = getNotificationSubject(formType, data);
  var body = getNotificationBody(formType, data);

  var recipient = CONFIG.CLINIC_EMAIL;

  // Founding Member → also to founder
  if (formType === 'founding' && data.foundingLevel === 'Founding Member') {
    recipient = CONFIG.FOUNDER_EMAIL;
  }

  // B2B leads (Akadémia Inhouse) → special handling
  if (formType === 'akademia' && data.program === 'Inhouse Referens Belső Képzés') {
    subject = '🏢 B2B LEAD: ' + subject;
  }

  try {
    GmailApp.sendEmail(recipient, subject, '', {
      htmlBody: body,
      name: 'TUB Form System'
    });
  } catch(e) {
    Logger.log('Email küldés hiba: ' + e.toString());
  }
}

function getNotificationSubject(formType, data) {
  var name = data.fullName || data.name || data.email;
  var subjects = {
    'konzultacio': 'ÚJ KONZULTÁCIÓ: ' + name + ' — ' + (data.interest || ''),
    'observ': '🔬 ÚJ OBSERV LEAD: ' + name + ' — ' + (data.skinProblem || ''),
    'led-mask': '💡 LED MASK: ' + name + ' — ' + (data.interestType || ''),
    'clinical': '🏥 CLINICAL PROGRAM: ' + name + ' — ' + (data.program || ''),
    'founding': getFoundingSubject(data),
    'akademia': '🎓 AKADÉMIA: ' + name + ' — ' + (data.program || ''),
    'newsletter': '📧 Új feliratkozó: ' + (data.email || '')
  };
  return subjects[formType] || 'Új form beküldés: ' + name;
}

function getFoundingSubject(data) {
  var icons = {
    'Discovery': '📋',
    'Early Access': '⭐',
    'Founding Member': '👑'
  };
  var icon = icons[data.foundingLevel] || '📋';
  return icon + ' ' + (data.foundingLevel || 'FOUNDING') + ': ' + (data.fullName || data.email);
}

function getNotificationBody(formType, data) {
  var html = '<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">';
  html += '<div style="background:#1A1816;color:#D4B077;padding:16px 24px;border-radius:4px 4px 0 0;">';
  html += '<h2 style="margin:0;font-size:16px;">The Ultimate Beauty — Új beküldés</h2></div>';
  html += '<div style="background:#fff;padding:24px;border:1px solid #eee;border-radius:0 0 4px 4px;">';

  html += '<table style="width:100%;border-collapse:collapse;">';

  // List all data fields
  Object.keys(data).forEach(function(key) {
    if (['formType', 'sheetName', 'pageUrl', 'gdpr'].indexOf(key) !== -1) return;
    html += '<tr>';
    html += '<td style="padding:8px 12px;border-bottom:1px solid #f0f0f0;font-weight:bold;color:#666;width:40%;">' + formatFieldName(key) + '</td>';
    html += '<td style="padding:8px 12px;border-bottom:1px solid #f0f0f0;">' + data[key] + '</td>';
    html += '</tr>';
  });

  html += '</table>';

  // Priority notice
  if (['observ', 'founding', 'clinical', 'konzultacio'].indexOf(formType) !== -1) {
    html += '<div style="margin-top:20px;padding:12px;background:#FFF3CD;border-radius:4px;font-size:13px;">';
    html += '⚡ <strong>Prioritás:</strong> Kérjük 24 órán belül vegye fel a kapcsolatot!</div>';
  }

  html += '<div style="margin-top:16px;font-size:12px;color:#999;">Beérkezett: ' + new Date().toLocaleString('hu-HU') + '</div>';
  html += '</div></div>';

  return html;
}

// ─── AUTORESPONDER EMAIL TO PATIENT ───────────────────────────
function sendAutoresponder(formType, data) {
  var email = data.email;
  if (!email) return;

  var name = data.fullName || data.name || data.firstName || '';
  var firstName = name.split(' ').pop() || ''; // Hungarian: last word is first name

  var templates = {
    'konzultacio': {
      subject: 'Köszönjük, ' + firstName + '! Konzultációs kérését megkaptuk.',
      body: getKonzultacioAutoresponder(data, firstName)
    },
    'observ': {
      subject: firstName + ', az Observ bőrelemzése lefoglalva!',
      body: getObservAutoresponder(data, firstName)
    },
    'led-mask': {
      subject: 'Az ULTIMA LED Mask részletei',
      body: getLedMaskAutoresponder(data, firstName)
    },
    'clinical': {
      subject: 'Clinical Program — jelentkezését megkaptuk',
      body: getClinicalAutoresponder(data, firstName)
    },
    'founding': {
      subject: getFoundingAutoresponderSubject(data, firstName),
      body: getFoundingAutoresponder(data, firstName)
    },
    'akademia': {
      subject: 'Akadémia jelentkezését megkaptuk!',
      body: getAkademiaAutoresponder(data, firstName)
    },
    'newsletter': {
      subject: 'Üdvözöljük! — The Ultimate Beauty',
      body: getNewsletterAutoresponder(data, firstName)
    }
  };

  var template = templates[formType];
  if (!template) return;

  try {
    GmailApp.sendEmail(email, template.subject, '', {
      htmlBody: wrapEmailTemplate(template.body),
      name: CONFIG.CLINIC_NAME,
      replyTo: CONFIG.CLINIC_EMAIL
    });
  } catch(e) {
    Logger.log('Autoresponder hiba: ' + e.toString());
  }
}

// ─── EMAIL TEMPLATES ──────────────────────────────────────────

function wrapEmailTemplate(bodyContent) {
  return '<div style="font-family:Georgia,serif;max-width:560px;margin:0 auto;padding:40px 20px;background:#FDFAF6;">' +
    '<div style="text-align:center;margin-bottom:32px;">' +
    '<div style="font-family:Georgia,serif;font-size:18px;color:#1A1816;letter-spacing:0.05em;">THE ULTIMATE BEAUTY</div>' +
    '<div style="width:40px;height:1px;background:#B8965A;margin:12px auto;"></div>' +
    '</div>' +
    bodyContent +
    '<div style="margin-top:40px;padding-top:24px;border-top:1px solid rgba(26,24,22,0.08);text-align:center;font-size:12px;color:rgba(26,24,22,0.4);">' +
    '<p>' + CONFIG.CLINIC_NAME + '</p>' +
    '<p>' + CONFIG.CLINIC_ADDRESS + '</p>' +
    '<p>Tel: ' + CONFIG.CLINIC_PHONE + '</p>' +
    '</div></div>';
}

function getKonzultacioAutoresponder(data, firstName) {
  return '<p style="color:#1A1816;font-size:15px;line-height:1.8;">Kedves ' + (firstName || 'Leendő Páciensünk') + ',</p>' +
    '<p style="color:rgba(26,24,22,0.7);font-size:14px;line-height:1.8;">Köszönjük, hogy érdeklődik a The Ultimate Beauty Protocol iránt.</p>' +
    '<p style="color:rgba(26,24,22,0.7);font-size:14px;line-height:1.8;">Konzultációs kérését rögzítettük. Munkatársunk <strong>1 munkanapon belül</strong> felveszi Önnel a kapcsolatot' +
    (data.phone ? ' a <strong>' + data.phone + '</strong> számon' : '') + ' az időpont véglegesítéséhez.</p>' +
    '<div style="background:rgba(184,150,90,0.06);border-left:3px solid #B8965A;padding:16px 20px;margin:24px 0;border-radius:0 4px 4px 0;">' +
    '<p style="font-size:13px;color:#1A1816;margin:0 0 8px;font-weight:600;">A konzultáció tartalma:</p>' +
    '<p style="font-size:13px;color:rgba(26,24,22,0.6);margin:0;line-height:1.9;">' +
    '• Observ 520x bőrdiagnosztika 8 klinikai módban<br>' +
    '• Személyes orvosi konzultáció<br>' +
    '• Protocol útvonal tervezés<br>' +
    '• Átlátható költségbecslés</p></div>' +
    '<p style="color:rgba(26,24,22,0.5);font-size:13px;font-style:italic;">A konzultáció díja 15.000 Ft, amely a kezelés árából levonásra kerül.</p>';
}

function getObservAutoresponder(data, firstName) {
  return '<p style="color:#1A1816;font-size:15px;line-height:1.8;">Kedves ' + (firstName || 'Leendő Páciensünk') + ',</p>' +
    '<p style="color:rgba(26,24,22,0.7);font-size:14px;line-height:1.8;"><strong>Gratulálunk!</strong> Ön jogosult az ingyenes Observ 520x bőrdiagnosztikára.</p>' +
    '<p style="color:rgba(26,24,22,0.7);font-size:14px;line-height:1.8;">Munkatársunk <strong>24 órán belül</strong> jelentkezik az időpont egyeztetéséhez.</p>' +
    '<div style="background:rgba(184,150,90,0.06);border-left:3px solid #B8965A;padding:16px 20px;margin:24px 0;border-radius:0 4px 4px 0;">' +
    '<p style="font-size:13px;color:#1A1816;margin:0 0 8px;font-weight:600;">Amit kapni fog:</p>' +
    '<p style="font-size:13px;color:rgba(26,24,22,0.6);margin:0;line-height:1.9;">' +
    '✓ Professzionális bőrelemzés 8 klinikai módban<br>' +
    '✓ Részletes bőrállapot-dokumentáció<br>' +
    '✓ Személyre szabott kezelési javaslat<br>' +
    '✓ Protocol útvonal tervezés</p></div>' +
    '<p style="color:#B8965A;font-size:13px;font-style:italic;">Ez normál esetben 25.000 Ft értékű szolgáltatás — Önnek ajándék.</p>';
}

function getLedMaskAutoresponder(data, firstName) {
  return '<p style="color:#1A1816;font-size:15px;line-height:1.8;">Kedves ' + (firstName || '') + ',</p>' +
    '<p style="color:rgba(26,24,22,0.7);font-size:14px;line-height:1.8;">Köszönjük érdeklődését az ULTIMA LED Beauty Mask iránt!</p>' +
    '<div style="background:rgba(184,150,90,0.06);border-left:3px solid #B8965A;padding:16px 20px;margin:24px 0;border-radius:0 4px 4px 0;">' +
    '<p style="font-size:13px;color:#1A1816;margin:0 0 8px;font-weight:600;">Az ULTIMA LED Mask:</p>' +
    '<p style="font-size:13px;color:rgba(26,24,22,0.6);margin:0;line-height:1.9;">' +
    '• 93 gramm, food-grade szilikon<br>' +
    '• 4 terápiás hullámhossz (415nm, 590nm, 630nm, 850nm)<br>' +
    '• A Protocol rendszer III. pilléje — otthoni regeneráció</p></div>' +
    '<p style="color:rgba(26,24,22,0.7);font-size:14px;line-height:1.8;"><strong>Ajándék:</strong> Minden maskvásárláshoz jár egy ingyenes Observ 520x bőrdiagnosztika!</p>' +
    '<p style="color:rgba(26,24,22,0.7);font-size:14px;line-height:1.8;">Munkatársunk hamarosan felveszi Önnel a kapcsolatot a részletekről.</p>';
}

function getClinicalAutoresponder(data, firstName) {
  return '<p style="color:#1A1816;font-size:15px;line-height:1.8;">Kedves ' + (firstName || '') + ',</p>' +
    '<p style="color:rgba(26,24,22,0.7);font-size:14px;line-height:1.8;">Köszönjük a <strong>' + (data.program || 'Clinical Program') + '</strong> programra való jelentkezését.</p>' +
    '<p style="color:rgba(26,24,22,0.7);font-size:14px;line-height:1.8;">A Clinical Programba való bekerülés orvosi konzultáció és szakmai kiválasztás alapján történik.</p>' +
    '<div style="background:rgba(184,150,90,0.06);border-left:3px solid #B8965A;padding:16px 20px;margin:24px 0;border-radius:0 4px 4px 0;">' +
    '<p style="font-size:13px;color:#1A1816;margin:0 0 8px;font-weight:600;">Következő lépések:</p>' +
    '<p style="font-size:13px;color:rgba(26,24,22,0.6);margin:0;line-height:1.9;">' +
    '1. Orvosunk áttekinti jelentkezését (2-3 munkanap)<br>' +
    '2. Telefonos egyeztetés<br>' +
    '3. Személyes konzultáció + Observ diagnosztika<br>' +
    '4. Kezelési terv összeállítása</p></div>';
}

function getFoundingAutoresponderSubject(data, firstName) {
  var subjects = {
    'Discovery': 'Üdvözöljük a Discovery programban!',
    'Early Access': 'Helye biztosítva — Early Access',
    'Founding Member': 'Founding Member — személyes üdvözlet'
  };
  return subjects[data.foundingLevel] || 'Founding Access — regisztráció megerősítve';
}

function getFoundingAutoresponder(data, firstName) {
  var level = data.foundingLevel || 'Discovery';

  var benefits = {
    'Discovery': '✓ Ajándék Observ 520x bőrdiagnosztika<br>✓ Havi hírlevél a Protocol fejlesztésekről<br>✓ Elsőként értesül minden újdonságról',
    'Early Access': '✓ Minden Discovery előny<br>✓ HILEFT szövetelőkészítő kezelés<br>✓ Kedvezményes ULTIMA LED Mask<br>✓ Személyre szabott otthoni protokoll<br>✓ Elsőbbségi időpont',
    'Founding Member': '✓ Teljes Protocol ciklus<br>✓ VIP árazás — életre szólóan<br>✓ Közvetlen kapcsolat az alapítóval<br>✓ Minden Early Access előny'
  };

  return '<p style="color:#1A1816;font-size:15px;line-height:1.8;">Kedves ' + (firstName || '') + ',</p>' +
    '<p style="color:rgba(26,24,22,0.7);font-size:14px;line-height:1.8;">' +
    (level === 'Founding Member' ? 'Köszönjük a Founding Member iránti érdeklődését. A pozíció korlátozott számban érhető el.' :
     level === 'Early Access' ? 'Gratulálunk! Early Access helye biztosítva.' :
     'Sikeresen regisztrált a Discovery szintre!') + '</p>' +
    '<div style="background:rgba(184,150,90,0.06);border-left:3px solid #B8965A;padding:16px 20px;margin:24px 0;border-radius:0 4px 4px 0;">' +
    '<p style="font-size:13px;color:#1A1816;margin:0 0 8px;font-weight:600;">' + level + ' előnyök:</p>' +
    '<p style="font-size:13px;color:rgba(26,24,22,0.6);margin:0;line-height:1.9;">' +
    (benefits[level] || benefits['Discovery']) + '</p></div>' +
    '<p style="color:rgba(26,24,22,0.7);font-size:14px;line-height:1.8;">Munkatársunk hamarosan felveszi Önnel a kapcsolatot.</p>';
}

function getAkademiaAutoresponder(data, firstName) {
  return '<p style="color:#1A1816;font-size:15px;line-height:1.8;">Kedves ' + (firstName || '') + ',</p>' +
    '<p style="color:rgba(26,24,22,0.7);font-size:14px;line-height:1.8;">Köszönjük jelentkezését a <strong>' + (data.program || 'The Ultimate Beauty Akadémia') + '</strong> programra!</p>' +
    '<p style="color:rgba(26,24,22,0.7);font-size:14px;line-height:1.8;">A képzésről részletes tájékoztatót küldünk hamarosan.</p>';
}

function getNewsletterAutoresponder(data, firstName) {
  return '<p style="color:#1A1816;font-size:15px;line-height:1.8;">Kedves ' + (firstName || 'Feliratkozó') + ',</p>' +
    '<p style="color:rgba(26,24,22,0.7);font-size:14px;line-height:1.8;">Köszönjük, hogy feliratkozott hírlevelünkre!</p>' +
    '<p style="color:rgba(26,24,22,0.7);font-size:14px;line-height:1.8;">Mire számíthat:</p>' +
    '<div style="background:rgba(184,150,90,0.06);border-left:3px solid #B8965A;padding:16px 20px;margin:24px 0;border-radius:0 4px 4px 0;">' +
    '<p style="font-size:13px;color:rgba(26,24,22,0.6);margin:0;line-height:1.9;">' +
    '• Exkluzív bőrápolási tippek<br>' +
    '• A Protocol rendszer újdonságai<br>' +
    '• Kedvezményes ajánlatok elsőként<br>' +
    '• Tudományos háttér közérthetően</p></div>';
}

// ─── HELPER FUNCTIONS ─────────────────────────────────────────

function getSheetName(formType) {
  var map = {
    'konzultacio': CONFIG.SHEETS.KONZULTACIO,
    'observ': CONFIG.SHEETS.OBSERV,
    'led-mask': CONFIG.SHEETS.LED_MASK,
    'clinical': CONFIG.SHEETS.CLINICAL,
    'founding': CONFIG.SHEETS.FOUNDING,
    'akademia': CONFIG.SHEETS.AKADEMIA,
    'newsletter': CONFIG.SHEETS.NEWSLETTER
  };
  return map[formType] || CONFIG.SHEETS.NEWSLETTER;
}

function getSourceLabel(formType) {
  var labels = {
    'konzultacio': 'Konzultáció form',
    'observ': 'Observ Ingyenes',
    'led-mask': 'LED Mask',
    'clinical': 'Clinical Program',
    'founding': 'Founding Access',
    'akademia': 'Akadémia',
    'newsletter': 'Newsletter',
    'exit': 'Exit popup',
    'pdf': 'PDF letöltés',
    'quiz': 'Bőr kvíz'
  };
  return labels[formType] || formType;
}

function getOrCreateSheet(ss, name) {
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
  }
  return sheet;
}

function getHeaders(sheet) {
  if (sheet.getLastRow() === 0) return [];
  return sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].filter(function(h) { return h !== ''; });
}

function createHeadersForType(formType) {
  var common = ['Beérkezés', 'Név', 'Email', 'Telefon'];

  var specific = {
    'konzultacio': common.concat(['Érdeklődési terület', 'Preferált időpont', 'Üzenet', 'Forrás', 'Oldal URL']),
    'observ': common.concat(['Bőrprobléma', 'Forrás', 'Oldal URL']),
    'led-mask': common.concat(['Érdeklődés típusa', 'Kérdés', 'Honnan hallott', 'Forrás', 'Oldal URL']),
    'clinical': common.concat(['Életkor', 'Program', 'Cél', 'Korábbi beavatkozás', 'Milyen', 'Allergia', 'Allergia részlet', 'Forrás', 'Oldal URL']),
    'founding': common.concat(['Szint', 'Honnan hallott', 'Preferált kezdés', 'Bemutatkozás', 'Forrás', 'Oldal URL']),
    'akademia': common.concat(['Program', 'Érdeklődés', 'Foglalkozás', 'Tapasztalat', 'Cég', 'Beosztás', 'Motiváció', 'Forrás', 'Oldal URL']),
    'newsletter': ['Beérkezés', 'Email', 'Keresztnév', 'Forrás', 'Oldal URL']
  };

  return specific[formType] || common.concat(['Forrás', 'Oldal URL']);
}

function headerToKey(header) {
  var map = {
    'Beérkezés': 'timestamp',
    'Név': 'fullName',
    'Email': 'email',
    'Telefon': 'phone',
    'Érdeklődési terület': 'interest',
    'Preferált időpont': 'preferredDate',
    'Üzenet': 'message',
    'Bőrprobléma': 'skinProblem',
    'Érdeklődés típusa': 'interestType',
    'Kérdés': 'question',
    'Honnan hallott': 'heardFrom',
    'Életkor': 'age',
    'Program': 'program',
    'Cél': 'goal',
    'Korábbi beavatkozás': 'previousProcedure',
    'Milyen': 'procedureDetails',
    'Allergia': 'allergy',
    'Allergia részlet': 'allergyDetails',
    'Szint': 'foundingLevel',
    'Preferált kezdés': 'preferredStart',
    'Bemutatkozás': 'introduction',
    'Érdeklődés': 'interests',
    'Foglalkozás': 'occupation',
    'Tapasztalat': 'experience',
    'Cég': 'company',
    'Beosztás': 'position',
    'Motiváció': 'motivation',
    'Keresztnév': 'firstName',
    'Forrás': 'source',
    'Oldal URL': 'pageUrl'
  };
  return map[header] || header.toLowerCase().replace(/\s+/g, '_');
}

function formatFieldName(key) {
  var names = {
    'fullName': 'Teljes név',
    'email': 'Email',
    'phone': 'Telefon',
    'interest': 'Érdeklődés',
    'skinProblem': 'Bőrprobléma',
    'interestType': 'Érdeklődés típusa',
    'foundingLevel': 'Founding szint',
    'program': 'Program',
    'age': 'Életkor',
    'goal': 'Cél',
    'source': 'Forrás',
    'timestamp': 'Időpont',
    'firstName': 'Keresztnév',
    'message': 'Üzenet',
    'heardFrom': 'Honnan hallott'
  };
  return names[key] || key;
}

function formatHeaderRow(sheet, colCount) {
  var headerRange = sheet.getRange(1, 1, 1, colCount);
  headerRange.setBackground('#1A1816');
  headerRange.setFontColor('#D4B077');
  headerRange.setFontWeight('bold');
  headerRange.setFontSize(10);
  sheet.setFrozenRows(1);
}

// ─── DASHBOARD UPDATER (optional, run daily via trigger) ──────
function updateDashboard() {
  var ss = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
  var dashboard = getOrCreateSheet(ss, CONFIG.SHEETS.DASHBOARD);

  // Clear and rebuild
  dashboard.clear();

  var headers = ['Metrika', 'Érték', 'Utolsó frissítés'];
  dashboard.getRange(1, 1, 1, 3).setValues([headers]);
  formatHeaderRow(dashboard, 3);

  var metrics = [];

  // Count patients
  var master = ss.getSheetByName(CONFIG.SHEETS.MASTER);
  var totalPatients = master ? Math.max(master.getLastRow() - 1, 0) : 0;
  metrics.push(['Összes páciens', totalPatients, new Date()]);

  // Count by form type
  Object.keys(CONFIG.SHEETS).forEach(function(key) {
    if (key === 'MASTER' || key === 'DASHBOARD') return;
    var sheet = ss.getSheetByName(CONFIG.SHEETS[key]);
    var count = sheet ? Math.max(sheet.getLastRow() - 1, 0) : 0;
    metrics.push([CONFIG.SHEETS[key] + ' beküldések', count, new Date()]);
  });

  if (metrics.length > 0) {
    dashboard.getRange(2, 1, metrics.length, 3).setValues(metrics);
  }
}

// ─── SETUP: Run this once to initialize sheets ────────────────
function initializeSheets() {
  var ss = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);

  // Create all sheets
  Object.keys(CONFIG.SHEETS).forEach(function(key) {
    getOrCreateSheet(ss, CONFIG.SHEETS[key]);
  });

  // Initialize Master Patients
  var master = ss.getSheetByName(CONFIG.SHEETS.MASTER);
  if (master.getLastRow() === 0) {
    var headers = [
      'Páciens ID', 'Teljes név', 'Email', 'Telefon',
      'Első kontakt', 'Forrás', 'Érdeklődés', 'Státusz',
      'Founding szint', 'Observ elvégezve', 'Lead Score',
      'Utolsó aktivitás', 'Összes interakció', 'Megjegyzés'
    ];
    master.getRange(1, 1, 1, headers.length).setValues([headers]);
    formatHeaderRow(master, headers.length);
  }

  Logger.log('✅ Sheets inicializálva!');
}
