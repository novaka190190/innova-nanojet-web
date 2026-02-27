# Realizační plán: Web innova-nanojet.cz

## Přehled projektu

| Parametr | Hodnota |
|----------|---------|
| Doména | innova-nanojet.cz |
| Produkt | AirSancta CDa Pro |
| Kontaktní email | info@inovaratrade.com |
| Hosting | Cloudflare Pages (zdarma) |
| Technologie | Astro + Markdown blog |
| Design | Inspirovaný globálním webem innova-nanojet.co.uk |
| Obrázky | Stažené z webu výrobce |

---

## FÁZE 1: Příprava účtů (30 minut, děláš ty ručně)

### Krok 1.1 — Kup doménu na Forpsi
1. Jdi na [forpsi.com](https://www.forpsi.com)
2. Kup doménu `innova-nanojet.cz`
3. **Zatím nic dalšího nenastavuj** — DNS budeme měnit později

### Krok 1.2 — Vytvoř si GitHub účet
1. Jdi na [github.com](https://github.com)
2. Klikni **Sign up**
3. Zaregistruj se (email, heslo, username — třeba `inovaratrade`)
4. Potvrď email
5. Po přihlášení klikni na **+** (vpravo nahoře) → **New repository**
6. Název: `innova-nanojet-web`
7. Viditelnost: **Public** (Cloudflare Pages to potřebuje na free plánu)
8. Zaškrtni **Add a README file**
9. Klikni **Create repository**
10. **Zapiš si URL repo** — bude vypadat: `https://github.com/inovaratrade/innova-nanojet-web`

### Krok 1.3 — Vytvoř si Cloudflare účet
1. Jdi na [dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)
2. Zaregistruj se (email + heslo)
3. Potvrď email
4. **Zatím nic dalšího** — deploy nastavíme po kroku 2

---

## FÁZE 2: Vygeneruj web pomocí Claude Code (1–2 hodiny)

### Co budeš potřebovat
- Nainstalovaný Claude Code na počítači (Node.js + `npm install -g @anthropic-ai/claude-code`)
- Naklonované GitHub repo: `git clone https://github.com/TVUJ-USERNAME/innova-nanojet-web`
- Terminál otevřený ve složce repo

### Krok 2.1 — Spusť Claude Code v repo složce

```bash
cd innova-nanojet-web
claude
```

### Krok 2.2 — Zadej tento prompt Claude Code

Zkopíruj celý tento prompt a vlož ho do Claude Code:

---

**PROMPT PRO CLAUDE CODE — ZAČÁTEK**

Vytvoř kompletní statický web pro produkt AirSancta CDa Pro (čistička vzduchu) v češtině.
Web bude hostovaný na Cloudflare Pages pod doménou innova-nanojet.cz.
Distributor: Inovara Trade (info@inovaratrade.com).

## Technické požadavky

- Astro framework (nejnovější verze)
- Statický output (SSG)
- Blog sekce s Markdown články
- Sitemap + robots.txt automaticky generované
- SEO optimalizováno (meta tags, Open Graph, structured data)
- Kontaktní formulář přes Web3Forms (free tier) + mailto fallback
- Responsive design (mobile-first)
- Obrázky optimalizované přes Astro Image

## Design

Čistý, moderní, profesionální. Inspiruj se stylem webu innova-nanojet.co.uk:
- Barevné schéma: tmavě modrá (#0a1628), světle modrá (#2196F3), bílá, světle šedá
- Font: Inter nebo podobný sans-serif
- Hero sekce s velkým obrázkem a CTA
- Plynulé scrollování mezi sekcemi

## Struktura homepage (index.astro) — ONE-PAGER

### 1. Hero sekce
- H1: "Čistý vzduch pro váš domov i kancelář"
- Podnadpis: "AirSancta CDa Pro — revoluční čistička vzduchu bez filtrů. Používá pouze vodu."
- CTA tlačítko: "Chci více informací" → scrolluje na kontaktní sekci
- Pozadí: velký lifestyle obrázek produktu

### 2. Jak to funguje
- H2: "Jak funguje technologie NanoJet?"
- 3 bloky s ikonami:
  1. "Biliony nano-kapek" — Přístroj generuje biliony ultrarychlých nano-vodních kapek
  2. "Zachycení a eliminace" — Kapky zachytí viry, bakterie, alergeny a prach ve vzduchu
  3. "Čistý vzduch za minuty" — Kontaminanty ztěžknou a klesnou — vzduch je čistý během minut
- Krátký odstavec: "Na rozdíl od klasických čističek s HEPA filtry používá CDa Pro pouze vodu. Žádné drahé výměny filtrů, žádné chemikálie."

### 3. Pro koho je CDa Pro vhodná
- H2: "Pro koho je AirSancta CDa Pro"
- 4 karty:
  1. Domácnosti — "Zlepšete kvalitu vzduchu v obýváku, ložnici nebo dětském pokoji"
  2. Kanceláře — "Snižte šíření virů a zvyšte produktivitu zaměstnanců"
  3. Alergici — "Rychle odstraňte pyly, roztoče a další alergeny"
  4. Hotely & restaurace — "Profesionální čištění vzduchu pro vaše hosty"

### 4. Klíčové vlastnosti
- H2: "Co dělá CDa Pro výjimečnou"
- Seznam s ikonami:
  - ✅ Patentovaná NanoJet technologie
  - ✅ Bez filtrů — používá pouze vodu
  - ✅ Odstranění 99 % znečišťujících látek
  - ✅ Bez chemikálií — čistě fyzikální princip
  - ✅ Nízká spotřeba energie
  - ✅ UV dezinfekce vody v nádrži
  - ✅ Vhodná pro prostory do 120 m²
  - ✅ Provoz cca 45 minut na jednu nádrž (1,8 l)

### 5. FAQ sekce (důležité pro SEO)
- H2: "Často kladené otázky"
- Accordion/toggle styl
- Otázky v češtině:
  1. "Je CDa Pro čistička nebo zvlhčovač?" → "CDa Pro je primárně čistička vzduchu. Díky principu vodní mlhy ale přirozeně zvlhčuje vzduch, což je bonus zejména v zimě při vytápění."
  2. "Musím kupovat náhradní filtry?" → "Ne. CDa Pro je kompletně bez filtrů. Používá pouze destilovanou vodu, což výrazně snižuje provozní náklady."
  3. "Jakou vodu mám používat?" → "Pouze destilovanou nebo demineralizovanou vodu. Nepoužívejte kohoutkovou vodu — mohlo by dojít k ucpání trysek."
  4. "Je bezpečná pro děti a domácí zvířata?" → "Ano. Přístroj nepoužívá žádné chemikálie — pouze čistou vodu. UV modul dezinfikuje vodu v nádrži před rozstřikem."
  5. "Jak hlučný je přístroj?" → "Hlučnost je přibližně 75–80 dB, podobně jako vysavač. Doporučujeme použít časovač a nechat přístroj pracovat v zavřené místnosti."
  6. "Může způsobit vlhkost nebo plísně?" → "Množství rozstřikované vody je minimální (35 ml/min). V místnostech bez existujících problémů s vlhkostí přístroj plísně nezpůsobuje."
  7. "Jak CDa Pro čistí vzduch od virů?" → "Nano-kapky vody fyzicky obalí virové částice ve vzduchu, ztíží je a způsobí jejich pád. Tento princip byl ověřen nezávislými testy."
  8. "Kolik stojí provoz?" → "Provozní náklady jsou minimální — potřebujete pouze destilovanou vodu a elektřinu. Žádné filtry, žádné chemikálie."

### 6. Kontaktní sekce
- H2: "Zajímá vás AirSancta CDa Pro?"
- Podtext: "Napište nám a rádi vám poskytneme více informací, domluvíme předvedení nebo probereme možnosti pořízení."
- Kontaktní formulář (Web3Forms) s poli: Jméno, Email, Zpráva, tlačítko "Odeslat"
- Pod formulářem: "Nebo nám napište přímo na info@inovaratrade.com"
- Mailto link jako fallback: mailto:info@inovaratrade.com?subject=Zájem o AirSancta CDa Pro

### 7. Footer
- Logo / název: "AirSancta CDa Pro — Oficiální distribuce pro ČR a SR"
- "Distributor: Inovara Trade | info@inovaratrade.com"
- Odkaz na globální web výrobce: innova-nanojet.co.uk
- Copyright © 2025

## Blog sekce

### Architektura blogu
- URL: /blog/ (seznam článků)
- Článek: /blog/[slug]/ 
- Každý článek = .md soubor v src/content/blog/
- Šablona automaticky generuje: meta tags, breadcrumbs, datum, kategorii, schema.org Article markup
- Na konci každého článku: CTA box "Zajímá vás čistý vzduch? Kontaktujte nás."
- Sidebar nebo spodní sekce: "Další články" (3 nejnovější)
- Kategorie (tagy): technologie, zdraví, tipy, srovnání

### Počáteční články (vytvoř 5 článků, každý 800–1200 slov, v ČEŠTINĚ)

Důležité: NEPŘEKLÁDEJ z angličtiny. Piš originální český obsah s lokálním kontextem (české domácnosti, paneláky, topná sezóna, české alergeny).

1. **jak-zlepsit-kvalitu-vzduchu-doma.md**
   - Titulek: "Jak zlepšit kvalitu vzduchu doma: Kompletní průvodce pro české domácnosti"
   - Zaměření: suchý vzduch v zimě, paneláky, alergeny, praktické tipy
   - Zmínka o CDa Pro jako jedno z řešení (ne agresivně)

2. **cisticka-vzduchu-bez-filtru-jak-funguje.md**
   - Titulek: "Čistička vzduchu bez filtrů: Jak funguje a proč je budoucností?"
   - Zaměření: srovnání HEPA vs. vodní technologie, provozní náklady, údržba
   - SEO klíčové slovo: "čistička vzduchu bez filtrů"

3. **alergie-a-kvalita-vzduchu-v-byte.md**
   - Titulek: "Alergie a kvalita vzduchu v bytě: Co opravdu pomáhá?"
   - Zaměření: české alergeny (bříza, trávy), roztoči v paneláku, praktická řešení

4. **jak-odstranit-zapach-z-bytu.md**
   - Titulek: "Jak odstranit zápach z bytu nebo kanceláře? Účinné metody"
   - Zaměření: zdroje zápachu, VOC, vaření, domácí zvířata, řešení včetně CDa Pro

5. **suchy-vzduch-v-zime-reseni.md**
   - Titulek: "Suchý vzduch v zimě: Proč škodí a jak ho řešit?"
   - Zaměření: vytápění a vysušování vzduchu, zdravotní dopady, zvlhčovače vs. čističky

## Structured Data (Schema.org)

Na homepage:
- Product schema (name, description, brand, image, offers — ale bez ceny, jen "kontaktujte nás")
- FAQPage schema
- Organization schema (Inovara Trade)

Na blog článcích:
- Article schema (headline, author, datePublished, image)
- BreadcrumbList schema

## Technické SEO

- Automatický sitemap.xml (@astrojs/sitemap)
- robots.txt (allow all)
- Canonical URLs
- Hreflang: cs-CZ
- Open Graph + Twitter Card meta tags na každé stránce
- Alt texty u všech obrázků v češtině

## Obrázky

Stáhni tyto obrázky z webu výrobce a ulož do /public/images/:
- Hero: https://static.wixstatic.com/media/f0b1c0_01a20682f9eb45c39d02ed3842b0173f~mv2.jpg (lifestyle)
- Produkt CDa Pro: https://static.wixstatic.com/media/f0b1c0_8e78942ee8144303b470937bf1ced40c~mv2.jpg
- Lifestyle se psem: https://static.wixstatic.com/media/3fad73_995321f929ec4949b2f2e46ace66e26a~mv2.jpg
- NanoJet droplet diagram: https://static.wixstatic.com/media/3fad73_1ac7051d54474d2880dc0678de32a079~mv2.png
- AirSancta logo: https://static.wixstatic.com/media/f0b1c0_d74f1a3d4e2a441ea5fad7aeae6471dc~mv2.png
- CDa Mini lifestyle: https://static.wixstatic.com/media/f0b1c0_9116271a81984db4aea6b7b0cf30cde5~mv2.jpg
- Water abstract: https://static.wixstatic.com/media/3889c43e939245cd8ae21a24f2a30325.jpg
- CES award badge: https://static.wixstatic.com/media/3fad73_73b51332103d41599356e46b0a7b2031~mv2.png

## Kontaktní formulář — Web3Forms

Použij Web3Forms (web3forms.com) — free tier, bez backendu.
Formulář posílá emaily na zadaný email po aktivaci access key.
Dej do kódu placeholder: `YOUR_WEB3FORMS_ACCESS_KEY` — uživatel si ho pak vymění.

## Výstup

- Kompletně funkční Astro projekt
- `npm run build` musí proběhnout bez chyb
- Output v `dist/` připravený pro Cloudflare Pages
- Všechny soubory commitnuté do git

**PROMPT PRO CLAUDE CODE — KONEC**