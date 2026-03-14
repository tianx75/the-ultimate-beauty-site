# NYITÓ TERV
## The Ultimate Beauty — Landing Page Fejlesztési Terv
**Verzió:** 1.0
**Dátum:** 2026-03-14
**Státusz:** Aktív

---

## A KONCEPCIÓ

**Kommunikációs irány:**
> „Ahol a tudomány személyessé válik."
> „A megközelítés, ami megkülönböztet."

**Alapelv:** Nem kezeléseket kínálunk, hanem rendszert — The Ultimate Beauty Protocol.

**Brand nyelv:** Egyenes Cormorant = tudomány, precízió. Dőlt arany Cormorant = személyesség, törődés.

**Cél:** Email gyűjtés, brand ismertség, Founding Member toborzás, Observ konzultáció generálás.

---

## FÁZIS 1 — AZONNALI JAVÍTÁSOK (technikai)
> Becsült idő: 15 perc

- [x] **1.1** SEO: minden `theultimatebeauty.hu` → `theultimatebeauty.net` ✅ 2026-03-14
- [x] **1.2** Structured Data telefonszám: `+36-XX-XXX-XXXX` → `+36-1-790-3017` ✅ 2026-03-14
- [x] **1.3** Structured Data email: automatikusan javítva a .hu→.net cserével ✅ 2026-03-14
- [x] **1.4** HTTPS enforce bekapcsolás ✅ 2026-03-14 — Let's Encrypt cert kész, enforce ON
- [x] **1.5** Push → GitHub → élő ✅ 2026-03-14

---

## FÁZIS 2 — HOME TAB ÁTDOLGOZÁS
> Becsült idő: 45 perc

### 2.1 Hero szövegcsere ✅ KÉSZ 2026-03-14
**Új hero:** „Ahol a tudomány *személyessé válik.*" + „A megközelítés, ami megkülönböztet."

### 2.2 Probléma blokk ✅ KÉSZ 2026-03-14 (ÚJ szekció — Trust badges után, Protocol rendszer előtt)
**Cím:** „Miért nem elég egyetlen kezelés?"
**Tartalom:** Az öregedés 3 szinten zajlik:
1. Izomrendszer — tónuscsökkenés
2. Struktúra — volumen- és zsírpárna-változás
3. Bőrminőség — kollagéncsökkenés, sejtszintű öregedés

**Vizuál:** 3 ikon + rövid leírás, elegáns grid

### 2.3 Before/After szekció
- **Opció A:** Valódi Observ fotók (ha vannak) → berakni
- **Opció B:** Eltávolítani amíg nincsenek fotók (placeholder rontja a hitelességet)
- **Döntés:** Felhasználóra vár

### 2.4 Instagram szekció
- **Opció A:** Valódi Instagram embed/képek
- **Opció B:** Eltávolítani
- **Döntés:** Felhasználóra vár

---

## FÁZIS 3 — PROTOCOL TAB ÁTDOLGOZÁS (a stratégiai oldal)
> Becsült idő: 60 perc

### 3.1 Új struktúra ✅ KÉSZ 2026-03-14 — Probléma blokk, Kinek ajánlott, Záró manifesztó hozzáadva

```
┌─────────────────────────────────────────┐
│  HERO                                    │
│  "Nem kezelésekben gondolkodunk.        │
│   Rendszerben."                          │
│  → Ahol a tudomány személyessé válik.   │
└─────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────┐
│  PROBLÉMA BLOKK (ÚJ)                    │
│  "A modern esztétika csapdája"          │
│  Izolált kezelések → fragmentált eredmény│
│  Az öregedés 3 szintje diagram          │
└─────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────┐
│  A MEGOLDÁS: 3 PILLÉR                    │
│  I. ULTIMA Technology (Prepare)          │
│     - Neuromuszkuláris stimuláció        │
│     - Fotobiomoduláció                   │
│  II. Orvosesztétika (Treat)             │
│     - Botox, filler, skinbooster        │
│  III. Regeneráció (Recover)              │
│     - LED Mask, otthoni támogatás       │
└─────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────┐
│  PATIENT JOURNEY TIMELINE (ÚJ)          │
│  1. Felkészítő fázis → ULTIMA           │
│  2. Strukturális korrekció → Orvos      │
│  3. Regeneráció → LED Mask              │
│  Vizuál: horizontális timeline bar      │
└─────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────┐
│  KINEK AJÁNLOTT? (ÚJ)                   │
│  - Természetes arcfiatalítás            │
│  - Műtét nélküli megoldás              │
│  - Komplex, stratégiai megközelítés     │
│  - Nők és férfiak egyaránt             │
└─────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────┐
│  ZÁRÓ MANIFESZTÓ (ÚJ)                   │
│  "A Protocol nem egy kezelés.           │
│   Ez egy stratégiai szemlélet           │
│   az arcfiatalításban."                  │
│  → CTA: Observ konzultáció kérése      │
└─────────────────────────────────────────┘
```

### 3.2 Meglévő elemek sorsa
- **Hub csempék (Filozófia, Tech, Treatments, Akadémia):** Maradnak, de a Probléma blokk után jönnek
- **Akadémia szekció:** Marad (van ár is benne)
- **Venus Legacy:** Marad ("Hamarosan elérhető")
- **CTA banner:** Marad, szöveg frissítés

---

## FÁZIS 4 — ÁRAK
> Becsült idő: 30 perc | Felhasználói input kell

### 4.1 Szükséges árak

