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

    $('.reviews-slider__item').css('height', $('.reviews__slider .slick-track').innerHeight());

    $(window).resize(function () { 
        $('.reviews-slider__item').css('height', $('.reviews__slider .slick-track').innerHeight());
    });

    // Меню в шапке

    $('.header__burger').click(function () {
        $('.header__burger').toggleClass('header__burger--active');
        $('.nav--mobile').toggleClass('nav--mobile--active');
        $('body, html').toggleClass('lock');
    });

    // Навигация

    const headerHeight = $('.header').innerHeight()
                   nav = $('.nav');

    function burger() {
        $('.header__burger').removeClass('header__burger--active');
        $('.nav--mobile').removeClass('nav--mobile--active');
        $('body, html').removeClass('lock');
    }

    nav.find('a').on('click', function () {
        burger();
        var th = $(this)
            id = th.attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top - headerHeight
        }, 500);
    return false;
    });

    $('.intro__btn').on('click', function () {
        var th = $(this)
            id = th.attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top - headerHeight
        }, 500);
    return false;
    });

    // Закрытие попапа "Спасибо"

    function closePopup() {
        $('.popup').removeClass('popup--active');
        $('html, body').removeClass('lock');
    }

    $('.popup__close img').click(function () {
        closePopup();
    });

    $('.popup__area').click(function () {
        closePopup();
    });

    $(window).keydown(function(e) {
        if(e.keyCode === 27) {
            closePopup();
        };
    });

    // Обработчик формы

    $('.consultation__form').submit(function() {
        var th = $(this);
        $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: th.serialize()
        }).done(function() {
            $('.popup').addClass('popup--active');
            setTimeout(function() {
                th.trigger('reset');
            }, 1000);
        });
        return false;
    });

});