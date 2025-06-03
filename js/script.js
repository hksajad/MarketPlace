// start js navbar
const menu = document.querySelector("ul");
const toggle = document.querySelector(".toggle_menu-open");
const toggle_close = document.querySelector(".toggle_menu-close");
toggle.addEventListener("click", function () {
  menu.classList.add("show_menu");
});
toggle_close.addEventListener("click", function () {
  menu.classList.remove("show_menu");
});
// start js menu product
const menu_product = document.querySelector(".menuProduct");
const toggle_productopen = document.querySelector(".toggle-menu_product");
const toggle_productclose = document.querySelector(".close_toggle-menu");
toggle_productopen.addEventListener("click", function () {
  menu_product.classList.add("show_menu-product");
});
toggle_productclose.addEventListener("click", function () {
  menu_product.classList.remove("show_menu-product");
});
// slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// comment slider
