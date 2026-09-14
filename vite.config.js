import { defineConfig } from 'vite'
import { readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = dirname(fileURLToPath(import.meta.url))

/** Položky hlavního menu – jediné místo, kde se navigace definuje. */
const NAV = [
  { href: '/', label: 'Domů' },
  { href: '/priority/', label: 'Priority' },
  { href: '/program/', label: 'Program' },
  { href: '/pripojit-se/', label: 'Připojit se' },
  { href: '/iniciativa/', label: 'Iniciativa' },
  { href: '/predseda/', label: 'Předseda' },
  { href: '/ustavni-navrh/', label: 'Ústavní návrh' },
  { href: '/archiv/', label: 'Archiv' },
  { href: '/kontakt/', label: 'Kontakt' },
]

const EMAIL = 'kontakt@stranaplan.cz'
const X_HANDLE = '@VBrunclik_CZ'
const X_URL = 'https://x.com/VBrunclik_CZ'

/** Najde všechny .html stránky v projektu (mimo build a závislosti). */
function findPages(dir = ROOT, found = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (/^(node_modules|dist|\.git|\.github|public|src)$/.test(entry.name)) continue
    const path = join(dir, entry.name)
    if (entry.isDirectory()) findPages(path, found)
    else if (entry.name.endsWith('.html')) found.push(path)
  }
  return found
}

/** Cesta souboru -> veřejná URL stránky ('/priority/index.html' -> '/priority/'). */
function urlOf(filename) {
  const rel = filename.replace(ROOT, '').replaceAll('\\', '/')
  return rel.replace(/index\.html$/, '')
}

function head() {
  return `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@500&display=swap">
    <meta name="theme-color" content="#0B0E14">`
}

function header(current) {
  const links = NAV.map(({ href, label }) => {
    const active = href === current ? ' aria-current="page"' : ''
    return `<li><a href="${href}"${active}>${label}</a></li>`
  }).join('\n          ')

  return `
    <a class="skip-link" href="#obsah">Přeskočit na obsah</a>
    <header class="site-header">
      <div class="bar">
        <a class="brand" href="/">
          <img src="/logo.svg" alt="" width="32" height="32">
          <span class="brand-name">PLÁN</span>
          <span class="brand-sep" aria-hidden="true">·</span>
          <span class="brand-tag">neoficiální iniciativa</span>
        </a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="menu" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
        <nav id="menu" class="menu" aria-label="Hlavní navigace">
          <ul>
          ${links}
          </ul>
        </nav>
      </div>
    </header>`
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="wrap">
        <div class="footer-grid">
          <div>
            <p class="footer-mark"><strong>PLÁN</strong> <span>NELŽETE občanům™</span></p>
            <p class="muted">Neoficiální politická iniciativa. Nejde o registrovanou politickou stranu ani o hnutí.</p>
          </div>
          <div>
            <p class="footer-head">Kontakt</p>
            <p><a href="mailto:${EMAIL}">${EMAIL}</a></p>
            <p><a href="${X_URL}" target="_blank" rel="noopener">X: ${X_HANDLE}</a></p>
          </div>
          <div>
            <p class="footer-head">Dokumenty</p>
            <p><a href="/program/">Program</a></p>
            <p><a href="/ustavni-navrh/">Ústavní návrh</a></p>
            <p><a href="/predseda/">Předseda</a></p>
            <p><a href="/ochrana-udaju/">Ochrana údajů</a></p>
          </div>
        </div>
        <p class="footer-legal muted">
          © 2026 Viktor Brunclík · Obsah licencován pod
          <a href="https://creativecommons.org/licenses/by/4.0/deed.cs" target="_blank" rel="noopener">CC BY 4.0</a>
        </p>
      </div>
    </footer>`
}

/** Vloží sdílenou hlavičku, patičku a <head> assety do každé stránky. */
function layout() {
  return {
    name: 'plan-layout',
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        const current = urlOf(ctx.filename)
        return html
          .replace('<!--HEAD-->', head())
          .replace('<!--HEADER-->', header(current))
          .replace('<!--FOOTER-->', footer())
      },
    },
  }
}

export default defineConfig({
  base: '/',
  plugins: [layout()],
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        findPages().map((file) => [urlOf(file).replace(/^\/|\/$/g, '') || 'index', file]),
      ),
    },
  },
})
