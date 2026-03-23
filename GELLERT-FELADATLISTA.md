# GELLÉRT — FELADATLISTA
## The Ultimate Beauty · JotForm + Stripe beállítás
### Dátum: 2026-03-23 | Készítette: Apa + Claude AI

---

> **Szia Gellért!** 👋
>
> Ebben a dokumentumban összegyűjtöttük mindent ami a JotForm-ban kell.
> Minden szöveg, beállítás, email tartalom itt van — csak végig kell menned rajta.
> Ha valami nem világos, kérdezd bátran Apát!

### Feladataid (max ~2 óra):
| # | Feladat | Becsült idő |
|---|---------|-------------|
| A | Általános javítások (nyelv, stílus, cím) | 10 perc |
| B | 7 form tartalmi javítás | 45 perc |
| C | Stripe termék + bekötés (LED Mask) | 20 perc |
| D | Google Sheets bekötés (7 tab) | 15 perc |
| E | Autoresponder + notification emailek | 20 perc |
| F | Gyors teszt | 10 perc |

---

# ═══════════════════════════════════════
# A) ÁLTALÁNOS SZABÁLYOK — MINDEN FORMRA
# ═══════════════════════════════════════

## A1. NYELV — Minden legyen MAGYAR

Nézd végig az ÖSSZES formot és javítsd:

- [ ] "Please Select" → **"Válasszon..."**
- [ ] "Submit" → **"Küldés"** (vagy specifikus szöveg, lásd lent)
- [ ] "Next" → **"Tovább"**
- [ ] "Required" hibaüzenet → **"Kötelező mező"**
- [ ] "Please fill this field" → **"Kérjük töltse ki ezt a mezőt"**
- [ ] "Invalid email" → **"Érvénytelen email cím"**
- [ ] "Invalid phone" → **"Kérjük, írjon be egy érvényes telefonszámot"** (ez már jó a screenshoton)
- [ ] Minden placeholder, label, hibaüzenet legyen MAGYAR

## A2. TILTOTT SZAVAK — sehol NE szerepeljen:

- [ ] ~~"ajándék"~~ → NEM! Sehol, semmilyen formban!
- [ ] ~~"ajándék Observ"~~ → helyette: **"ingyenes Observ"**
- [ ] ~~"Mask mellé"~~ Observ kapcsán → AZ OBSERV ÖNÁLLÓ AKCIÓ, nem a Maskhoz jár!

**Helyes szövegek:**
- "Ingyenes Observ 520x bőrdiagnosztika"
- "A nyitási időszakban ingyenes"
- "Korlátozott helyek"

## A3. CÍM — mindenhol ez legyen:

```
The Ultimate Beauty Clinic
1124 Budapest, Németvölgyi út 68.
Email: info@theultimatebeauty.net
Telefon: +36 1 790 3017
```

⚠️ NEM Gyöngyvirág, NEM Pasaréti, NEM 1026!

## A4. STÍLUS BEÁLLÍTÁSOK — minden formban

1. Menj: **Settings → Form Design → Theme**
2. Színek:
   - Háttér: `#FDFAF6` (krém/ivory)
   - Gomb szín: `#B8965A` (arany)
   - Gomb szöveg: `#FFFFFF` (fehér)
   - Cím szín: `#2C2824` (sötét)
3. Font: **Montserrat** (ha elérhető a JotForm-ban)
4. JotForm logó: rejtsd el ha tudod (Settings → Form Design → Show JotForm Logo → OFF)

---

# ═══════════════════════════════════════
# B) FORM-SPECIFIKUS JAVÍTÁSOK
# ═══════════════════════════════════════

---

## FORM 1: SZEMÉLYES KONZULTÁCIÓ FOGLALÁS
**URL:** https://form.jotform.com/260812972566061

### Ellenőrizd/javítsd:

- [ ] **Submit gomb** MINDIG látszódik (nincs rajta condition ami elrejti)
- [ ] Submit gomb szöveg: **"Konzultáció kérése"**
- [ ] Nincs "ajándék" szó sehol a formban

