$(document).ready(function () {

    $('.js-timeline').Timeline();

    $('.reviews__row').slick({
        variableWidth: true,
        infinite: false,
        touchThreshold: 100
    });

    $('.reviews-arrows__left').click(function () { 
        $('.reviews .slick-prev').click();
    });

    $('.reviews-arrows__right').click(function () { 
        $('.reviews .slick-next').click();
    });

    $('.production__row').slick({
        variableWidth: true,
        infinite: false,
        touchThreshold: 100
    });

    $('.production-arrows__left').click(function () { 
        $('.production .slick-prev').click();
    });

    $('.production-arrows__right').click(function () { 
        $('.production .slick-next').click();
    });

});