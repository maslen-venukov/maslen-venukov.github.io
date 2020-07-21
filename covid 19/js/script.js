$(document).ready(function () {

    const header = $('.header');
    $(window).scroll(function () { 
        if ($(window).scrollTop() >= 100) {
            header.addClass('header_bordered');
        } else {
            header.removeClass('header_bordered');
        };
    });

});