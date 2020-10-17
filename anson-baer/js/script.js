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

const circlesItems = document.querySelectorAll('.circles__item');

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
      initialSlide: 3,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    const swiperStart = new Swiper('.swiper-container-start', {
      slidesPerView: 'auto',
      spaceBetween: 15,
      centeredSlides: true,
      initialSlide: 1,
      breakpoints: {
        0: {
          allowTouchMove: true,
        },
        1201: {
          allowTouchMove: false,
        }
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  } else {
    circlesItems.forEach(el => {
      el.classList.remove('swiper-slide');
      el.classList.remove('swiper-slide-active');
    });
    startCirclesItems.forEach(el => {
      el.classList.remove('swiper-slide');
      el.classList.remove('swiper-slide-active');
    });
  };
};

checkCirclesSlider();

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
    contactMap.style.height = contactMap.offsetWidth * 0.93 + 'px';
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

// close modal

const modalClose = document.querySelectorAll('.modal__close');
const modal = document.querySelectorAll('.modal');

const closeModal = () => {
  modal.forEach(el => {
    el.classList.remove('modal--active');
    htmlBody.classList.remove('lock');
    page.classList.remove('page--transformed');
  });
};

modalClose.forEach(el => {
  el.addEventListener('click', () => {
    closeModal();
  });
});

if(modal) {
  window.addEventListener('keydown', e => {
    if(e.key === 'Escape') {
      closeModal();
    };
  });
};

// open modal package

const packageModalOpenBtn = document.querySelectorAll('[data-package]');
const packageModal = document.querySelector('.modal--package');

if(packageModal) {
  packageModal.addEventListener('click', e => {
    if(e.target.classList.contains('modal__close')) {
      closeModal();
    };
  });
};

const openPackageModal = () => {
  packageModalOpenBtn.forEach(el => {
    if(window.innerWidth <= 1200) {
      el.addEventListener('click', () => {
        packageModal.classList.add('modal--active');
        htmlBody.classList.add('lock');
        page.classList.add('page--transformed');
        header.style.top = 0;

        const parent = el.closest('.start-circles__item');

        const insertText = {
          package: el.dataset.package.charAt(0).toUpperCase() + el.dataset.package.slice(1),
          textToModal: parent.querySelector('.start-circles__text--to-modal').innerHTML,
          textShifted: parent.querySelector('.start-circles__text--desktop').innerHTML,
          price: parent.querySelector('.start-circles__circle span').innerText.replace(/[^\d€$\s]/gim, ''),
          total: parent.querySelector('.start-circles__text--mobile').innerHTML.match(/Total value separately.+<\/p>/)[0].replace('</p>', ''),
        };

        packageModal.querySelector('.package__title').innerText = `${insertText.package} service package`;
        packageModal.querySelector('.package__text').innerHTML = insertText.textToModal;
        packageModal.querySelector('.package__text--shifted').innerHTML = insertText.textShifted;
        packageModal.querySelector('.package__price').innerText = `The price is${insertText.price}`;
        packageModal.querySelector('.package__total').innerHTML = insertText.total;

        localStorage.setItem('package', insertText.package);

      });
    } else {
      packageModal.classList.remove('modal--active');
    };
  });
};

openPackageModal();

// set package value to local storage in desktop version

const dataSetPackage = document.querySelectorAll('[data-set-package]');

dataSetPackage.forEach(el => {
  el.addEventListener('click', () => {
    localStorage.setItem('package', el.dataset.setPackage);
  });
});

// set package value to hidden input

const hiddenInputPackage = document.querySelector('input[type="hidden"][name="package"]');

if(hiddenInputPackage) {
  hiddenInputPackage.value = localStorage.getItem('package');
};

// set package value to form-mobile__package in mobile form

const formMobilePackage = document.querySelector('.form-mobile__package');

if(formMobilePackage) {
  formMobilePackage.innerText = localStorage.getItem('package');
};

// start form carousel

const swiperStartForm = new Swiper('.swiper-container-start-form', {
  slidesPerView: 1,
  autoHeight: true,
  allowTouchMove: false,
  effect: 'fade',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// start form fade effect

const startFormFade = () => {
  const slides = document.querySelectorAll('.start-form__page.swiper-slide');
  slides.forEach(el => {
    el.style.opacity = '0';
  });
  const activeSlide = document.querySelector('.start-form__page.swiper-slide.swiper-slide-active');
  activeSlide.style.opacity = '1';
};

const startForm = document.querySelector('.start-form');

if(startForm) {
  startForm.addEventListener('click', e => {
    if(e.target.classList.contains('swiper-button-next') || e.target.classList.contains('swiper-button-prev') || e.target.classList.contains('swiper-pagination-bullet')) {
      startFormFade();
    };
  });
};

// open thanks modal after form submit

const forms = document.querySelectorAll('form');
const thanksModal = document.querySelector('.modal--thanks');

forms.forEach(el => {
  el.addEventListener('submit', e => {
    e.preventDefault();
    thanksModal.classList.add('modal--active');
    setTimeout(() => {
      thanksModal.classList.remove('modal--active');
    }, 3000);
  });
});

// set start form fields height

const startFormFields = document.querySelectorAll('.start-form__fields');
const startFormPages = document.querySelector('.start-form__pages');

const setFieldsHeight = () => {
  if(startFormPages) {
    startFormFields.forEach(el => {
      el.style.height = el.offsetWidth * 0.93 + 'px';
    });
    startFormPages.style.height = startFormPages.querySelector('.start-form__fields').offsetWidth * 0.93 + 'px';
  };
};

setFieldsHeight();

// window resize

window.addEventListener('resize', () => {
  checkCirclesSlider();
  checkCircleItems();
  setMapHeight();
  setNewsItemsHeight();
  openPackageModal();
  setFieldsHeight();
});