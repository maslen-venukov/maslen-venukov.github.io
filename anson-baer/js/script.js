const circlesItems = document.querySelectorAll('.circles__item');
const headersItems = document.querySelectorAll('.headers__item');

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