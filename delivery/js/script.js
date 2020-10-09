const htmlBody = document.querySelector('html, body');
const btnCart = document.querySelector('.btn--cart');
const popupClose = document.querySelector('.popup__close');
const popups = document.querySelectorAll('.popup');
const btnToCart = document.querySelectorAll('.btn--to-cart');
const cartPopupList = document.querySelector('.popup--cart .popup__list');
const cancelBtn = document.querySelector('[data-action="cancel"]');
const popupTotalPrice = document.querySelector('.popup__total-price');

const openPopup = popupName => {
  const currentPopup = document.querySelector(`.popup--${popupName}`);
  currentPopup.classList.add('popup--active');
  htmlBody.classList.add('lock');
};

const closePopups = () => {
  popups.forEach(el => {
    el.classList.remove('popup--active');
  });
  htmlBody.classList.remove('lock');
};

btnCart.addEventListener('click', () => {
  openPopup('cart');
});

window.addEventListener('click', e => {
  if(e.target.classList.contains('popup')) {
    closePopups();
  };
});

popupClose.addEventListener('click', () => {
  closePopups();
});

window.addEventListener('keydown', e => {
  popups.forEach(el => {
    if(e.key === 'Escape' && el.classList.contains('popup--active')) {
      closePopups();
    };
  });
});

const checkEmptyCart = () => {
  const emptyCart = document.querySelector('.empty-cart');
  cartPopupList.children.length === 1 ? emptyCart.style.display = 'block' : emptyCart.style.display = 'none';
};

checkEmptyCart();

btnToCart.forEach(el => {
  el.addEventListener('click', () => {
    const parent = el.closest('.cards-info');
    const productName = parent.querySelector('.cards-info__name .cards-info__link').innerText;
    const productPrice = parent.querySelector('.cards-info__bottom-price').innerText;
    cartPopupList.querySelectorAll('.popup-item__name').forEach(el => {
      if(el.innerText === productName) {
        el.closest('.popup-item').remove();
      };
    });
    cartPopupList.insertAdjacentHTML('beforeend', `
      <li class="popup__item popup-item">
        <p class="popup-item__name">${productName}</p>
        <p class="popup-item__price">${productPrice}</p>
        <div class="popup-item__counter">
          <button class="btn btn--blue-border" data-action="minus">-</button>
          <p class="popup-item__quantity">1</p>
          <button class="btn btn--blue-border" data-action="plus">+</button>
        </div>
      </li>
    `);
    checkEmptyCart();
    popupTotalPrice.innerText = parseInt(popupTotalPrice.innerText.replace(' ₽', '')) + parseInt(productPrice) + ' ₽';
  });
});

cartPopupList.addEventListener('click', e => {
  const quantity = e.target.closest('.popup-item__counter').querySelector('.popup-item__quantity');
  if(e.target.dataset.action === 'plus' && quantity.innerText < 9999) {
    popupTotalPrice.innerText = parseInt(popupTotalPrice.innerText.replace(' ₽', '')) + parseInt(e.target.closest('.popup-item').querySelector('.popup-item__price').innerText.replace(' ₽', '')) + ' ₽';
    quantity.innerText = parseInt(quantity.innerText) + 1;
  } else if(e.target.dataset.action === 'minus') {
    popupTotalPrice.innerText = parseInt(popupTotalPrice.innerText.replace(' ₽', '')) - parseInt(e.target.closest('.popup-item').querySelector('.popup-item__price').innerText.replace(' ₽', '')) + ' ₽';
    quantity.innerText -= 1;
    if(quantity.innerText < 1) {
      quantity.closest('.popup-item').remove();
      checkEmptyCart();
    };
  };
});

cancelBtn.addEventListener('click', () => {
  if(cartPopupList.children.length !== 1) {
    cartPopupList.innerHTML = `
    <li class="popup__item popup-item empty-cart">
      Корзина пуста
    </li>
  `;
  };
  if(popupTotalPrice.innerText !== '0 ₽') {
    popupTotalPrice.innerText = '0 ₽';
  };
});