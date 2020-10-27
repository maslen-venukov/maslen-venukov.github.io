// рейтинг

const ratingElements = document.querySelectorAll('[data-rating]');

ratingElements.forEach(el => {
  const rating = el.dataset.rating;
  const stars = el.querySelectorAll('svg');
  stars.forEach(el => {
    if(el.dataset.star <= rating) {
      el.style.fill = "#ffc700";
    };
  });
});

// отступ для шапки

const headerTop = document.querySelector('.header__top');
const headerBottom = document.querySelector('.header__bottom');

const headerBottomMarginTop = () => {
  headerBottom.style.marginTop = headerTop.clientHeight + 'px';
};

headerBottomMarginTop();

const headerTopPaddintTop = () => {
  self.pageYOffset > 0 ? headerTop.style.paddingTop = '25px' : headerTop.style.paddingTop = '50px';
};

window.addEventListener('scroll', () => {
  headerTopPaddintTop();
});

window.addEventListener('resize', () => {
  headerBottomMarginTop();
});

// очистка local storage

for(let key in localStorage) {
  if(key.includes('_ym')) {
    localStorage.removeItem(key);
  };
};

// активный пункт навигации

const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(el => {
  if(window.location.href.includes(el.getAttribute('href'))) {
    el.classList.add('nav__link--active');
  };
});

// лайк для отправки в список желаний

window.addEventListener('click', e => {
  const like = e.target.closest('.like');
  if(like) {
    like.classList.toggle('like--liked');
  };
});

// модалка

const bodyHtml = document.querySelector('body, html');
const openModalBtn = document.querySelector('[data-modal');
const closeModalBtn = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal__overlay');

const openModal = () => {
  modal.classList.add('modal--active');
  bodyHtml.classList.add('lock');
};

const closeModal = () => {
  modal.classList.remove('modal--active');
  bodyHtml.classList.remove('lock');
};

if(modal) {
  openModalBtn.addEventListener('click', () => {
    openModal();
  });
  
  closeModalBtn.addEventListener('click', () => {
    closeModal();
  });
  
  modalOverlay.addEventListener('click', e => {
    if(e.target.classList.contains('modal__overlay')) {
      closeModal();
    };
  });
  
  window.addEventListener('keydown', e => {
    if(e.key === 'Escape') {
      closeModal();
    };
  });
};

// счетчик корзины

const menuProductsCounter = document.querySelector('.menu__counter');
const menuLinkBasket = document.querySelector('.menu__link--basket');

const coundProductsInBasket = () => {
  menuProductsCounter.innerText = localStorage.length;
  if(menuProductsCounter.innerText > 0) {
    menuLinkBasket.classList.remove('menu__link--empty');
  } else {
    menuLinkBasket.classList.add('menu__link--empty');
  };
};

coundProductsInBasket();

// добавление в корзину

const addToCartBtn = document.querySelectorAll('.card__cart');
const basketList = document.querySelector('.basket__list');

if(!localStorage.getItem('basket')) {
  localStorage.setItem('basket', JSON.stringify({
    product1: {
      name: 'chemodan',
      price: '15135'
    },
    product2: {
      name: 'sumka',
      price: '134'
    }
  }));
};

// const lcBasket = JSON.parse(localStorage.getItem('basket'));
// console.log(lcBasket);

// for(let key in lcBasket) {
//   console.log(lcBasket[key]);
// }
// console.log(JSON.parse(localStorage.getItem('basket')));

addToCartBtn.forEach(el => {
  el.addEventListener('click', e => {
    const card = e.target.closest('.card');
    const product = {
      img: card.querySelector('.card__img img').getAttribute('src'),
      name: card.querySelector('.card__name').innerText,
      price: card.querySelector('.card__price').innerText
    };
    localStorage.setItem(product.name, JSON.stringify(product));
    coundProductsInBasket();
  });
});

