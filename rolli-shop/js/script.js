const cartWrapper = document.querySelector('.cart-wrapper');
const cartEmpty = document.querySelector('[data-cart-empty]');
const cartTotal = document.querySelector('.cart-total');
const orderForm = document.querySelector('#order-form');
const deliveryCost = cartTotal.querySelector('.delivery-cost');

const toggleCartStatus = () => {

  if(cartWrapper.querySelector('.cart-item')) {
    cartEmpty.classList.add('none');
    cartTotal.classList.remove('none');
    orderForm.classList.remove('none');
  } else {
    cartEmpty.classList.remove('none');
    cartTotal.classList.add('none');
    orderForm.classList.add('none');
  };

  let totalPrice = 0;
  cartWrapper.querySelectorAll('.cart-item').forEach(el => {
    const counter = el.querySelector('[data-counter]').innerText;
    const oneItemPrice = el.querySelector('.price__currency').innerText.replace(' ₽', '');
    const price = counter * oneItemPrice;
    totalPrice += price;
  });
  cartTotal.querySelector('.total-price').innerText = totalPrice;

  if(totalPrice >= 1000) {
    deliveryCost.innerText = 'бесплатно';
  } else {
    deliveryCost.innerText = '300 ₽';
  };

};

document.addEventListener('click', e => {

  if(e.target.hasAttribute('data-action')) {
    const counter = e.target.closest('.counter-wrapper').querySelector('[data-counter]');
    switch(e.target.dataset.action) {
      case 'plus':
        counter.innerText = ++counter.innerText;
        break;
      case 'minus':
        if(parseInt(counter.innerText) > 1) {
          counter.innerText = --counter.innerText;
        } else if(e.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
          e.target.closest('.cart-item').remove();
        };
        break;
    };
    toggleCartStatus();
  };

  if(e.target.hasAttribute('data-cart')) {
    const card = e.target.closest('.card');
    const productInfo = {
      id: card.dataset.id,
      imgSrc: imgSrc = card.querySelector('.product-img').getAttribute('src'),
      title: card.querySelector('.item-title').innerText,
      itemsInBox: card.querySelector('[data-items-in-box]').innerText,
      weight: card.querySelector('.price__weight').innerText,
      price: card.querySelector('.price__currency').innerText,
      counter: card.querySelector('[data-counter]').innerText,
    };
    const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
    if(itemInCart) {
      const counterElement = itemInCart.querySelector('[data-counter]');
      counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
    } else {
      const cartItemHTML = 
      `<div class="cart-item" data-id="${productInfo.id}">
          <div class="cart-item__top">
              <div class="cart-item__img">
                  <img src="${productInfo.imgSrc}" alt="">
              </div>
              <div class="cart-item__desc">
                <div class="cart-item__title">${productInfo.title}</div>
                  <div class="cart-item__weight">6 шт. / ${productInfo.weight}</div>
                <div class="cart-item__details">
                    <div class="items items--small counter-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items__current" data-counter="">${productInfo.counter}</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>
                    <div class="price">
                        <div class="price__currency">${productInfo.price}</div>
                    </div>
                </div>
              </div>
          </div>
      </div>`;
      cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
    };
    card.querySelector('[data-counter]').innerText = 1;
    toggleCartStatus();
  };

  // if(e.target.getAttribute('data-action') === 'minus' && e.target.closest('.cart-wrapper')) {
  //   if(parseInt(e.target.closest('.cart-wrapper').querySelector('[data-counter]').innerText) === 1) {
  //     e.target.closest('.cart-item').remove();
  //     toggleCartStatus();
  //   };
  // };

});