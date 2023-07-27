var swiper = new Swiper(".partner-swiper", {
  slidesPerView: 5,
  spaceBetween: 0,
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
    },
    400:{
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1030: {
      slidesPerView: 4,
    },
    1428: {
      slidesPerView: 5,
    },
  },
});
