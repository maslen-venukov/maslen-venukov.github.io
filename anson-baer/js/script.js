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

// close open menu after window resize if window width less then 1200

const closeOpenMenuAfterWindowResize = () => {
  if(window.innerWidth > 1200) {
    htmlBody.classList.remove('lock');
    page.classList.remove('page--transformed');
    headerBurger.classList.remove('header__burger--active');
    headerSocial.classList.remove('header__social--active');
    headerSearch.classList.remove('header__search--active');
    navList.classList.remove('nav__list--active');
  };
};

// circles on the main screen

const circlesItems = document.querySelectorAll('.circles__item');

const checkCircleItems = () => {
    circlesItems.forEach((el, index) => {
        el.addEventListener('mouseover', e => {
          if(window.innerWidth > 1200) {
            headersItems.forEach(el => {
              el.style.display = 'none';
            });
            headersItems[index].style.display = 'block';
          };
        });
        el.addEventListener('mouseout', e => {
          if(window.innerWidth > 1200) {
            headersItems.forEach(el => {
              el.style.display = 'none';
            });
            headersItems[0].style.display = 'block';
          };
        });
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
    if(!document.querySelector('.swiper-container-initialized')) {
      const swiperHome = new Swiper('.swiper-container-home', {
        slidesPerView: 'auto',
        spaceBetween: 15,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          0: {
            allowTouchMove: true,
          },
          1201: {
            allowTouchMove: false,
          }
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
        breakpoints: {
          0: {
            allowTouchMove: true,
          },
          1201: {
            allowTouchMove: false,
          }
        },
      });
      const paginationBullets = document.querySelectorAll('.swiper-pagination-bullet');
      if(document.querySelector('.swiper-pagination')) {
        paginationBullets[Math.round(paginationBullets.length / 2) - 1].click();
      };
    };
  } else {
    circlesItems.forEach(el => {
      el.classList.remove('swiper-slide');
      el.classList.remove('swiper-slide-active');
    });
    startCirclesItems.forEach(el => {
      el.classList.remove('swiper-slide');
      el.classList.remove('swiper-slide-active');
    });
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    if(swiperWrapper) {
      swiperWrapper.setAttribute('transform', 'translate(0);');
    };
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

// map init

const isMap = document.getElementById('map');

if(isMap) {
  const location = { lat: 59.433302, lng: 24.760004 };
  function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: location,
    zoom: 17,
    gestureHandling: 'cooperative',
    styles: [{
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
            "color": "#e9e9e9"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f5f5f5"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#ffffff"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#ffffff"
          },
          {
            "lightness": 29
          },
          {
            "weight": 0.2
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
            "color": "#ffffff"
          },
          {
            "lightness": 18
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
            "color": "#ffffff"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f5f5f5"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
            "color": "#dedede"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [{
            "visibility": "on"
          },
          {
            "color": "#ffffff"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [{
            "saturation": 36
          },
          {
            "color": "#333333"
          },
          {
            "lightness": 40
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f2f2f2"
          },
          {
            "lightness": 19
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#fefefe"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#fefefe"
          },
          {
            "lightness": 17
          },
          {
            "weight": 1.2
          }
        ]
      }
    ]
  });
  const marker = new google.maps.Marker({
      position: location,
      map: map,
      title: 'Maakri 19/1, Tallinn 10145, Estonia',
      label: '',
      icon: 'img/icons/map-marker.svg',
  });
  };
};

// set map height

const contactMap = document.querySelector('.contact__map');

const setMapHeight = () => {
  if(contactMap) {
    contactMap.style.height = contactMap.offsetWidth * 0.93 + 'px';
  };
};

setMapHeight();

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

const startForm = document.querySelector('.start-form');

const startFormFade = () => {
  if(startForm) {
    const slides = document.querySelectorAll('.start-form__page.swiper-slide');
  slides.forEach(el => {
    el.style.opacity = '0';
  });
  const activeSlide = document.querySelector('.start-form__page.swiper-slide.swiper-slide-active');
  activeSlide.style.opacity = '1';
  };
};

if(startForm) {
  startForm.addEventListener('click', e => {
    if(e.target.classList.contains('swiper-button-next') || e.target.classList.contains('swiper-button-prev') || e.target.classList.contains('swiper-pagination-bullet')) {
      startFormFade();
      setStartFormPagesHeight();
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

// start form height after window resize

const setStartFormPagesHeight = () => {
  if(startForm) {
    const startFormPagesHeight = startFormPages.style.height;
    startFormPages.style.minHeight = startFormPagesHeight;
  };
};

// window resize

window.addEventListener('resize', () => {
  setStartFormPagesHeight();
  checkCirclesSlider();
  checkCircleItems();
  setMapHeight();
  openPackageModal();
  setFieldsHeight();
  startFormFade();
  closeOpenMenuAfterWindowResize();
});