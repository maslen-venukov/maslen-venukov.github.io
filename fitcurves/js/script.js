$(document).ready(function () {

    $('.ages__slider').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        initialSlide: 1,
    });

    $('.result__slider').slick({
        slidesToShow: 6,
    });

    $('.reviews__slider').slick({
        variableWidth: true,
        dots: true
    });

    $('.gyms__slider').slick({
        variableWidth: true,
        dots: true,
        centerMode: true,
        centerPadding: '0px',
    });

});