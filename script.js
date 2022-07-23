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

const iconMenu = document.querySelector('.menu_toogle');
if(iconMenu) {
    const menuBody = document.querySelector('.header_nav');
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

const menuLinks = document.querySelectorAll('.menu_icon[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;
            
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}