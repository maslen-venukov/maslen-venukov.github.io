$(document).ready(function () {

    $('.blog__slider').slick({
        variableWidth: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1861,
                settings: {
                    variableWidth: false
                }
            }
        ]
    });

    function blogCounter() {
        const total = $('.blog-slider__item').length;
        $('.blog__number-total').text(total);
        const current = $('.blog-slider__item').index($('.blog-slider__item.slick-current.slick-active'))+1;
        $('.blog__number-current').text(current);
    } blogCounter();

    $('.blog__arrow-left').click(function () {
        $('.blog__slider .slick-prev').click();
    });

    $('.blog__arrow-right').click(function () {
        $('.blog__slider .slick-next').click();
    });

    $('.blog__slider').on('afterChange', function(event, slick, currentSlide){
        $('.blog__number-current').text(currentSlide+1);
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

    function productionCounter() {
        const total = $('.production-slider__item').length;
        $('.production__number-total').text(total);
        const current = $('.production-slider__item').index($('.production-slider__item.slick-current.slick-active'))+1;
        $('.production__number-current').text(current);
    } productionCounter();

    $('.production__arrow-left').click(function () {
        $('.production__slider .slick-prev').click();
    });

    $('.production__arrow-right').click(function () {
        $('.production__slider .slick-next').click();
    });

    $('.production__slider').on('afterChange', function(event, slick, currentSlide){
        $('.production__number-current').text(currentSlide+1);
    });

    $('.nav__burger').click(function () {
        $(this).toggleClass('nav__burger_active');
        $('.nav__list').toggleClass('nav__list_active');
    });

});