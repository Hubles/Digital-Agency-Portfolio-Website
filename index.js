const navBar = document.querySelector('.header-nav')
const headerBurger = document.querySelector('.header-burger')
const navBarKrest = document.querySelector('.nav-krest')
const body = document.body

headerBurger.addEventListener('click', () => {
  navBar.classList.add('active')
  body.style.overflowY = 'hidden'
})

navBarKrest.addEventListener('click', () => {
  navBar.classList.remove('active')
  body.style.overflowY = ''
})