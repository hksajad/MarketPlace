new Swiper(".mySwiper-customer_reviews", {
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 0,
  loop: true,
  loopFillGroupWithBlank: false,
  centeredSlides: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next-customer_reviews",
    prevEl: ".swiper-button-prev-customer_reviews",
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
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 1,
    },
  },
});
