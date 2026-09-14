# PLÁN – neoficiální politická iniciativa

**[stranaplan.cz](https://stranaplan.cz)** · Slogan: **NELŽETE občanům™**

Česká politika potřebuje reálný kapitalismus, vyrovnaný rozpočet, vymahatelnou spravedlnost
a osobní odpovědnost. Odmítáme populistické sliby na dluh. Program je založen na datech,
efektivitě státu a absolutní otevřenosti vůči občanům.

> PLÁN je **neoficiální politická iniciativa**. Nejde o registrovanou politickou stranu ani
> o politické hnutí.

Předseda iniciativy: **Viktor Brunclík** – na síti X jako
[@VBrunclik_CZ](https://x.com/VBrunclik_CZ)

## Obsah webu

| Stránka | Cesta |
| --- | --- |
| Domů | [`/`](https://stranaplan.cz/) |
| Priority | [`/priority/`](https://stranaplan.cz/priority/) |
| Program (22 bodů) | [`/program/`](https://stranaplan.cz/program/) |
| Připojit se | [`/pripojit-se/`](https://stranaplan.cz/pripojit-se/) |
| Iniciativa NELŽETE občanům™ | [`/iniciativa/`](https://stranaplan.cz/iniciativa/) |
| Předseda | [`/predseda/`](https://stranaplan.cz/predseda/) |
| Ústavní návrh | [`/ustavni-navrh/`](https://stranaplan.cz/ustavni-navrh/) |
| Kontakt | [`/kontakt/`](https://stranaplan.cz/kontakt/) |

## Vývoj

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # build do dist/
npm run preview   # náhled produkčního buildu
```

Web je postavený na **Vite** jako statické multi-page (vanilla HTML/CSS/JS, bez frameworku).
Sdílená hlavička a patička se generují v `vite.config.js`, takže navigace se upravuje
na jednom místě. Podrobnosti ke konvencím jsou v [AGENTS.md](AGENTS.md).

## Nasazení

Push do větve `master` spustí workflow `.github/workflows/pages.yml`, který web sestaví
a nasadí na GitHub Pages na doménu `stranaplan.cz` (CNAME je v `public/`).

## Kontakt

[vb@vbtronic.com](mailto:vb@vbtronic.com) – Viktor Brunclík

## Licence

Obsah pod [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.cs),
zdrojový kód pod [MIT](https://opensource.org/license/mit). Detaily v [LICENSE.md](LICENSE.md).
