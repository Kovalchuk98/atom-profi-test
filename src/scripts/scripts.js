const burger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav_list");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
});
