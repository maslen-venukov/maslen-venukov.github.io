'use scrict';

const modalAdd = document.querySelector('.modal__add'), // Модальное окно по кнопке подать объявление
addAd = document.querySelector('.add__ad'), // Кнопка подать объявление
modalBtnSubmit = document.querySelector('.modal__btn-submit'), // Кнопка отправить в форме
modalSubmit = document.querySelector('.modal__submit'), // Форма
catalog = document.querySelector('.catalog'), // Каталог
modalItem = document.querySelector('.modal__item'), // Модальное окно по каталогу
name = document.getElementById('name'), // Инпут название
cost = document.getElementById('cost'); // Инпут цена

// Открытие модального окна по кнопке подать объявление
addAd.addEventListener('click', () => {
    modalAdd.classList.remove('hide');
    modalBtnSubmit.disabled = true;
});

// Закрытие модального окна по кнопке подать объявление
modalAdd.addEventListener('click', event => {
    const target = event.target;
    if (target.classList.contains('modal__close') || target === modalAdd) {
        modalAdd.classList.add('hide');
        modalSubmit.reset();
    };
});

// Активация кнопки отправить после заполнения полей (название и цена) в форме
modalAdd.addEventListener('keyup', () => {
    if(name.value !== '' && cost.value !== '') {
        modalBtnSubmit.disabled = false;
    };
});

// Открытие модального окна каталога
catalog.addEventListener('click', event => {
    const target = event.target;
    if (target.closest('.card')) {
        modalItem.classList.remove('hide');
    };
});

// Закрытие модального окна каталога
modalItem.addEventListener('click', event => {
    const target = event.target;
    if (target.classList.contains('modal__close') || target === modalItem) {
        modalItem.classList.add('hide');
    };
});

// Закрытие модальных окон через Escape
window.addEventListener('keydown', event => {
    if (event.keyCode === 27) {
        modalAdd.classList.add('hide');
        modalItem.classList.add('hide');
        modalSubmit.reset();
    };
});