| Tétel | Ár (Ft) | Hol jelenik meg |
|-------|---------|-----------------|
| ULTIMA LED Mask (termék) | ? | Mask tab |
| ULTIMA Face kezelés | ? | HILEFT tab + Home |
| ULTIMA Shape kezelés | ? | HILEFT tab |
| ULTIMA HI-LIFT kezelés | ? | HILEFT tab |
| Observ bőrdiagnosztika | Ajándék / ? | Observ tab |
| Botox (egység) | ? | Protocol Treat modal |
| Hialuronsav (ml) | ? | Protocol Treat modal |
| Skinbooster | ? | Protocol Treat modal |
| Szülés utáni regeneráció | ? | HILEFT tab |
| LED Mask Program (havi) | ? | Mask tab |
| Early Access tagság | ? | Program tab |
| Founding Member tagság | ? | Program tab |

### 4.2 Megjelenítés
- Elegáns, Cormorant betűvel, arany kiemelés
- "tól" árak ahol van sáv
- FAQ-ban: "Az árak tájékoztató jellegűek, a végleges árat a személyes konzultáción határozzuk meg."

---

## FÁZIS 5 — TARTALMI FINOMÍTÁSOK
> Becsült idő: 30 perc

- [ ] **5.1** Countdown timer: fix dátumhoz kötni (nyitás dátuma?) VAGY eltávolítani
- [ ] **5.2** Social proof: "14 alapító tag" — valós szám? Ha nem, eltávolítani vagy átfogalmazni
- [ ] **5.3** Testimonialok: valódiak? Ha nem, jelölni hogy "illusztráció" vagy lecserélni
- [ ] **5.4** Team szekció: ha lesz csapatfotó, visszakapcsolni
- [ ] **5.5** Carousel alt szövegek kiegészítése (Observ slide-ok)

---

## FÁZIS 6 — EMAIL INTEGRÁCIÓ
> Becsült idő: 60 perc | Felhasználói input kell

### 6.1 Jelenlegi állapot
Mind az 5 email gyűjtőpont **csak localStorage-ba ment** — böngésző törléskor elvesznek!

### 6.2 Szükséges
- Mailchimp VAGY Brevo (Sendinblue) fiók
- API kulcs
- Email lista létrehozása

### 6.3 Bekötendő pontok
1. Newsletter form (footer)
2. Quiz email gate (Home tab)
3. Exit-intent popup
4. PDF gated content
5. Program regisztráció (JotForm-on keresztül már megy)

---

## FÁZIS 7 — VIZUÁLIS ELEMEK (felhasználói input kell)
> Becsült idő: változó

| Elem | Státusz | Szükséges |
|------|---------|-----------|
| Heni fotó #1 (Home Founder) | ✅ Megvan | — |
| Heni fotó #2 (Program tab) | ❌ Hiányzik | Másik portré fotó |
| Before/After Observ fotók | ❌ Hiányzik | 3 pár (előtte/utána) |
| Instagram képek | ❌ Hiányzik | 6 kép vagy IG widget |
| Team fotó(k) | ❌ Hiányzik | Csapat portré |
| 3 pillér diagram | ❌ Hiányzik | Készítjük SVG-ben |
| Patient Journey timeline | ❌ Hiányzik | Készítjük CSS-ben |
| Arc réteg grafika | ❌ Hiányzik | Készítjük SVG-ben |

---

## FÁZIS 8 — PUSH & DEPLOY
> Minden fázis végén

```bash
# Fájlok másolása dev szerverre (előnézet)
cp ~/Documents/Ultima\ Beauty\ Site/landing/*.html /tmp/tub-site/
cp -r ~/Documents/Ultima\ Beauty\ Site/landing/css /tmp/tub-site/

# GitHub push
cd ~/Documents/Ultima\ Beauty\ Site
git add landing/
git commit -m "Leírás"
git subtree split --prefix landing -b gh-pages --force
git push origin gh-pages --force
git push origin main
```

---

## ÖSSZEFOGLALÓ TIMELINE

| Fázis | Leírás | Idő | Függőség |
|-------|--------|-----|----------|
| **F1** | SEO + technikai javítások | 15 perc | Nincs |
| **F2** | Home tab átdolgozás | 45 perc | Nincs |
| **F3** | Protocol tab átdolgozás | 60 perc | Nincs |
| **F4** | Árak | 30 perc | Árlista kell |
| **F5** | Tartalmi finomítások | 30 perc | Döntések kellenek |
| **F6** | Email integráció | 60 perc | Mailchimp/Brevo fiók |
| **F7** | Vizuális elemek | Változó | Fotók kellenek |
| **F8** | Deploy | 5 perc/fázis | — |

**Összesen: ~4 óra aktív munka + felhasználói inputok**

---

## DÖNTÉSEK AMIK A FELHASZNÁLÓRA VÁRNAK

1. ✋ **Árlista** — melyik kezelés mennyibe kerül?
2. ✋ **Countdown** — van fix nyitási dátum? Ha igen, mi az?
3. ✋ **"14 alapító tag"** — valós szám? Frissítsem?
4. ✋ **Testimonialok** — valódiak vagy illusztráció?
5. ✋ **Before/After** — vannak Observ fotók? Ha nem, levegyem?
6. ✋ **Instagram** — van @theultimatebeauty fiók tartalommal?
7. ✋ **Email szolgáltató** — Mailchimp vagy Brevo?
8. ✋ **Email cím** — `info@theultimatebeauty.net` létezik?
9. ✋ **Heni fotó #2** — van másik portré a Program tabhoz?
10. ✋ **Domain** — `.hu` is lesz, vagy csak `.net` + `.org`?

---

*Ez a dokumentum a landing page fejlesztés iránytűje. Minden session elején elővesszük, megnézzük hol tartunk, és folytatjuk.*
