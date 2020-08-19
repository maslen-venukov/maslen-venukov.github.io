$(document).ready(function () {

    const headerHeight = $('.header').innerHeight();
    const nav = $('.nav');
    $(window).scroll(function () { 
        if ($(window).scrollTop() >= headerHeight) {
            nav.addClass('nav--fixed');
        } else {
            nav.removeClass('nav--fixed');
        };
    });

    $('.achievements__slider').slick({
        variableWidth: true,
        infinite: false,
        swipe: false
    });

    $('.achievements__arrow-left').click(function () {
        $('.achievements__slider .slick-prev').click();
    });

    $('.achievements__arrow-right').click(function () {
        $('.achievements__slider .slick-next').click();
    });

    $('.achievements__slider .slick-slide').click(function () {
        let path = $(this).children('img').attr('src');
        $('.achievements__modal .achievements-modal__img').children('img').attr('src', path);
        $('.achievements__modal').addClass('achievements__modal--active');
    });

    $('.achievements__modal').click(function () {
        $(this).removeClass('achievements__modal--active');
    });

    $('.pricelist-card__open-btn').click(function (e) {
        e.preventDefault();
        $(this).closest('.pricelist__card').addClass('pricelist__card--active');
        $('.pricelist-card__open-btn').not($(this)).closest('.pricelist__card').removeClass('pricelist__card--active');
    });

    $('.pricelist-card__close-btn').click(function (e) {
        e.preventDefault();
        $(this).closest('.pricelist__card').removeClass('pricelist__card--active');
    });

    $('.checked-tabs__item').click(function () {
        $(this).addClass('checked-tabs__item--active');
        $('.checked-tabs__item').not($(this)).removeClass('checked-tabs__item--active')
    });

    $('.header__burger').click(function () {
        $(this).toggleClass('header__burger--active');
        $('.header-contacts__inner').toggleClass('header-contacts__inner--active');
    });

});