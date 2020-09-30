const cookies = document.querySelector('.cookies');
const cookiesBtn = document.querySelector('.cookies__btn');
const navLinkFunctional = document.querySelector('.nav__link[href="#functional"');

setTimeout(() => {
  cookies.classList.add('cookies--active');
}, 500);

cookiesBtn.addEventListener('click', () => {
  cookies.classList.remove('cookies--active');
});

const scrollToId = () => {
  const section = document.querySelector(navLinkFunctional.getAttribute('href'));
  window.scrollTo({
    top: section.offsetTop,
    behavior: 'smooth'
  });
};

navLinkFunctional.addEventListener('click', (e) => {
  e.preventDefault();
  scrollToId();
});