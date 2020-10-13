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

const startCirclesItems = document.querySelectorAll('.start-circles__item');

const checkCirclesSlider = () => {
  if(window.innerWidth <= 1200) {
    circlesItems.forEach(el => {
      el.classList.add('swiper-slide');
    });
    startCirclesItems.forEach(el => {
      el.classList.add('swiper-slide');
    });
    const swiperHome = new Swiper('.swiper-container-home', {
      slidesPerView: 'auto',
      spaceBetween: 15,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    const swiperStart = new Swiper('.swiper-container-start', {
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
    startCirclesItems.forEach(el => {
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
const swiperContainer = document.querySelector('.swiper-container-home');

if(swiperContainer) {
  if(window.innerWidth <= 1200) {
    circlesSwiperPaginationBullets.forEach(el => {
      el.classList.remove('swiper-pagination-bullet-active');
    });
    circlesSwiperPaginationBullets[centerCirclesSwiperPaginationBullet - 1].click();
  };
};

// circles at start company page

const startCircles = document.querySelectorAll('.start-circles__circle');
const startContentItems = document.querySelectorAll('.start-content__item');

startCircles.forEach((el, index) => {
  el.addEventListener('click', () => {
    startCircles.forEach(el => {
      el.classList.remove('start-circles__circle--active');
    });
    startContentItems.forEach(el => {
      el.classList.remove('start-content__item--active');
    });
    el.classList.add('start-circles__circle--active');
    startContentItems[index].classList.add('start-content__item--active');
  });
});

// change text on hover over services circle

const changeTextOnHover = document.querySelector('[data-hover]');

if(changeTextOnHover) {
  changeTextOnHoverParent = changeTextOnHover.closest('.circles__item');
  const textPrev = changeTextOnHover.innerText;
  changeTextOnHoverParent.addEventListener('mouseover', e => {
    changeTextOnHover.innerText = changeTextOnHover.dataset.hover;
  });
  changeTextOnHoverParent.addEventListener('mouseout', e => {
    changeTextOnHover.innerText = textPrev;
  });
};

// set map height

const contactMap = document.querySelector('.contact__map');

const setMapHeight = () => {
  if(contactMap) {
    contactMap.closest('.contact__img').style.height = contactMap.closest('.contact__img').offsetWidth * 0.93 + 'px';
  };
};

setMapHeight();

// news items height

const newsItems = document.querySelectorAll('.news__item');

const setNewsItemsHeight = () => {
  if(newsItems) {
    newsItems.forEach(el => {
      if(el.querySelector('.news__img') === null) {
        el.querySelector('.news__content').style.height = el.querySelector('.news__content').offsetWidth * 0.93 + 'px';
      };
    });
  };
};

setNewsItemsHeight();

window.addEventListener('resize', () => {
  setMapHeight();
  setNewsItemsHeight();
});