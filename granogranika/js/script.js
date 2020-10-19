const featuresItems = document.querySelectorAll('.features__item');
const featuresImages = document.querySelectorAll('.features__img img');

featuresItems.forEach((el, index) => {
  el.addEventListener('mouseover', e => {
    featuresImages.forEach(el => {
      el.classList.remove('active');
    });
    featuresImages[index].classList.add('active');
  });
});