### Mezők amik kellenek:

| Mező | Típus | Kötelező |
|------|-------|----------|
| Teljes név | Full Name (Keresztnév + Vezetéknév) | ✅ |
| Email cím | Email | ✅ |
| Telefonszám | Phone (International, +36) | ✅ |
| Érdeklődési terület | Dropdown | ✅ |
| Preferált időpont | Date Picker | ❌ |
| Üzenet | Long Text (max 500 kar.) | ❌ |
| GDPR checkbox | Checkbox | ✅ |

### Érdeklődési terület dropdown opciók:
```
1. Integrált arcfiatalítás
2. Bőrminőség javítás
3. Testkezelés (Venus Legacy + HILEFT)
4. Mini Face Lift konzultáció
5. Szülés utáni regeneráció
6. Általános konzultáció / Még nem tudom
```

### Fizetés:
❌ MOST NEM KELL — későbbre tervezzük (foglalási díj: 15.000 Ft, de még nincs eldöntve)

### Megjegyzés mező placeholder:
```
Van valami amit előre szeretne megosztani?
```

### Dátum mező megjegyzés:
```
Pontos időpontot telefonon egyeztetünk
```

---

## FORM 2: INGYENES OBSERV 520x BŐRELEMZÉS
**URL:** https://form.jotform.com/260811666568062

### Ellenőrizd/javítsd:

- [ ] A form címe: **"Ingyenes Observ 520x Bőrelemzés"** (NEM "ajándék"!)
- [ ] Subtitle: **"8 klinikai módban feltérképezzük bőre valódi állapotát — a nyitási időszakban ingyenes."**
- [ ] Submit gomb: **"Ingyenes bőrelemzést kérek"**
- [ ] Submit gomb MINDIG látszódik
- [ ] NINCS "ajándék" szó sehol
- [ ] NINCS "Mask mellé" szöveg sehol

### Mezők:

| Mező | Típus | Kötelező |
|------|-------|----------|
| Teljes név | Full Name | ✅ |
| Email cím | Email | ✅ |
| Telefonszám | Phone (+36) | ✅ |
| Fő bőrprobléma | Radio (Single Choice) | ✅ |
| GDPR | Checkbox | ✅ |

### Fő bőrprobléma opciók:
```
1. Öregedés jelei (ráncok, tónusvesztés)
2. Pigmentáció / bőrtónus egyenetlenség
3. Aknés / problémás bőr
4. Szárazság / érzékenység
5. Csak kíváncsi vagyok a bőröm állapotára
```

### Fizetés:
❌ NEM KELL — ez INGYENES

---

## FORM 3: ULTIMA LED MASK ÉRDEKLŐDÉS / VÁSÁRLÁS ⭐⭐⭐ LEGTÖBB MUNKA
**URL:** https://form.jotform.com/260812571961055

### 🔴 BUG JAVÍTÁSOK:

#### BUG 1: Submit gomb nem jelenik meg!
- [ ] Menj a **Submit/Küldés gomb** beállításaiba
- [ ] **Conditions** fül → **töröld az ÖSSZES condition-t**
- [ ] A Submit gomb **MINDIG** látszódjon, bármit is választ a user

#### BUG 2: "Ajándék Observ" opció
- [ ] Az "Érdeklődés típusa" mezőben írd ÁT:
  - ~~"Ajándék Observ bőrelemzést kérek a maszkhoz"~~
  - **ÚJ szöveg:** "Ingyenes Observ bőrelemzést is kérek"

#### BUG 3: "Please Select"
- [ ] "Honnan hallott a maszkról?" dropdown placeholder: **"Válasszon..."**

### 💳 STRIPE FIZETÉS BEÁLLÍTÁSA:

Ez a LEGFONTOSABB rész — online Mask vásárlás!

#### Lépések:

**1. Stripe összekötése a JotForm-mal:**
- [ ] JotForm → Settings → **Integrations** → keress rá: **"Stripe"**
- [ ] Kattints: **Connect Stripe Account**
- [ ] Stripe fiók: `acct_1SyppIRSJ6a3ztwr` (Heni nevén, Apa kezeli)
- [ ] Engedélyezd a hozzáférést

