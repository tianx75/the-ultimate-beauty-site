# THE ULTIMATE BEAUTY — JOTFORM JAVÍTÁSI & BEÁLLÍTÁSI ÚTMUTATÓ
## Verzió: 2026-03-23 | Készítette: Claude AI + Krisztián

> **Ez a dokumentum a fiadnak szól** — minden JotForm módosítás ami szükséges, egy helyen.
> Kérlek, haladj végig sorrendben és pipáld ki amit megcsináltál.

---

## ÁLTALÁNOS SZABÁLYOK (minden formra vonatkozik)

### ❌ TILTOTT SZAVAK — sehol ne szerepeljen:
- ~~"ajándék Observ"~~ → helyette: **"ingyenes Observ"**
- ~~"ajándék"~~ → sehol, semmilyen kontextusban
- ~~"Mask mellé"~~ vagy ~~"maszkhoz"~~ Observ kapcsán → **az Observ önálló akció**, nem a Maskhoz jár

### ✅ HELYES KOMMUNIKÁCIÓ:
- "Ingyenes Observ 520x bőrdiagnosztika a nyitási időszakban"
- "Korlátozott helyek"
- A Mask és az Observ **két külön dolog** — mindkettőnek saját formja van

### Nyelv:
- Minden mező, placeholder, hibaüzenet, gomb MAGYARUL
- "Please Select" → **"Válasszon..."**
- "Submit" → **"Küldés"** vagy specifikus szöveg (pl. "Érdeklődés küldése")
- "Required" → **"Kötelező mező"**
- "Next" → **"Tovább"**

---

## FORM 1: SZEMÉLYES KONZULTÁCIÓ FOGLALÁS
**JotForm ID:** `260812972566061`
**URL:** https://form.jotform.com/260812972566061
**Használva:** Home oldal + HILEFT oldal

### Mezők amik kellenek:

| Mező | Típus | Kötelező | Megjegyzés |
|------|-------|----------|------------|
| Teljes név | Full Name (Keresztnév + Vezetéknév) | ✅ Igen | |
| Email cím | Email | ✅ Igen | Placeholder: "pelda@email.hu" |
| Telefonszám | Phone | ✅ Igen | Format: International, default +36 |
| Érdeklődési terület | Dropdown | ✅ Igen | Lásd opciókat lent |
| Preferált időpont | Date Picker | ❌ Nem | Min: holnap, megjegyzés: "Pontos időpontot telefonon egyeztetünk" |
| Üzenet | Long Text | ❌ Nem | Max 500 karakter, placeholder: "Van valami amit előre szeretne megosztani?" |
| GDPR | Checkbox | ✅ Igen | "Elfogadom az adatkezelési tájékoztatót" |

### Érdeklődési terület dropdown opciók:
1. Integrált arcfiatalítás
2. Bőrminőség javítás
3. Testkezelés (Venus Legacy + HILEFT)
4. Mini Face Lift konzultáció
5. Szülés utáni regeneráció
6. Általános konzultáció / Még nem tudom

### Submit gomb szöveg: **"Konzultáció kérése"**

### ⚠️ ELLENŐRIZD:
- [ ] A Submit gomb MINDIG látszódik (nincs rajta condition)
- [ ] Nincs "ajándék" szó sehol a formban
- [ ] Minden placeholder magyar

---

## FORM 2: INGYENES OBSERV 520x BŐRELEMZÉS
**JotForm ID:** `260811666568062`
**URL:** https://form.jotform.com/260811666568062
**Használva:** Observ oldal + felajánlás a Mask és HILEFT oldalakon

### Mezők amik kellenek:

| Mező | Típus | Kötelező | Megjegyzés |
|------|-------|----------|------------|
| Teljes név | Full Name | ✅ Igen | |
| Email cím | Email | ✅ Igen | |
| Telefonszám | Phone | ✅ Igen | Default +36 |
| Fő bőrprobléma | Radio (Single Choice) | ✅ Igen | Lásd opciókat lent |
| GDPR | Checkbox | ✅ Igen | |

### Fő bőrprobléma opciók:
1. Öregedés jelei (ráncok, tónusvesztés)
2. Pigmentáció / bőrtónus egyenetlenség
3. Aknés / problémás bőr
4. Szárazság / érzékenység
5. Csak kíváncsi vagyok a bőröm állapotára

### Submit gomb szöveg: **"Ingyenes bőrelemzést kérek"**

