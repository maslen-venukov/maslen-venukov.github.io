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

    // Навигация

    $('#nav__about').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        }, 1000);
    });

    $('#nav__phyto').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.use__card').offset().top
        }, 1000);
    });

    $('#nav__services').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.services').offset().top
        }, 1000);
    });

    $('#nav__specialists').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.specialists').offset().top
        }, 1000);
    });

    $('#nav__contacts').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.footer').offset().top
        }, 1000);
    });

    // Модальные окна

    $('.modal__close, .modal-online__close').click(function() {
        $('.modal__outer').removeClass('modal__outer_active');
        $('.modal-online__outer').removeClass('modal-online__outer_active');
        $('html').removeClass('lock');
    });

    $('a[data-modal="form"]').click(function (e) { 
        e.preventDefault();
        $('.modal__outer').addClass('modal__outer_active');
        $('html').addClass('lock');
    });

    $('a[data-modal="online-form"]').click(function (e) { 
        e.preventDefault();
        $('.modal-online__outer').addClass('modal-online__outer_active');
        $('html').addClass('lock');
    });

    // Правовая информация / Пользовательское соглашение

    $('.rights__title, .agreement__title').click(function() {
        $('.rights').removeClass('rights_active');
        $('.agreement').removeClass('agreement_active');
        $('html').removeClass('lock');
    });

    $('a[data-modal="agreement"]').click(function (e) { 
        e.preventDefault();
        $('.agreement').addClass('agreement_active');
        $('html').addClass('lock');
    });

    $('a[data-modal="rights"]').click(function (e) { 
        e.preventDefault();
        $('.rights').addClass('rights_active');
        $('html').addClass('lock');
    });

    // AOS / Анимация

    AOS.init();

});