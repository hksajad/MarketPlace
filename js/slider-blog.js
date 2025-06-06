new Swiper(".mySwiper-blog", {
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 0,
  loop: true,
  loopFillGroupWithBlank: false,
  centeredSlides: false,
  navigation: {
    nextEl: ".swiper-button-next-blog",
    prevEl: ".swiper-button-prev-blog",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 1,
    },
  },
});