**2. Payment mező hozzáadása a formhoz:**
- [ ] Kattints **"Add Form Element"** → **"Payment"** → **"Sell Products"**
- [ ] Termék beállítás:
  - **Név:** ULTIMA LED Beauty Mask
  - **Ár:** 120.000 Ft
  - **Mennyiség:** 1 (fix, ne lehessen változtatni)
  - **Leírás:** "93g food-grade szilikon · 4 terápiás hullámhossz · 2 év garancia"
  - **Kép:** tegyél fel egy Mask képet

**3. Conditional Logic — a fizetés CSAK vásárlásnál jelenjen meg:**
- [ ] Kattints a Payment mezőre → **Conditions**
- [ ] Új feltétel: **"Show this field if"**
  - "Érdeklődés típusa" **is equal to** "Meg szeretném vásárolni a maszkot"
- [ ] Ha más opciót választ → a fizetési mező REJTVE marad

**4. Garancia szöveg hozzáadása (a fizetés ELŐTT):**
- [ ] Adj hozzá egy **"Text/Heading"** mezőt a Payment mező FÖlé
- [ ] Szöveg:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ULTIMA LED Mask — Garancia

✓ 2 év gyártói garancia
✓ A készülék egyedi sorozatszámát emailben küldjük
✓ Garanciális igény: info@theultimatebeauty.net

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```
- [ ] Ennek a szövegmezőnek is legyen **condition:** CSAK ha "Meg szeretném vásárolni"

**5. Szállítás mező (KÉSŐBB — egyelőre skip):**
> Apa még nem döntötte el a szállítási díjat.
> Ha lesz szállítási díj, adj hozzá egy dropdown-t:
> "Átvétel módja" → "Személyes átvétel a klinikán (ingyenes)" / "Házhozszállítás (+X Ft)"

### Submit gomb szöveg:
- [ ] Ha van fizetés: **"Rendelés és fizetés"**
- [ ] Ha nincs: **"Érdeklődés küldése"**
- [ ] (Ha nem tudod dinamikusra állítani → legyen: **"Küldés"**)

### Érdeklődés típusa opciók (JAVÍTOTT):
```
1. Meg szeretném vásárolni a maszkot          → fizetés + garancia megjelenik
2. Kérdésem van a maszk használatáról        → kérdés textbox megjelenik
3. Ingyenes Observ bőrelemzést is kérek      → (NEM "ajándék"!)
4. Viszonteladói / disztribútori érdeklődés
```

### "Honnan hallott a maszkról?" dropdown opciók:
```
Válasszon... (placeholder)
Instagram
Facebook
Google kereső
Ismerős ajánlotta
A klinikán
Egyéb
```

---

## FORM 4: CLINICAL PROGRAM JELENTKEZÉS
**URL:** https://form.jotform.com/260812813146049

### Ellenőrizd/javítsd:

- [ ] Submit gomb MINDIG látszódik
- [ ] Submit szöveg: **"Jelentkezés elküldése"**
- [ ] Nincs "ajándék" szó

### Mezők:

| Mező | Típus | Kötelező | Conditional |
|------|-------|----------|-------------|
| Teljes név | Full Name | ✅ | |
| Email cím | Email | ✅ | |
| Telefonszám | Phone | ✅ | |
| Életkor | Number (min: 18, max: 80) | ✅ | |
| Választott program | Dropdown | ✅ | |
| Mi a fő célja? | Long Text (max 300) | ✅ | |
| Volt-e esztétikai beavatkozása? | Yes/No | ✅ | |
| ↳ Milyen? | Short Text | ✅ | CSAK ha "Igen" |
| Allergia / egészségügyi állapot? | Yes/No | ✅ | |
| ↳ Részletek | Short Text | ✅ | CSAK ha "Igen" |
| GDPR | Checkbox | ✅ | |

### Választott program dropdown opciók:
```
1. Integrált arcfiatalítás (Ultimate Lift)
2. Kollagén újraépítés (40+)
3. Szemkörnyéki regeneráció
4. Férfi esztétika (Executive Protocol)
5. Testfeszesítés / hasfali rehabilitáció
6. Sebészeti előkészítés és regeneráció
```

### Fizetés:
❌ NEM KELL — személyes orvosi egyeztetés alapján dől el

---

## FORM 5: FOUNDING ACCESS REGISZTRÁCIÓ
**URL:** https://form.jotform.com/260812808596062

### ⚠️ FONTOS: Szint-választó mező KELL!

Az oldalon 3 gomb van (Discovery / Early Access / Founding Member) és mind erre a formra mutat.
A formnak **TUDNIA KELL melyik szintet** választotta a user!

### Ellenőrizd/javítsd:

- [ ] **Van szint-választó mező?** Ha NINCS → hozd létre!
- [ ] A Discovery szintben: **"Ingyenes Observ"** (NEM "ajándék"!)
- [ ] Submit szöveg: **"Regisztráció"**
- [ ] Submit gomb MINDIG látszódik

### Mezők:

| Mező | Típus | Kötelező | Conditional |
|------|-------|----------|-------------|
| **Választott szint** | Radio (Single Choice) | ✅ | |
| Teljes név | Full Name | ✅ | |
| Email cím | Email | ✅ | |
| Telefonszám | Phone | ✅ | |
| Honnan hallott rólunk? | Dropdown | ❌ | |
| ↳ Preferált kezdés | Date Picker | ❌ | CSAK ha Early Access vagy Founding |
| ↳ Rövid bemutatkozás | Long Text | ❌ | CSAK ha Founding Member |
| GDPR | Checkbox | ✅ | |

### Szint opciók (Radio):
```
🟢 Discovery (Ingyenes)
   Ingyenes Observ bőrelemzés · Hírlevél · Értesítések

