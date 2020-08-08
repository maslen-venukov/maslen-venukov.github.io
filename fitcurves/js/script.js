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

    $('.first__slider').slick({
        variableWidth: true,
        centerMode: true,
        centerPadding: '0px',
        initialSlide: 1,
        infinite: false,
    });

    $('.reviews__slider').slick({
        variableWidth: true,
        dots: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 530,
                settings: {
                    variableWidth: false,
                    infinite: true
                }
            }
        ]
    });

    $('.gyms__slider').slick({
        variableWidth: true,
        dots: true,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 530,
                settings: {
                    variableWidth: false,
                }
            }
        ]
    });

    $('.nav__burger').click(function () {
        $(this).toggleClass('nav__burger_active');
        $('.nav__inner').toggleClass('nav__inner_active');
        $('html, body').toggleClass('lock');
    });

    $('.modal__close').click(function() {
        $('.modal').removeClass('modal_active')
        $('html, body').removeClass('lock');
    });

    $('.thanks__close').click(function() {
        $('.thanks').removeClass('thanks_active');
        $('html, body').removeClass('lock');
    });

    $('.modal__form').submit(function() {
        $('.thanks').addClass('thanks_active');
    });

    $('a[data-modal="form"]').click(function (e) { 
        e.preventDefault();
        $('.modal').addClass('modal_active');
        $('html, body').addClass('lock');
    });

});