### ⚠️ ELLENŐRIZD:
- [ ] A form címe: "Ingyenes Observ 520x Bőrelemzés" (NEM "ajándék"!)
- [ ] A subtitle/leírás: "8 klinikai módban feltérképezzük bőre valódi állapotát — a nyitási időszakban ingyenes."
- [ ] Nincs "ajándék" vagy "Mask mellé" szó sehol

---

## FORM 3: ULTIMA LED MASK ÉRDEKLŐDÉS / VÁSÁRLÁS ⭐ LEGTÖBB JAVÍTÁS
**JotForm ID:** `260812571961055`
**URL:** https://form.jotform.com/260812571961055
**Használva:** Mask oldal

### 🔴 KRITIKUS JAVÍTÁSOK:

#### 1. SUBMIT GOMB BUG — JAVÍTANI!
**Probléma:** Ha "Meg szeretném vásárolni" vagy "Kérdésem van" opciót választja a user, a Submit/Küldés gomb NEM jelenik meg.
**Javítás:**
- Menj a Submit gomb beállításaiba
- **Conditions** fül → töröld az összes condition-t
- A Submit gomb **MINDIG** látszódjon, minden opciónál

#### 2. "AJÁNDÉK OBSERV" OPCIÓ — ÁTÍRNI!
**Jelenlegi:** "Ajándék Observ bőrelemzést kérek a maszkhoz"
**Új szöveg:** **"Ingyenes Observ bőrelemzést is kérek"**
> Fontos: ez önálló akció, NEM a Mask mellé jár!

#### 3. "PLEASE SELECT" → MAGYARRA
**Javítás:** A "Honnan hallott a maszkról?" dropdown placeholder-jét írd át: **"Válasszon..."**

#### 4. FIZETÉSI INTEGRÁCIÓ HOZZÁADÁSA ⭐ ÚJ
**Cél:** Aki "Meg szeretném vásárolni"-t választ, az fizethessen online.

**Beállítás:**
1. JotForm → **Integrations** → **Payment**
2. Válaszd: **Stripe** (vagy PayPal)
3. Hozz létre egy **payment mezőt** a formban:
   - Termék neve: "ULTIMA LED Beauty Mask"
   - Ár: [az aktuális ár Ft-ban]
   - Mennyiség: 1 (fixed)
4. **Conditional Logic:** A fizetési mező CSAK AKKOR jelenjen meg, ha az "Érdeklődés típusa" = "Meg szeretném vásárolni a maszkot"
5. Ha más opciót választ → a fizetési mező NE jelenjen meg

#### 5. GARANCIA SZEKCIÓ HOZZÁADÁSA ⭐ ÚJ
**Hol:** Közvetlenül a fizetési mező ELŐTT vagy UTÁN

**Új szöveg mező (Heading/Text):**
```
ULTIMA LED Mask Garancia

Az ULTIMA LED Beauty Mask-ra 2 év gyártói garancia vonatkozik.
A garanciális igény érvényesítéséhez szükséges a készülék
egyedi sorozatszáma, amelyet a csomag kézhezvételekor emailben
is megküldünk Önnek.
```

#### 6. KÉSZÜLÉK SOROZATSZÁM MEZŐ ⭐ ÚJ
**Mező típus:** Short Text (csak olvasható / admin tölti ki)
**VAGY** (jobb megoldás): Ezt NE a vásárlási formban kérd, hanem:
- A vásárlás után TE írod be a Google Sheet-be a sorozatszámot
- A megerősítő emailben küldöd el a vevőnek

**Javaslat:** A sorozatszámot a CRM-ben (Google Sheet) kezeld, NEM a formban.
A formba csak egy **informális szöveg** kerüljön a garanciáról.

### Teljes mezőlista (javítás után):

| Mező | Típus | Kötelező | Conditional |
|------|-------|----------|-------------|
| Teljes név | Full Name | ✅ | |
| Email cím | Email | ✅ | |
| Telefonszám | Phone | ✅ | |
| Érdeklődési terület | Single Choice (Radio) | ✅ | |
| ↳ Kérdés szöveg | Long Text | ✅ | CSAK ha "Kérdésem van" |
| ↳ Garancia info | Text/Heading | — | CSAK ha "Vásárolni" |
| ↳ **Fizetés (Stripe)** | Payment | ✅ | CSAK ha "Vásárolni" |
| Honnan hallott? | Dropdown | ❌ | |
| GDPR | Checkbox | ✅ | |

### Érdeklődés típusa opciók (JAVÍTOTT):
1. **Meg szeretném vásárolni a maszkot** → fizetés megjelenik
2. **Kérdésem van a maszk használatáról** → kérdés mező megjelenik
3. **Ingyenes Observ bőrelemzést is kérek** → (átírva "ajándék"-ről)
4. **Viszonteladói / disztribútori érdeklődés**