🟡 Early Access
   Minden Discovery előny + HILEFT kezelés + Kedvezményes LED Mask + Elsőbbségi időpont

🔷 Founding Member (Limitált)
   Minden előny + Teljes Protocol ciklus + VIP árazás életre szólóan + Személyes kapcsolat
```

### Fizetés:
❌ NEM KELL — nincs regisztrációs díj egyik szintnél sem

### "Honnan hallott rólunk?" dropdown:
```
Válasszon... (placeholder)
Instagram
Facebook
Google kereső
Ismerős ajánlotta
Egyéb
```

---

## FORM 6: AKADÉMIA JELENTKEZÉS
**URL:** https://form.jotform.com/260812371139050

### Ellenőrizd/javítsd:

- [ ] Submit gomb: **"Jelentkezés elküldése"**
- [ ] Submit gomb MINDIG látszódik
- [ ] Nincs "ajándék" szó

### Mezők:

| Mező | Típus | Kötelező | Conditional |
|------|-------|----------|-------------|
| Teljes név | Full Name | ✅ | |
| Email cím | Email | ✅ | |
| Telefonszám | Phone | ✅ | |
| Választott program | Radio (Single Choice) | ✅ | |
| ↳ Mi érdekli? | Multi Checkbox | ❌ | CSAK ha Workshop |
| ↳ Foglalkozás | Short Text | ✅ | CSAK ha Referens |
| ↳ Tapasztalat | Dropdown | ❌ | CSAK ha Referens |
| ↳ Cég neve | Short Text | ✅ | CSAK ha Inhouse |
| ↳ Beosztás | Short Text | ❌ | CSAK ha Inhouse |
| Motiváció | Long Text (max 300) | ❌ | |
| GDPR | Checkbox | ✅ | |

### Program opciók:
```
1. "Tudatos Páciens" Workshop — pácienseknek, 1 napos
2. "Referens Associate" Képzés — szakembereknek, akkreditált
3. "Inhouse Referens" Belső Képzés — klinikák számára, testreszabott
```

### Fizetés:
❌ NEM KELL MOST — "coming soon" az árak, később adjuk hozzá

### Workshop érdeklődési checkbox opciók (ha Workshop-ot választ):
```
□ Bőrápolás alapjai
□ LED fotobiomoduláció technológia
□ Observ diagnosztika megértése
□ Otthoni protokoll összeállítás
```

### Referens tapasztalat dropdown:
```
0-2 év
3-5 év
5-10 év
10+ év
```

---

## FORM 7: EMAIL SUBSCRIPTION & NEWSLETTER
**URL:** https://form.jotform.com/260812738145054

### Ellenőrizd/javítsd:

- [ ] MAXIMUM 3 mező! Ez legyen a legegyszerűbb form
- [ ] Submit gomb: **"Feliratkozás"**
- [ ] Nincs "ajándék" szó

### Mezők (MINIMÁLIS):

| Mező | Típus | Kötelező |
|------|-------|----------|
| Email cím | Email | ✅ |
| Keresztnév | Short Text | ❌ |
| GDPR | Checkbox | ✅ |

### Fizetés:
❌ NEM KELL — ingyenes feliratkozás

---

# ═══════════════════════════════════════
# C) STRIPE BEÁLLÍTÁS
# ═══════════════════════════════════════

## C1. Stripe fiók adatok:
- **Dashboard:** https://dashboard.stripe.com/acct_1SyppIRSJ6a3ztwr/dashboard
- **Fiók:** Heni nevén, Apa kezeli
- **Pénznem:** HUF (magyar forint)

## C2. Termék létrehozása a Stripe-ban:

1. Nyisd meg: https://dashboard.stripe.com/products
2. Kattints: **"+ Add product"**
3. Állítsd be:

```
Termék neve:    ULTIMA LED Beauty Mask
Leírás:         93g food-grade szilikon LED maszk · 4 terápiás hullámhossz
                (415nm, 590nm, 630nm, 850nm) · 2 év garancia
