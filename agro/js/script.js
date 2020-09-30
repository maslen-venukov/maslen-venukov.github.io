$(document).ready(function () {

    $('.blog__slider').slick({
        variableWidth: true,
        infinite: true,
        touchThreshold: 150
    });

    function blogCounter() {
        const total = ($('.blog-slider__item').length / 2 ) - 0.5;
        $('.blog__number-total').text(total);
        const current = $('.blog-slider__item').index($('.blog-slider__item.slick-current.slick-active'));
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
        infinite: true,
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
        const total = ($('.production-slider__item').length / 2 ) - 0.5;
        $('.production__number-total').text(total);
        const current = $('.production-slider__item').index($('.production-slider__item.slick-current.slick-active'));
        $('.production__number-current').text(current);
    } productionCounter();

    $('.production__arrow-left').click(function () {
        $('.production__slider .slick-prev').click();
    });

    $('.production__arrow-right').click(function () {
        $('.production__slider .slick-next').click();
    });

    $('.production-slider__arrow-left').click(function() {
        $('.production__slider .slick-next').click();
    })

    $('.production__slider').on('afterChange', function(event, slick, currentSlide){
        $('.production__number-current').text(currentSlide+1);
    });

    $('.nav__burger').click(function () {
        $(this).toggleClass('nav__burger_active');
        $('.nav__list').toggleClass('nav__list_active');
        $('html, body').toggleClass('lock');
    });


    // window.defaultWidth = window.innerWidth;
    // window.onresize = function () {
    //     let m = ((window.defaultWidth / window.innerWidth).toFixed(2));
    //     // alert(m);
    //     $("body").css({ zoom: 1/m, transform: 'scale('+1/m+')', transformOrigin: "0 0" })
    // };


});