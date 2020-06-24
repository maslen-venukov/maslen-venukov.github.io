$(document).ready(function() {

    $('.nav__burger').click(function() {
        $('.nav__burger').toggleClass('nav__burger_active');
        $('.nav__inner').toggleClass('nav__inner_active');
        $('body').toggleClass('body_lock');
    });

    $('.nav__item').click(function() {
        $('.nav__burger').removeClass('nav__burger_active');
        $('.nav__inner').removeClass('nav__inner_active');
        $('body').removeClass('body_lock');
    });

    $('.intro__button').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.nav_main').offset().top
        }, 500);
    });

    $('.intro__arrow').click(function(e) {
        $('.intro__arrow').toggleClass('intro__arrow_active');
        $('html, body').animate({
            scrollTop: $('.nav_main').offset().top
        }, 500);
    });

    $('.intro__arrow_active').click(function(e) {
        $('html, body').animate({
            scrollTop: $('.intro').offset().top
        }, 500);
    });

    $('#nav_home').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.intro').offset().top
        }, 500);
    });

    $('#nav_about').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.about').offset().top
        }, 500);
    });

    $('#nav_portfolio').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.portfolio').offset().top
        }, 500);
    });

    $('#nav_contact').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.contact').offset().top
        }, 500);
    });

    $('#footer_home').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.intro').offset().top
        }, 500);
    });

    $('#footer_contact').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.contact').offset().top
        }, 500);
    });

});
