$(document).ready(function () {

    // Timeline / История АЛФИТ

    $('.js-timeline').Timeline();

    function checkTimeline() {
        if ($(window).width() < '1440') {
            $('.timeline').removeClass('js-timeline');
        } checkTimeline();
    }

    $(window).resize(function() {
        checkTimeline();
    });

    // Slick Slider / Отзывы

    $('.reviews__row').slick({
        variableWidth: true,
        infinite: false,
        touchThreshold: 100,
        responsive: [
            {
              breakpoint: 630,
              settings: {
                    adaptiveHeight: true,
                    infinite: true
              }
            }
        ]
    });

    // Slick Slider / Отзывы / Стрелки

    $('.reviews-arrows__left').click(function () { 
        $('.reviews .slick-prev').click();
    });

    $('.reviews-arrows__right').click(function () { 
        $('.reviews .slick-next').click();
    });

    // Slick Slider / Собственное производство

    $('.production__row').slick({
        variableWidth: true,
        infinite: false,
        touchThreshold: 100,
        responsive: [
            {
              breakpoint: 630,
              settings: {
                    adaptiveHeight: true,
                    infinite: true
              }
            }
        ]
    });

    // Slick Slider / Собственное производство / Стрелки

    $('.production-arrows__left').click(function () { 
        $('.production .slick-prev').click();
    });

    $('.production-arrows__right').click(function () { 
        $('.production .slick-next').click();
    });

    // Бургер меню

    $('.nav__burger').click(function () {
        $(this).toggleClass('nav__burger_active');
        $('.nav__inner').toggleClass('nav__inner_active');
    });

    // Модальные окна

    $('.modal__close, .modal-online__close').click(function() {
        $('.modal__outer').removeClass('modal__outer_active');
        $('.modal-online__outer').removeClass('modal-online__outer_active');
    });

    // Правовая информация / Пользовательское соглашение

    $('.rights__title, .agreement__title').click(function() {
        $('.rights').removeClass('rights_active');
        $('.agreement').removeClass('agreement_active');
    });

    // AOS / Анимация

    AOS.init();

});