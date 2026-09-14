import './styles.css'

// Mobilní menu – přepínání panelu pod hlavičkou.
const toggle = document.querySelector('.menu-toggle')
const menu = document.querySelector('#menu')

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open')
    toggle.setAttribute('aria-expanded', String(open))
  })

  // Zavřít po kliknutí na odkaz nebo klávesou Esc.
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      menu.classList.remove('open')
      toggle.setAttribute('aria-expanded', 'false')
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      menu.classList.remove('open')
      toggle.setAttribute('aria-expanded', 'false')
      toggle.focus()
    }
  })
}
