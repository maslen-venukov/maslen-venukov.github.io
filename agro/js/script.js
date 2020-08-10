$(document).ready(function () {

    $('.blog__slider').slick({
        variableWidth: true,
        infinite: false
    });

    $('.production__slider').slick({
        variableWidth: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 881,
                settings: {
                    variableWidth: false
                }
            }
        ]
    });

    function counter() {
        const total = $('.production-slider__item').length;
        $('.production__number-total').text(total);
        const current = $('.production-slider__item').index($('.production-slider__item.slick-current.slick-active'))+1;
        $('.production__number-current').text(current);
    } counter();

    $('.production__arrow-left').click(function () {
        $('.slick-prev').click();
        counter();
    });

    $('.production__arrow-right').click(function () {
        $('.slick-next').click();
        counter();
    });

    $('.nav__burger').click(function () {
        $(this).toggleClass('nav__burger_active');
        $('.nav__list').toggleClass('nav__list_active');
    });

});