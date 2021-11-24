const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    
  },

    //управление с клавиатуры
   keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});