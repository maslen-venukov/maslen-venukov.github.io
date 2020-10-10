const circlesItems = document.querySelectorAll('.circles__item');
const headersItems = document.querySelectorAll('.headers__item');
const htmlBody = document.querySelector('html, body');
const headerBurger = document.querySelector('.header__burger');
const headerSocial = document.querySelector('.header__social');
const navList = document.querySelector('.nav__list');

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

headerBurger.addEventListener('click', () => {
  htmlBody.classList.toggle('lock');
  headerSocial.classList.toggle('header__social--active');
  navList.classList.toggle('nav__list--active');
});