const circlesItems = document.querySelectorAll('.circles__item');
const headersItems = document.querySelectorAll('.headers__item');
const htmlBody = document.querySelector('html, body');
const headerBurger = document.querySelector('.header__burger');
const headerSearch = document.querySelector('.header__search');
const headerSocial = document.querySelector('.header__social');
const navList = document.querySelector('.nav__list');

// burger menu

headerBurger.addEventListener('click', () => {
  htmlBody.classList.toggle('lock');
  headerSocial.classList.toggle('header__social--active');
  setTimeout(() => {
    headerSearch.classList.toggle('header__search--active');
  }, 300);
  navList.classList.toggle('nav__list--active');
});

// circles on the main screen

circlesItems.forEach((el, index) => {
  el.addEventListener('mouseover', e => {
    if(e.target.classList.contains('circles__item')) {
      headersItems.forEach(el => {
        el.style.display = 'none';
      });
      headersItems[index].style.display = 'block';
    };
  });
});

// circles slider on the main screen

const checkWindowWidth = () => {
  if(window.innerWidth <= 1200) {
    circlesItems.forEach(el => {
      el.classList.add('swiper-slide');
    });
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 15,
      centeredSlides: true,
    });
  } else {
    circlesItems.forEach(el => {
      el.classList.remove('swiper-slide');
    });
  };
};

checkWindowWidth();

window.addEventListener('resize', () => {
  checkWindowWidth();
});