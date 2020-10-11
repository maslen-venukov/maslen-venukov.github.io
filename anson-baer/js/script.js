const circlesItems = document.querySelectorAll('.circles__item');
const headersItems = document.querySelectorAll('.headers__item');
const htmlBody = document.querySelector('html, body');
const page = document.querySelector('.page');
const header = document.querySelector('.header');
const headerBurger = document.querySelector('.header__burger');
const headerSearch = document.querySelector('.header__search');
const headerSocial = document.querySelector('.header__social');
const navList = document.querySelector('.nav__list');

// burger menu

headerBurger.addEventListener('click', () => {
  htmlBody.classList.toggle('lock');
  page.classList.toggle('page--transformed');
  headerBurger.classList.toggle('header__burger--active');
  headerSocial.classList.toggle('header__social--active');
  setTimeout(() => {
    headerSearch.classList.toggle('header__search--active');
  }, 300);
  navList.classList.toggle('nav__list--active');
});

// circles on the main screen

const checkCircleItems = () => {
  circlesItems.forEach((el, index) => {
    if(window.innerWidth >= 1200) {
      el.addEventListener('mouseover', e => {
        headersItems.forEach(el => {
          el.style.display = 'none';
        });
        headersItems[index].style.display = 'block';
      });
      el.addEventListener('mouseout', e => {
        headersItems.forEach(el => {
          el.style.display = 'none';
        });
        headersItems[0].style.display = 'block';
      });
    };
  });
};

checkCircleItems();

// circles slider on the main screen

const checkCirclesSlider = () => {
  if(window.innerWidth <= 1200) {
    circlesItems.forEach(el => {
      el.classList.add('swiper-slide');
    });
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 15,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  } else {
    circlesItems.forEach(el => {
      el.classList.remove('swiper-slide');
    });
  };
};

checkCirclesSlider();

// window resize

window.addEventListener('resize', () => {
  checkCirclesSlider();
  checkCircleItems();
});

// fixed header

let scrollPrev = 0;

window.addEventListener('scroll', () => {
  let scrolled = window.scrollY;
  if(scrolled >= 100 && scrolled > scrollPrev) {
    header.style.top = -header.offsetHeight + 'px';
  } else {
    header.style.top = 0;
  };
  scrollPrev = scrolled;
});

// center pagination bullet

const circlesSwiperPaginationBullets = document.querySelectorAll('.circles .swiper-pagination-bullet');
const centerCirclesSwiperPaginationBullet = Math.round(circlesSwiperPaginationBullets.length / 2);

if(window.innerWidth <= 1200) {
  circlesSwiperPaginationBullets[centerCirclesSwiperPaginationBullet - 1].classList.add('swiper-pagination-bullet-active');
};