### Submit gomb szöveg:
- Vásárlásnál: **"Rendelés és fizetés"**
- Egyébként: **"Érdeklődés küldése"**
(Ha nem lehet dynamic → legyen: **"Tovább"**)

### ⚠️ ELLENŐRIZD:
- [ ] Submit gomb MINDIG megjelenik
- [ ] ~~"Ajándék Observ"~~ átírva → "Ingyenes Observ is kérek"
- [ ] "Please Select" → "Válasszon..."
- [ ] Stripe/PayPal payment beállítva (conditional)
- [ ] Garancia szöveg hozzáadva
- [ ] Nincs "ajándék" szó sehol

---

## FORM 4: CLINICAL PROGRAM JELENTKEZÉS
**JotForm ID:** `260812813146049`
**URL:** https://form.jotform.com/260812813146049
**Használva:** Clinical Program oldal

### Mezők amik kellenek:

| Mező | Típus | Kötelező | Megjegyzés |
|------|-------|----------|------------|
| Teljes név | Full Name | ✅ | |
| Email cím | Email | ✅ | |
| Telefonszám | Phone | ✅ | |
| Életkor | Number | ✅ | Min: 18, Max: 80 |
| Választott program | Dropdown | ✅ | Lásd lent |
| Mi a fő célja? | Long Text | ✅ | Max 300 karakter |
| Volt-e esztétikai beavatkozása? | Single Choice | ✅ | Igen / Nem |
| ↳ Milyen? | Short Text | Cond. | CSAK ha "Igen" |
| Allergia / egészségügyi állapot? | Single Choice | ✅ | Igen / Nem |
| ↳ Részletek | Short Text | Cond. | CSAK ha "Igen" |
| GDPR | Checkbox | ✅ | |

### Program opciók:
1. Integrált arcfiatalítás (Ultimate Lift)
2. Kollagén újraépítés (40+)
3. Szemkörnyéki regeneráció
4. Férfi esztétika (Executive Protocol)
5. Testfeszesítés / hasfali rehabilitáció
6. Sebészeti előkészítés és regeneráció

### Submit gomb: **"Jelentkezés elküldése"**

### ⚠️ ELLENŐRIZD:
- [ ] Conditional mezők működnek (Igen → kiegészítő mező megjelenik)
- [ ] Nincs "ajándék" szó
- [ ] Submit gomb MINDIG látszódik

---

## FORM 5: FOUNDING ACCESS REGISZTRÁCIÓ
**JotForm ID:** `260812808596062`
**URL:** https://form.jotform.com/260812808596062
**Használva:** Program oldal

### ⭐ KRITIKUS: Szint-választó kell!

**Probléma:** A 3 program szint (Discovery / Early Access / Founding Member) gombjaiból mind ugyanerre a formra mutat. A formnak **KELL** egy szint-választó mező!

### Mezők:

| Mező | Típus | Kötelező | Megjegyzés |
|------|-------|----------|------------|
| **Választott szint** | Single Choice (Radio) | ✅ | 3 opció — lásd lent |
| Teljes név | Full Name | ✅ | |
| Email cím | Email | ✅ | |
| Telefonszám | Phone | ✅ | |
| Honnan hallott rólunk? | Dropdown | ❌ | Instagram/Facebook/Google/Ismerős/Egyéb |
| ↳ Preferált kezdés | Date Picker | Cond. | CSAK ha Early Access vagy Founding |
| ↳ Bemutatkozás | Long Text | Cond. | CSAK ha Founding Member |
| GDPR | Checkbox | ✅ | |

### Szint opciók (Radio):
1. **Discovery (Ingyenes)** — Ingyenes Observ bőrelemzés, hírlevél, értesítések
2. **Early Access (Ajánlott)** — Minden Discovery előny + HILEFT kezelés + kedvezményes LED Mask
3. **Founding Member (Limitált)** — Minden előny + teljes Protocol + VIP árazás életre szólóan

### Submit gomb: **"Regisztráció"**

### ⚠️ ELLENŐRIZD:
- [ ] Van szint-választó mező!
- [ ] A Discovery leírásában: "Ingyenes Observ" (NEM "ajándék")
- [ ] Conditional mezők: Founding → bemutatkozás megjelenik

---

## FORM 6: AKADÉMIA JELENTKEZÉS
**JotForm ID:** `260812371139050`
**URL:** https://form.jotform.com/260812371139050
**Használva:** Akadémia oldal

### Mezők:

