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

});