Ár:             120.000 Ft (egyszeri fizetés, NEM subscription)
Kép:            [Tölts fel egy szép Mask képet]
```

4. Mentsd el → jegyezd fel a **Price ID**-t (pl. `price_1Abc...`)

## C3. JotForm ↔ Stripe összekötés:

### Csak a LED Mask formban kell (260812571961055):

1. Nyisd meg a formot a JotForm szerkesztőben
2. **Settings** → **Integrations** → keress: **"Stripe"**
3. **Connect** → bejelentkezel a Stripe fiókba → engedélyezed
4. A formba adj hozzá **Payment** mezőt:
   - Form Builder → bal oldalt → **"Payment"** → **"Sell Products"**
   - Termék: ULTIMA LED Beauty Mask
   - Ár: 120.000 Ft
   - Mennyiség: 1 (fix)
5. **Conditional Logic** a Payment mezőre:
   - Show if: "Érdeklődés típusa" = "Meg szeretném vásárolni a maszkot"
   - Bármely más opció → a Payment mező REJTVE

## C4. Stripe tesztelés:

1. A Stripe-ban kapcsold be a **Test Mode**-ot (jobb felső sarok)
2. Tesztkártya: `4242 4242 4242 4242` / bármilyen jövőbeli dátum / bármilyen CVC
3. Próbáld ki a formot → nézd meg hogy a fizetés megjelenik-e a Stripe Dashboard-on
4. Ha OK → kapcsolj **Live Mode**-ra

---

# ═══════════════════════════════════════
# D) GOOGLE SHEETS INTEGRÁCIÓ
# ═══════════════════════════════════════

## D1. A Google Sheet:
**URL:** https://docs.google.com/spreadsheets/d/1VsYufmvAD1mseRkK1AF-uorG-_NtCAtLiNpLdil_mo8/

## D2. Minden formhoz külön Sheet tab:

| JotForm | Google Sheet tab neve |
|---------|---------------------|
| Konzultáció | Konzultáció |
| Observ | Observ |
| LED Mask | LED Mask |
| Clinical | Clinical Program |
| Founding | Founding Access |
| Akadémia | Akadémia |
| Newsletter | Newsletter |

## D3. Beállítás (minden formhoz):

1. Nyisd meg a JotForm formot
2. **Settings** → **Integrations** → keress: **"Google Sheets"**
3. **Connect** → Google fiókba bejelentkezés
4. Spreadsheet: **"TUB CRM & Forms"**
5. Worksheet: válaszd a MEGFELELŐ tab-ot (lásd táblázat fent)
6. Mezők összerendelése: a JotForm mező → a Sheet oszlop

## D4. LED Mask tab — EXTRA oszlopok a garanciához:

A "LED Mask" Sheet tab-on legyenek ezek az oszlopok:

```
A: Beküldés dátuma     (JotForm auto)
B: Teljes név          (JotForm auto)
C: Email               (JotForm auto)
D: Telefon             (JotForm auto)
E: Érdeklődés típusa   (JotForm auto)
F: Fizetés összeg      (Stripe auto)
G: Stripe tranzakció   (Stripe auto)
H: Sorozatszám         (MANUÁLIS — Apa tölti ki!)
I: Garancia kezdet     (=A2 formula — a beküldés dátumából)
J: Garancia lejárat    (=EDATE(I2,24) formula — +2 év)
K: Kiszállítva         (MANUÁLIS — Igen/Nem)
L: Megjegyzés          (MANUÁLIS)
```

---

# ═══════════════════════════════════════
# E) AUTORESPONDER EMAILEK
# ═══════════════════════════════════════

Minden formhoz be kell állítani egy automatikus válasz emailt.

## E1. Beállítás helye:
JotForm → Settings → **Emails** → **Autoresponder Email**

## E2. Feladó email:
**info@theultimatebeauty.net** (minden formnál ugyanez)

## E3. Email szövegek:

### Konzultáció autoresponder:
**Tárgy:** `Köszönjük! Konzultációs kérését megkaptuk.`
```
Kedves {Teljes név},

