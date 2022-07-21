const swiper = new Swiper('.swiper', {
  loop: true,
  allowTouchMove: true,
  grabCursor: true,
  spaceBetween: 5,
  effect: 'cube',
  cubeEffect: {
      shadow: true,
      slideShadows: true,
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});