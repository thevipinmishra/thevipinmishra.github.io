const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", handleMenu);

function handleMenu() {
  nav.classList.toggle("menu__expanded");
}
