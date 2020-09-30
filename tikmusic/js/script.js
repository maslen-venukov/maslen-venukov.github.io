const cookies = document.querySelector('.cookies');
const cookiesBtn = document.querySelector('.cookies__btn');
const navLinkFunctional = document.querySelector('.nav__link[href="#functional"');
const introScroll = document.querySelector('.intro__scroll');
const headerBurger = document.querySelector('.header__burger');
const headerNavList = document.querySelector('.header__nav .nav__list');
const tabsHeader = document.querySelector('.tabs__header');

if(cookies) {

  setTimeout(() => {
    cookies.classList.add('cookies--active');
  }, 500);

  cookiesBtn.addEventListener('click', () => {
    cookies.classList.remove('cookies--active');
  });

}

const scrollToId = () => {
  const section = document.querySelector(navLinkFunctional.getAttribute('href'));
  window.scrollTo({
    top: section.offsetTop,
    behavior: 'smooth'
  });
};

if(navLinkFunctional) {
  navLinkFunctional.addEventListener('click', e => {
    e.preventDefault();
    scrollToId();
    headerBurger.classList.remove('header__burger--active');
    headerNavList.classList.remove('nav__list--active');
    document.documentElement.classList.remove('lock');
    document.body.classList.remove('lock');
  });
};

if(introScroll) {
  introScroll.addEventListener('click', e => {
    e.preventDefault();
    scrollToId();
  });
};

if(headerBurger) {
  headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('header__burger--active');
    headerNavList.classList.toggle('nav__list--active');
    document.documentElement.classList.toggle('lock');
    document.body.classList.toggle('lock');
  });
};

if(tabsHeader) {
  tabsHeader.querySelector('.tabs__link').textContent = document.querySelector('.tabs__list .tabs__item--active .tabs__link').textContent;
  console.log(document.querySelector('.tabs__list .tabs__item--active .tabs__link').textContent);

  tabsHeader.addEventListener('click', () => {
    tabsHeader.classList.toggle('tabs__header--active');
  });

};