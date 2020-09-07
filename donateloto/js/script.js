$(document).ready(function () {

    $('a[data-popup="withdrawal"]').click(function (e) {
        e.preventDefault();
        $('.popup').addClass('popup--active');
        $('html, body').addClass('lock');
    });

    function closePopup() {
        $('.popup').removeClass('popup--active');
        $('html, body').removeClass('lock');
    }

    $('.popup__close').click(function() {
        closePopup();
    });

    $(window).keydown(function (e) {
        if(e.keyCode === 27) {
            closePopup();
        };
    });

    $('.popup-form__btn').click(function (e) { 
        e.preventDefault();
        $('.popup__replenished').addClass('popup__replenished--active');
        function closeReplenishedPopup() {
            $('.popup').removeClass('popup--active');
            $('.popup__replenished').removeClass('popup__replenished--active');
            $('html, body').removeClass('lock');
        };
        setTimeout(closeReplenishedPopup, 2500);
    });

    function popupTabs() {
        if($('.auth-popup__login').hasClass('auth-popup__login--active')) {
            $('.auth-popup__body--login').addClass('auth-popup__body--login--active');
            $('.auth-popup__body--reg').removeClass('auth-popup__body--reg--active');
        } else if($('.auth-popup__reg').hasClass('auth-popup__reg--active')) {
            $('.auth-popup__body--reg').addClass('auth-popup__body--reg--active');
            $('.auth-popup__body--login').removeClass('auth-popup__body--login--active');
        }
    } popupTabs();

    $('.auth-popup__login').click(function (e) {
        e.preventDefault();
        $('.auth-popup__login').addClass('auth-popup__login--active');
        $('.auth-popup__reg').removeClass('auth-popup__reg--active');
        popupTabs();
    });

    $('.auth-popup__reg').click(function (e) {
        e.preventDefault();
        $('.auth-popup__reg').addClass('auth-popup__reg--active');
        $('.auth-popup__login').removeClass('auth-popup__login--active');
        popupTabs();
    });

});