Konzultációs kérését rögzítettük.
Munkatársunk 1 munkanapon belül felveszi Önnel
a kapcsolatot az időpont egyeztetéséhez.

A konzultáció tartalma:
• Observ 520x bőrdiagnosztika 8 klinikai módban
• Személyes orvosi konzultáció
• Protocol útvonal tervezés

Helyszín: 1124 Budapest, Németvölgyi út 68.
Tel: +36 1 790 3017

Üdvözlettel,
The Ultimate Beauty Clinic
```

### Observ autoresponder:
**Tárgy:** `Ingyenes Observ bőrelemzés — időpontját egyeztetjük!`
```
Kedves {Teljes név},

Ingyenes Observ 520x bőrelemzésre való
jelentkezését megkaptuk.

Munkatársunk 24 órán belül felveszi
Önnel a kapcsolatot.

Amit kapni fog:
✓ Professzionális bőrelemzés 8 klinikai módban
✓ Részletes bőrállapot-dokumentáció
✓ Személyre szabott kezelési javaslat

The Ultimate Beauty Clinic
1124 Budapest, Németvölgyi út 68.
```

### LED Mask autoresponder (VÁSÁRLÁS):
**Tárgy:** `ULTIMA LED Mask — rendelését rögzítettük!`
```
Kedves {Teljes név},

Köszönjük az ULTIMA LED Beauty Mask megrendelését!

Rendelés részletei:
• Termék: ULTIMA LED Beauty Mask
• Ár: 120.000 Ft
• 2 év gyártói garancia

A készülék egyedi sorozatszámát a csomag
kézbesítésekor emailben küldjük — kérjük
őrizze meg a garanciális igények
érvényesítéséhez.

Kérdés esetén: info@theultimatebeauty.net

The Ultimate Beauty Clinic
```

### LED Mask autoresponder (ÉRDEKLŐDÉS — nem vásárlás):
**Tárgy:** `ULTIMA LED Mask — érdeklődését megkaptuk!`
```
Kedves {Teljes név},

Köszönjük érdeklődését az ULTIMA LED Beauty Mask iránt!

