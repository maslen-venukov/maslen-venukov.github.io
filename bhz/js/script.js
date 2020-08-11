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
        infinite: false
    });

    $('.achievements__arrow-left').click(function () {
        $('.achievements__slider .slick-prev').click();
    });

    $('.achievements__arrow-right').click(function () {
        $('.achievements__slider .slick-next').click();
    });

});