if(basketList) {
  for(let key in localStorage) {
    if(localStorage.hasOwnProperty(key)) {
      const product = JSON.parse(localStorage.getItem(key));
      const productHTML = `
        <li class="basket__item product">
          <a href="card.html" class="product__img">
            <img src="${product.img}" alt="${product.name}">
          </a>
          <div class="product__info">
            <a href="card.html" class="product__name">${product.name}</a>
            <p class="product__time">Срок доставки: <time>10 июля</time></p>
          </div>
          <button class="product__trash" aria-label="Удалить"></button>
          <button class="product__like like" aria-label="В список желаний">
            <svg xmlns="http://www.w3.org/2000/svg"><path d="M27.745 5.14a8.379 8.379 0 00-1.834-2.669A8.55 8.55 0 0019.904.028 8.607 8.607 0 0014.5 1.933 8.607 8.607 0 009.096.028a8.55 8.55 0 00-6.007 2.443 8.329 8.329 0 00-2.51 5.952c0 1.073.218 2.192.653 3.33.364.95.887 1.936 1.554 2.932 1.057 1.576 2.51 3.22 4.315 4.885 2.99 2.762 5.952 4.67 6.078 4.747l.764.49c.338.216.773.216 1.111 0l.764-.49c.126-.08 3.084-1.985 6.078-4.747 1.805-1.666 3.258-3.31 4.315-4.885.667-.996 1.193-1.982 1.554-2.933.434-1.137.654-2.256.654-3.329a8.205 8.205 0 00-.674-3.284zM14.5 22.257S3.027 14.908 3.027 8.423c0-3.284 2.717-5.945 6.069-5.945A6.085 6.085 0 0114.5 5.713a6.085 6.085 0 015.404-3.235c3.352 0 6.069 2.661 6.069 5.945 0 6.484-11.473 13.835-11.473 13.835z"/></svg>
          </button>
          <div class="product__counter">
            <button class="product__minus" aria-label="Минус">−</button>
            <input type="number" class="product__quantity" value="1">
            <button class="product__plus" aria-label="Плюс">+</button>
          </div>
          <p class="product__current-price">${product.price}</p>
          <p class="product__total-price">${product.price}</p>
        </li>
      `;
      basketList.insertAdjacentHTML('afterbegin', productHTML);
    };
  };
};

// удаление товара из корзины

const productTrash = document.querySelectorAll('.product__trash');

productTrash.forEach(el => {
  el.addEventListener('click', e => {
    const product = e.target.closest('.product');
    for(let key in localStorage) {
      if(localStorage.hasOwnProperty(key) && key === product.querySelector('.product__name').innerText) {
        localStorage.removeItem(key);
      };
    };
    product.remove();

    countBasketPrice();
    coundProductsInBasket();
  });
});

// продукт в корзине

const productMinus = document.querySelectorAll('.product__minus');
const productPlus = document.querySelectorAll('.product__plus');
const productQuantity = document.querySelectorAll('.product__quantity');
const productTotalPrice = document.querySelectorAll('.product__total-price');
const basketPrice = document.querySelector('.basket__price');

const priceTransformation = value => {
  const arrayValue = String(value).split('');
  for(let i = arrayValue.length - 1; i > -1; i-=3) {
    if(i !== arrayValue.length - 1) arrayValue.splice(i+1, 0, '.');
  };
  const calculatedValue = arrayValue.join('') + ' руб'
  return calculatedValue;
};

const countBasketPrice = () => {
  if(basketPrice) {
    const productTotalPrice = document.querySelectorAll('.product__total-price');
    let totalPrice = 0;
    productTotalPrice.forEach(el => {
      totalPrice += parseInt(el.innerText.replace(/\./g, '').replace('руб', ''));
    });
    basketPrice.innerText = priceTransformation(totalPrice);
  };
};

const calcProductTotalPrice = (cur, qt, total) => {
  const clearValue = cur.innerText.replace(/\./g, '').replace('руб', '') * qt.value;
  total.innerText = priceTransformation(clearValue);

  countBasketPrice();
};

countBasketPrice();

if(productMinus && productPlus) {
  productMinus.forEach(el => {
    el.addEventListener('click', e => {
      const productQuantity = e.target.closest('.product__counter').querySelector('.product__quantity');
      const productCurrentPrice = e.target.closest('.product').querySelector('.product__current-price');
      const productTotalPrice = e.target.closest('.product').querySelector('.product__total-price');
  
      if(productQuantity.value > 1) {
        productQuantity.value--;
      };
  
      calcProductTotalPrice(productCurrentPrice, productQuantity, productTotalPrice);
    });
  });

  productPlus.forEach(el => {
    el.addEventListener('click', e => {
      const productQuantity = e.target.closest('.product__counter').querySelector('.product__quantity');
      const productCurrentPrice = e.target.closest('.product').querySelector('.product__current-price');
      const productTotalPrice = e.target.closest('.product').querySelector('.product__total-price');
  
      if(productQuantity.value < 999) {
        productQuantity.value++;
      };
  
      calcProductTotalPrice(productCurrentPrice, productQuantity, productTotalPrice);
    });
  });
};