| Mező | Típus | Kötelező | Megjegyzés |
|------|-------|----------|------------|
| Teljes név | Full Name | ✅ | |
| Email cím | Email | ✅ | |
| Telefonszám | Phone | ✅ | |
| Választott program | Single Choice | ✅ | 3 opció lent |
| ↳ Mi érdekli? (Workshop) | Multi Checkbox | Cond. | CSAK ha Workshop |
| ↳ Foglalkozás (Referens) | Short Text | Cond. | CSAK ha Referens |
| ↳ Tapasztalat (Referens) | Dropdown | Cond. | 0-2/3-5/5-10/10+ év |
| ↳ Cég neve (Inhouse) | Short Text | Cond. | CSAK ha Inhouse |
| ↳ Beosztás (Inhouse) | Short Text | Cond. | CSAK ha Inhouse |
| Motiváció | Long Text | ❌ | Max 300 karakter |
| GDPR | Checkbox | ✅ | |

### Program opciók:
1. **"Tudatos Páciens" Workshop** — pácienseknek, 1 napos
2. **"Referens Associate" Képzés** — szakembereknek, akkreditált
3. **"Inhouse Referens" Belső Képzés** — klinikák számára

### Submit gomb: **"Jelentkezés elküldése"**

---

## FORM 7: EMAIL SUBSCRIPTION & NEWSLETTER
**JotForm ID:** `260812738145054`
**URL:** https://form.jotform.com/260812738145054
**Használva:** Footer

### Mezők (MINIMALISTA):

| Mező | Típus | Kötelező |
|------|-------|----------|
| Email cím | Email | ✅ |
| Keresztnév | Short Text | ❌ |
| GDPR | Checkbox | ✅ |

### Submit gomb: **"Feliratkozás"**

### ⚠️ ELLENŐRIZD:
- [ ] Maximum 3 mező — ez legyen a legegyszerűbb form
- [ ] Nincs "ajándék" szó

---

## GOOGLE SHEETS INTEGRÁCIÓ (minden formhoz)

### Beállítás JotFormban:
1. Nyisd meg a formot
2. **Settings** → **Integrations** → **Google Sheets**
3. Csatlakoztasd a Google fiókot
4. **Spreadsheet:** válaszd a "TUB CRM & Forms" sheetet
5. **Worksheet:** válaszd a form-nak megfelelő sheet tabot:

| Form | Sheet tab neve |
|------|---------------|
| Konzultáció | Konzultáció |
| Observ | Observ |
| LED Mask | LED Mask |
| Clinical | Clinical Program |
| Founding | Founding Access |
| Akadémia | Akadémia |
| Newsletter | Newsletter |

6. **Mezők összerendelése:** a JotForm mezőket rendeld a Sheet oszlopaihoz

---

## AUTORESPONDER EMAILEK (minden formhoz)

### Beállítás: Settings → Emails → Autoresponder

#### Konzultáció autoresponder:
- **Tárgy:** Köszönjük! Konzultációs kérését megkaptuk.
- **Tartalom:**
```
Kedves {Teljes név},

Konzultációs kérését rögzítettük. Munkatársunk 1 munkanapon
belül felveszi Önnel a kapcsolatot az időpont egyeztetéséhez.

A konzultáció tartalma:
• Observ 520x bőrdiagnosztika 8 klinikai módban
• Személyes orvosi konzultáció
• Protocol útvonal tervezés

Helyszín: 1124 Budapest, Németvölgyi út 68.
Tel: +36 1 790 3017

Üdvözlettel,
The Ultimate Beauty Clinic
```

#### Observ autoresponder:
- **Tárgy:** Ingyenes Observ bőrelemzés — időpontját egyeztetjük!
- **Tartalom:**
```
Kedves {Teljes név},

Ingyenes Observ 520x bőrelemzésre való jelentkezését megkaptuk.
Munkatársunk 24 órán belül felveszi Önnel a kapcsolatot.

Amit kapni fog:
✓ Professzionális bőrelemzés 8 klinikai módban
✓ Részletes bőrállapot-dokumentáció
✓ Személyre szabott kezelési javaslat

The Ultimate Beauty Clinic
```

#### LED Mask autoresponder (vásárlás):
- **Tárgy:** ULTIMA LED Mask — rendelését rögzítettük!
- **Tartalom:**
```
Kedves {Teljes név},

Köszönjük az ULTIMA LED Beauty Mask megrendelését!

Rendelés részletei:
• Termék: ULTIMA LED Beauty Mask
• 2 év gyártói garancia
• A készülék sorozatszámát emailben küldjük

A csomagot a fizetés beérkezése után 2-3 munkanapon
belül postázzuk.

Bármilyen kérdés esetén: info@theultimatebeauty.net

The Ultimate Beauty Clinic
```

