# AGENTS.md – PLÁN

## Projekt

Web **neoficiální politické iniciativy PLÁN**. Slogan a značka: **NELŽETE občanům™** –
iniciativa, která hlídá politické výroky a porovnává je s fakty.

**Není to registrovaná politická strana ani hnutí.** Slovo „strana“ se nesmí objevit
v textech webu (název repozitáře `strana_plan` je historický, nemění se).
Směřování: pravicové, prozápadní.

## Technologie

- **Vite** (MPA, vanilla JS – žádný framework)
- Nasazeno na **GitHub Pages** přes workflow `.github/workflows/pages.yml`
- Doména: **stranaplan.cz** (`public/CNAME`), `base: '/'`, HTTPS vynucené

## Struktura

```
index.html              Domů
priority/               Priority
program/                Program (22 bodů)
pripojit-se/            Připojit se
iniciativa/             NELŽETE občanům™
predseda/               Předseda (Viktor Brunclík)
ustavni-navrh/          Ústavní návrh
kontakt/                Kontakt
ochrana-udaju/          Ochrana údajů (jen v patičce, noindex)
404.html                Chybová stránka
src/styles.css          Veškeré styly
src/main.js             Mobilní menu
vite.config.js          Konfigurace + sdílená hlavička/patička
public/                 CNAME, logo.svg, robots.txt, sitemap.xml
```

## Konvence

- Jazyk webu: čeština
- **Hlavička a patička se needitují v HTML** – jsou v `vite.config.js` (funkce
  `header()`, `footer()`, konstanta `NAV`). Stránky obsahují jen značky
  `<!--HEAD-->`, `<!--HEADER-->`, `<!--FOOTER-->`.
- Nová stránka = nová složka s `index.html` + položka v `NAV` a v `public/sitemap.xml`.
  Vite si vstupní body najde sám.
- URL končí lomítkem (`/program/`), odkazy jsou absolutní od kořene.
- Barvy: pozadí `#0B0E14`, text `#E8EAED`, červená `#E23A3A`, modrá `#2F6FED`.
  Vše přes CSS proměnné v `:root`.
- Typografie: Space Grotesk (nadpisy), Inter (text), JetBrains Mono (akcenty, čísla).
- Styl: tmavý technický manifest – číslované body, monospace popisky, žádné ikony.
- Kontakt: **vb@vbtronic.com** (uvádí se otevřeně, žádný formulář na webu)
- X účet: https://x.com/VBrunclik_CZ – je to **osobní účet předsedy**, ne účet
  iniciativy. V textech se o něm tak i mluví („účet předsedy“), ne „sledujte nás“.
- Licence: obsah **CC BY 4.0**, kód **MIT** (žádné „všechna práva vyhrazena“)
- Na webu není newsletter, diskuze, analytika ani cookies.

## Menu

Domů | Priority | Program | Připojit se | Iniciativa | Předseda | Ústavní návrh | Kontakt

## Příkazy

```bash
npm install     # instalace
npm run dev     # vývojový server
npm run build   # build do dist/
npm run preview # náhled buildu
```
