const navBar = document.querySelector(".header-nav");
const headerBurger = document.querySelector(".header-burger");
const navBarKrest = document.querySelector(".nav-krest");
const body = document.body;

headerBurger.addEventListener("click", () => {
  navBar.classList.add("active");
  body.style.overflowY = "hidden";
});

navBarKrest.addEventListener("click", () => {
  navBar.classList.remove("active");
  body.style.overflowY = "";
});

// Read and Less buttons

const servicesItemText = document.querySelectorAll(".serv-disc");

if (window.innerWidth <= 1024) {

  for (let text of servicesItemText) {
    text.innerHTML = `${text.innerHTML.slice(0,126)}<span class="readClick"> Read more...</span>`;
  }

}