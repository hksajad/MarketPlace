const menu = document.querySelector("ul");
const toggle = document.querySelector(".toggle_menu-open");
toggle.addEventListener("click", function () {
  menu.classList.toggle("show_menu");
});