Munkatársunk hamarosan felveszi Önnel a kapcsolatot
a részletekről.

The Ultimate Beauty Clinic
```

### Founding Access autoresponder:
**Tárgy:** `Founding Access — regisztrációját rögzítettük!`
```
Kedves {Teljes név},

Köszönjük a regisztrációt!
48 órán belül személyesen felvesszük
Önnel a kapcsolatot.

The Ultimate Beauty Clinic
```

### Clinical Program autoresponder:
**Tárgy:** `Clinical Program — jelentkezését megkaptuk`
```
Kedves {Teljes név},

Köszönjük a jelentkezést.
Orvosunk áttekinti jelentkezését és
2-3 munkanapon belül felvesszük
Önnel a kapcsolatot.

The Ultimate Beauty Clinic
```

### Newsletter autoresponder:
**Tárgy:** `Üdvözöljük! Sikeresen feliratkozott.`
```
Kedves {Keresztnév},

Sikeresen feliratkozott a The Ultimate Beauty hírlevelére.

Hamarosan kapja első hírlevelünket a Protocol
újdonságokról és exkluzív ajánlatokról.

The Ultimate Beauty Clinic
```

---

# ═══════════════════════════════════════
# F) NOTIFICATION EMAILEK (APÁNAK)
# ═══════════════════════════════════════

Minden form beküldéskor Apa kapjon értesítő emailt.

## Beállítás:
JotForm → Settings → **Emails** → **Notification Email**

## Címzett:
**info@theultimatebeauty.net**

## Tárgy minták:

| Form | Email tárgy | Prioritás |
|------|------------|-----------|
| Konzultáció | `ÚJ KONZULTÁCIÓ: {Név} — {Érdeklődési terület}` | Normál |
| Observ | `🔬 OBSERV LEAD: {Név}` | ⭐ 24h-n belül hívni! |
| LED Mask | `💡 MASK: {Név} — {Érdeklődés típusa}` | ⭐ Ha vásárlás! |
| Clinical | `🏥 CLINICAL: {Név} — {Program}` | Normál |
| Founding | `⭐ FOUNDING: {Név} — {Szint}` | ⭐ 48h-n belül hívni! |
| Akadémia | `🎓 AKADÉMIA: {Név} — {Program}` | Normál |
| Newsletter | `📧 FELIRATKOZÁS: {Email}` | Alacsony |

---

# ═══════════════════════════════════════
# G) VÉGSŐ CHECKLIST
# ═══════════════════════════════════════

## Minden formnál:
- [ ] Magyar nyelv mindenhol
- [ ] "ajándék" szó SEHOL
- [ ] Submit gomb MINDIG megjelenik
- [ ] GDPR checkbox megvan
- [ ] Google Sheets integráció beállítva
- [ ] Autoresponder email beállítva
- [ ] Notification email beállítva
- [ ] Mobil nézet tesztelve (JotForm → Preview → Mobile)
- [ ] Cím: 1124 Budapest, Németvölgyi út 68.

## LED Mask extra:
- [ ] Stripe összekötve
- [ ] Payment mező conditional (CSAK vásárlásnál)
- [ ] Garancia szöveg hozzáadva
- [ ] ~~"Ajándék Observ"~~ → "Ingyenes Observ is kérek"
- [ ] "Please Select" → "Válasszon..."
- [ ] Stripe tesztfizetés sikeres

## Founding Access extra:
- [ ] Van szint-választó mező (Discovery / Early Access / Founding)

## Tesztelés:
- [ ] Minden formot kitölteni és beküldeni tesztadattal
- [ ] Ellenőrizni hogy az adat megjelenik a Google Sheet-ben
- [ ] Ellenőrizni hogy az autoresponder email megérkezik
- [ ] Ellenőrizni hogy a notification email megérkezik Apának
- [ ] LED Mask: tesztfizetés Stripe test módban

---

# KÉSZ?

Ha mindent megcsináltál → szólj Apának, ő ellenőrzi!

*Készítette: Claude AI + Apa · 2026-03-23*
