// main swiper
var mainSwiper = new Swiper(".main-swiper", {
  centeredSlides: false,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-main-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1024: {
      slidesPerView: 5,
      slidesPerGroup: 5,
    },
  },
});

var appendNumber = 4;
var prependNumber = 1;
document
  .querySelector(".prepend-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  });
document
  .querySelector(".prepend-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  });
document.querySelector(".append-slide").addEventListener("click", function (e) {
  e.preventDefault();
  swiper.appendSlide(
    '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
  );
});
document
  .querySelector(".append-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  });
