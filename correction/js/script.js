$(document).ready(function () {

    // Слайдер в отзывах

    $('.reviews__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        responsive: [
            {
                breakpoint: 1131,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 751,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true
                }
            }
        ]
    });

    // Меню в шапке

    $('.header__burger').click(function () {
        $(this).toggleClass('header__burger--active');
        $('.nav--mobile').toggleClass('nav--mobile--active');
        $('body, html').toggleClass('lock');
    });

    // Навигация

    $('#nav--psychotechnics').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.psychotechnics').offset().top-80
        }, 500);
    });

    $('#nav--schema').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.schema').offset().top-80
        }, 500);
    });

    $('#nav--intro').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.intro').offset().top-80
        }, 500);
    });

    $('#nav--reviews').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.reviews').offset().top-80
        }, 500);
    });

    $('#nav--cost').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.cost').offset().top-80
        }, 500);
    });

    $('#nav--contacts').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.contacts').offset().top-80
        }, 500);
    });

    $('.header__mobile-text').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.intro').offset().top-80
        }, 500);
    });

    function closeNavMobile() {
        $('.nav--mobile').removeClass('nav--mobile--active');
        $('.header__burger').removeClass('header__burger--active');
        $('html, body').removeClass('lock');
    }

    $('#nav--mobile-specialization').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.specialization').offset().top-80
        }, 500);
        closeNavMobile();
    });

    $('#nav--mobile-psychotechnics').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.psychotechnics').offset().top-80
        }, 500);
        closeNavMobile();
    });

    $('#nav--mobile-schema').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.schema').offset().top-80
        }, 500);
        closeNavMobile();
    });

    $('#nav--mobile-reviews').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.reviews').offset().top-80
        }, 500);
        closeNavMobile();
    });

    $('#nav--mobile-cost').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.cost').offset().top-80
        }, 500);
        closeNavMobile();
    });

    $('#nav--mobile-consultation').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.consultation').offset().top-80
        }, 500);
        closeNavMobile();
    });

    $('#nav--mobile-contacts').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.contacts').offset().top-80
        }, 500);
        closeNavMobile();
    });

    // Закрытие попапа "Спасибо"

    function closePopup() {
        $('.popup').removeClass('popup--active');
        $('html, body').removeClass('lock');
    }

    $('.popup__close img').click(function () {
        closePopup();
    });

    $('.popup__area').click(function () {
        closePopup();
    });

    $(window).keydown(function(e) {
        closePopup();
    });

    // Обработчик формы

    $('.consultation__form').submit(function() {
        var th = $(this);
        $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: th.serialize()
        }).done(function() {
            $('.popup').addClass('popup--active');
            setTimeout(function() {
                th.trigger('reset');
            }, 1000);
        });
        return false;
    });

});