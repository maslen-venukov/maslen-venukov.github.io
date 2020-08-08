$(document).ready(function () {

    $('.ages__slider').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 901,
                settings: {
                    slidesToShow: 1,
                    adaptiveHeight: true
                }
            }
        ]
    });

    $('.result__slider').slick({
        slidesToShow: 6,
        responsive: [
            {
                breakpoint: 581,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });

    $('.reviews__slider').slick({
        variableWidth: true,
        dots: true,
        infinite: false
    });

    $('.gyms__slider').slick({
        variableWidth: true,
        dots: true,
        centerMode: true,
        centerPadding: '0px',
    });

    $('.first__slider').slick({
        variableWidth: true,
        centerMode: true,
        centerPadding: '0px',
        initialSlide: 1,
        infinite: false
    });

    $('.nav__burger').click(function () {
        $(this).toggleClass('nav__burger_active');
        $('.nav__inner').toggleClass('nav__inner_active');
    });

});