#### Notification emailek (neked, minden formhoz):
- **Címzett:** info@theultimatebeauty.net
- **Tárgy minta:** "[FORM NEVE] — Új beküldés: {Teljes név}"

---

## GARANCIA RENDSZER — LED MASK

### A garanciális nyilvántartás így működjön:

```
Vásárlás (JotForm + Stripe)
    ↓
Adat bekerül a Google Sheet "LED Mask" tabra
    ↓
TE manuálisan hozzáadod a sorozatszámot a Sheet-ben
    ↓
Megerősítő emailben küldöd a vevőnek:
  • Sorozatszám
  • Garancia kezdete (vásárlás dátuma)
  • Garancia lejárata (+2 év)
  • Garancia feltételek link
```

### Google Sheet "LED Mask" tab — szükséges oszlopok:
| Oszlop | Tartalom | Ki tölti |
|--------|----------|----------|
| Név | Vevő neve | JotForm auto |
| Email | Vevő email | JotForm auto |
| Telefon | Vevő telefon | JotForm auto |
| Fizetés dátuma | Stripe tranzakció | JotForm auto |
| Fizetés összeg | Ft | JotForm auto |
| Stripe ID | Tranzakció azonosító | JotForm auto |
| **Sorozatszám** | Készülék egyedi száma | **TE manuálisan** |
| **Garancia kezdet** | = Fizetés dátuma | **Auto formula** |
| **Garancia lejárat** | = Fizetés dátuma + 2 év | **Auto formula** |
| Kiszállítva | Igen/Nem | **TE manuálisan** |
| Megjegyzés | Szabad szöveg | **TE manuálisan** |

---

## STÍLUS & DESIGN BEÁLLÍTÁSOK (minden formhoz)

### JotForm Theme:
1. **Settings** → **Form Design** → **Theme**
2. Válaszd a legegyszerűbb/legvilágosabb témát
3. Egyedi színek:
   - Háttér: `#FDFAF6` (ivory/cream)
   - Gomb szín: `#B8965A` (arany)
   - Gomb szöveg: `#FFFFFF` (fehér)
   - Cím szín: `#2C2824` (charcoal)
   - Mező keret: `rgba(184, 150, 90, 0.3)` (arany halvány)
4. Font: ha lehet, **Montserrat** vagy hasonló sans-serif

### JotForm Logo:
- **Settings** → **Form Design** → a JotForm logót **rejtsd el** (fizetős terv kell!)
- Ha nem tudod elrejteni → az oldal lightbox keretében van a TUB branding, szóval nem kritikus

---

## CHECKLIST — VÉGSŐ ELLENŐRZÉS

### Minden formnál nézd meg:
- [ ] Magyar nyelv mindenhol (placeholder, hibaüzenet, gomb)
- [ ] "ajándék" szó SEHOL nem szerepel
- [ ] Submit gomb MINDIG megjelenik (nincs rajta hibás condition)
- [ ] GDPR checkbox megvan
- [ ] Google Sheets integráció beállítva
- [ ] Autoresponder email beállítva
- [ ] Notification email beállítva (info@theultimatebeauty.net)
- [ ] Mobil nézet tesztelve (JotForm preview → Mobile)

### LED Mask form extra:
- [ ] Stripe/PayPal payment beállítva
- [ ] Payment CSAK "vásárolni" opciónál jelenik meg
- [ ] Garancia szöveg hozzáadva
- [ ] "Ajándék Observ" → "Ingyenes Observ is kérek"

### Founding Access extra:
- [ ] Van szint-választó (Discovery/Early Access/Founding)
- [ ] Conditional mezők a szintekhez

---

## KÉRDÉSEK KRISZTIÁNNAK

> Ezeket még meg kell válaszolnod mielőtt a fiad beállítja:

1. **Mask ára** — mennyi Ft? (a Stripe payment-hez kell)
2. **Szállítási díj** — van külön? Vagy ingyenes?
3. **Stripe fiók** — van már Stripe üzleti fiókotok? Ha nincs, létre kell hozni: https://stripe.com
4. **Autoresponder email küldő** — melyik email legyen a feladó? `info@theultimatebeauty.net`?
5. **Founding szintek ára** — van ár az Early Access és Founding Member-hez? Vagy csak a Discovery ingyenes és a többit személyesen egyeztetitek?

---

*Utolsó frissítés: 2026-03-23*
*Ha bármi kérdés van, kérdezd Krisztiánt vagy a Claude AI-t!*
