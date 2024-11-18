const navBar = document.querySelector('.header-nav')
const headerBurger = document.querySelector('.header-burger')
const navBarKrest = document.querySelector('.nav-krest')

headerBurger.addEventListener('click', () => {
  navBar.classList.add('active')
})

navBarKrest.addEventListener('click', () => {
  navBar.classList.remove('active')
})