productQuantity.forEach(el => {
  el.addEventListener('keyup', e => {
    if(String(el.value).length > 3) el.value = el.value.slice(0, -1);
    if(String(el.value).substr(0, 1) === '0') el.value = el.value.slice(1);
    if(String(el.value).includes('-') || String(el.value).includes('+')) el.value = el.value.replace('+', '').replace('-', '');

    const productCurrentPrice = el.closest('.product').querySelector('.product__current-price');
    const productTotalPrice = el.closest('.product').querySelector('.product__total-price');
    calcProductTotalPrice(productCurrentPrice, el, productTotalPrice);
  });
});



// активный фильтр + раскрытие подлиста фильтров

const filtersListNames = document.querySelectorAll('.filters-list__name');

filtersListNames.forEach(el => {
  el.addEventListener('click', () => {
    filtersListNames.forEach(el => {
      const everyFiltersItem = el.closest('.filters-list__item')
      everyFiltersItem.classList.remove('filters-list__item--active');
      if(everyFiltersItem.querySelector('.filters__sublist')) {
        everyFiltersItem.querySelector('.filters__sublist').style.maxHeight = '0px';
      };
    });

    const filtersItem = el.closest('.filters-list__item');
    filtersItem.classList.add('filters-list__item--active');

    const sublist = filtersItem.querySelector('.filters__sublist');
    if(sublist) {
      sublist.style.maxHeight = sublist.querySelectorAll('.filters-sublist__item').length * 50 + 'px';
      if(sublist.querySelectorAll('.filters-sublist__item').length === 1) {
        sublist.style.maxHeight = '59px';
      }
    };
  });
});

// активный фильтр подлиста

const filtersSiblistItems = document.querySelectorAll('.filters-sublist__item');

filtersSiblistItems.forEach(el => {
  el.addEventListener('click', () => {
    filtersSiblistItems.forEach(el => {
      el.classList.remove('filters-sublist__item--active');
    });
    el.classList.add('filters-sublist__item--active');
  });
});

// активный пункт выборов в горизонтальных фильтрах в каталоге

const choicesLegends = document.querySelectorAll('.choices__legend');

choicesLegends.forEach(el => {
  el.addEventListener('click', () => {
    if(el.classList.contains('choices__legend--active')) {
      el.classList.remove('choices__legend--active');
    } else {
      choicesLegends.forEach(el => {
        el.classList.remove('choices__legend--active');
      });
      el.classList.add('choices__legend--active');
    };
  });
});

// активный чекбокс в горизонтальных фильтрах

const choicesInputs = document.querySelectorAll('.choices__input');

choicesInputs.forEach(el => {
  el.addEventListener('change', e => {
    e.target.closest('.choices__label').classList.toggle('choices__label--active');
  });
});

// слайдер с двумя ползунками в горизонтальных фильтрах

const getRangeSliderValues = e => {
  const parent = e.target.parentNode;
  const slides = parent.querySelectorAll('.range-slider__input');
  let firstSlideValue = parseInt(slides[0].value);
  let secondSlideValue = parseInt(slides[1].value);

  if(firstSlideValue >= secondSlideValue) {
    let temp = secondSlideValue;
    secondSlideValue = firstSlideValue;
    firstSlideValue = temp;
  };

  const sliderMinValue = parent.querySelector('.range-slider__min');
  sliderMinValue.innerText = firstSlideValue + ' руб';

  const sliderMaxValue = parent.querySelector('.range-slider__max');
  sliderMaxValue.innerText = secondSlideValue + ' руб';
};

const sliderWrappers = document.querySelectorAll('.range-slider');
const sliders = document.querySelectorAll('.range-slider__input');

sliderWrappers.forEach(el => {
  sliders.forEach((el, index) => {
    sliders[index].addEventListener('input', getRangeSliderValues);
  });
});