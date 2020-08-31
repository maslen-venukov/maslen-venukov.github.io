$(document).ready(function () {

    const nav = $('.nav');
    const navOffsetTop = nav.offset().top;
    $(window).scroll(function () { 
        if ($(window).scrollTop() >= navOffsetTop) {
            nav.addClass('nav--fixed');
        } else {
            nav.removeClass('nav--fixed');
        };
    });

    $('#nav__intro').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.intro').offset().top
        }, 1000);
    });

    $('#nav__use').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.pricelist').offset().top
        }, 1000);
    });

    $('#nav__special').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.special').offset().top
        }, 1000);
    });

    $('#nav__about').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.production').offset().top
        }, 1000);
    });


    $('#nav__contacts').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.contacts').offset().top
        }, 1000);
    });


    $('.achievements__slider').slick({
        variableWidth: true,
        // swipe: false,
        responsive: [
            {
                breakpoint: 501,
                settings: {
                    variableWidth: false,
                }
            }
        ]
    });

    $('.achievements__arrow-left').click(function () {
        $('.achievements__slider .slick-prev').click();
    });

    $('.achievements__arrow-right').click(function () {
        $('.achievements__slider .slick-next').click();
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
        $('.checked-tabs__item').not($(this)).removeClass('checked-tabs__item--active');
        let index = $(this).index('.checked-tabs__item');
        console.log('dasgjbsdgfisgfdhibsgfihbosfgihbsfgibhgsfihbsgfibhosfgihbosgfibhsfgibhosgfibho');
        $('.checked__img img').removeClass('active');
        $('.checked__img img:eq(' + index + ')').addClass('active');
    });

    $('.header__burger').click(function () {
        $(this).toggleClass('header__burger--active');
        $('.header-contacts__inner').toggleClass('header-contacts__inner--active');
    });

    $('.video__card').click(function () {
        $('.video__modal').addClass('video__modal--active');
        $('html, body').addClass('lock');
    });

    $('.video-modal__area').click(function () {
        $('.video__modal').removeClass('video__modal--active');
        $('html, body').removeClass('lock');
    });

    $('.video-modal__close').click(function () {
        $('.video__modal').removeClass('video__modal--active');
        $('html, body').removeClass('lock');
    });

    $('a[data-modal="request"]').click(function (e) { 
        e.preventDefault();
        $('.modal-request').addClass('modal--active');
        $('html, body').addClass('lock');
    });

    $('a[data-modal="test"]').click(function (e) { 
        e.preventDefault();
        $('.modal-test').addClass('modal--active');
        $('html, body').addClass('lock');
    });

    $('a[data-modal="best"]').click(function (e) { 
        e.preventDefault();
        $('.modal-best').addClass('modal--active');
        $('html, body').addClass('lock');
    });

    $('a[data-modal="pricelist"]').click(function (e) { 
        e.preventDefault();
        $('.modal-pricelist').addClass('modal--active');
        $('html, body').addClass('lock');
    });

    $('a[data-modal="presentation"]').click(function (e) { 
        e.preventDefault();
        $('.modal-presentation').addClass('modal--active');
        $('html, body').addClass('lock');
    });

    function closeModal() {
        $('.modal--active').removeClass('modal--active');
        $('html, body').removeClass('lock');
    }

    $('.modal__close').click(function(e) {
        closeModal();
    });

    $(window).keydown(function(e) {
        if(e.keyCode === 27) {
            closeModal();
        }
    });

});