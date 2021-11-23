const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },

    //управление с клавиатуры
   keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});