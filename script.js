const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  allowTouchMove: true,
  grabCursor: true,
  spaceBetween: 5,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});