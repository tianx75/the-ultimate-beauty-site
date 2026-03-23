# THE ULTIMATE BEAUTY — Google Apps Script & Sheets Setup

## Lépésről lépésre telepítés

### 1. Google Sheet létrehozása

1. Nyisd meg: [Google Sheets](https://sheets.google.com)
2. Hozz létre egy új üres táblázatot
3. Nevezd el: **"TUB CRM & Forms"**
4. Másold ki a Sheet ID-t az URL-ből:
   ```
   https://docs.google.com/spreadsheets/d/XXXXXXXXXXXXXXXXXXXXXX/edit
                                          ^^^^^^^^^^^^^^^^^^^^^^^^
                                          EZ A SPREADSHEET_ID
   ```

### 2. Google Apps Script beállítása

1. A Sheet-ben: **Bővítmények → Apps Script**
2. Töröld a `myFunction()` kódot
3. Másold be a `Code.gs` teljes tartalmát
4. A `CONFIG` objektumban cseréld ki:
   ```javascript
   SPREADSHEET_ID: 'A_TE_SPREADSHEET_ID_D'
   ```
5. Mentsd el (Ctrl+S)

### 3. Inicializálás

1. Az Apps Script editorban válaszd ki: `initializeSheets` függvényt
2. Kattints a ▶ (Futtatás) gombra
3. Első futtatáskor kéri az engedélyeket — **engedélyezd!**
4. Ez létrehozza az összes szükséges sheet-et:
   - MASTER PATIENTS
   - Konzultáció
   - Observ
   - LED Mask
   - Clinical Program
   - Founding Access
   - Akadémia
   - Newsletter
   - DASHBOARD

### 4. Web App közzététele (Deploy)

1. **Deploy → New deployment**
2. Típus: **Web app**
3. Beállítások:
   - Description: `TUB Form Backend v1`
   - Execute as: **Me** (a te fiókoddal)
   - Who has access: **Anyone** (hogy a weboldal el tudja érni)
4. Kattints: **Deploy**
5. Másold ki a **Web app URL**-t!

### 5. URL frissítése a weboldal kódban

A `js/forms.js` fájlban cseréld ki:
```javascript
var GOOGLE_SCRIPT_URL = 'AZ_ÚJ_WEB_APP_URL_IDE';
```

### 6. Dashboard automatikus frissítés (opcionális)

1. Apps Script editorban: **Triggers** (óra ikon balra)
2. **+ Add Trigger**
3. Beállítások:
   - Function: `updateDashboard`
   - Event source: Time-driven
   - Type: Day timer
   - Time: 6:00 AM - 7:00 AM
4. Ez naponta frissíti a Dashboard sheet-et

---

## Tesztelés

1. Nyisd meg a weboldalt
2. Töltsd ki bármelyik formot
3. Ellenőrizd:
   - ✅ A Google Sheet-ben megjelent az adat
   - ✅ A MASTER PATIENTS-ben létrejött a páciens rekord
   - ✅ Kaptál notification emailt
   - ✅ A kitöltő kapott autoresponder emailt

## Hibaelhárítás

- **"Permission denied"**: Futtasd újra az `initializeSheets`-et és engedélyezd
- **Nem érkezik adat**: Ellenőrizd, hogy a Web app URL helyes és "Anyone" hozzáféréssel van deploy-olva
- **Email nem megy**: Ellenőrizd a Gmail kvótát (naponta max 100 email ingyenes fiókkal)
- **Új deploy kell**: Ha módosítod a Code.gs-t → Deploy → Manage deployments → Edit → New version

## Google Sheet struktúra

```
Sheet 1: MASTER PATIENTS    ← Minden páciens 1 sor, egyedi TUB-XXXX ID
Sheet 2: Konzultáció        ← Konzultáció form beküldések
Sheet 3: Observ             ← Observ ingyenes bőrelemzés leadek
Sheet 4: LED Mask           ← LED Mask érdeklődések
Sheet 5: Clinical Program   ← Clinical Program jelentkezések
Sheet 6: Founding Access    ← Founding Access regisztrációk
Sheet 7: Akadémia           ← Akadémia jelentkezések
Sheet 8: Newsletter         ← Newsletter feliratkozások
Sheet 9: DASHBOARD          ← Összesítő (auto-frissül)
```
