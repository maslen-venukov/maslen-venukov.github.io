$(document).ready(function () {

    $('.header__burger').click(function () {
        $('.header__burger').toggleClass('header__burger_active');
        $('.header-nav__inner').toggleClass('header-nav__inner_active');
        $('body').toggleClass('body_lock');
    });

    $('.gallery__slider').slick({
        dots: true
    });

});