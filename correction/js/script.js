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
        closePopup();
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