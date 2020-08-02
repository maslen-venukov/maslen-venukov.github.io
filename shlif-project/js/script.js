$(document).ready(function () {

    // Меню-бургер
    $('.header__burger').click(function () {
        $('.header__burger').toggleClass('header__burger_active');
        $('.header-nav__inner').toggleClass('header-nav__inner_active');
        $('body').toggleClass('body_lock');
    });

    // Отправка формы на странице Контакты
    $(".contact__form").submit(function() {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize()
        }).done(function() {
            alert("Сообщение отправлено!");
            setTimeout(function() {
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    // Отправка формы из подвала
    $(".footer-callback__form").submit(function() {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize()
        }).done(function() {
            alert("Сообщение отправлено!");
            setTimeout(function() {
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    // Модальное окно
    function closeModal() {
        $('.modal').removeClass('modal_active');
    }

    $('.gallery__img').click(function () {
        let img = $(this).children('img');
        let src = img.attr('src');
        $('.modal__img img').attr('src', src);
        let info = $(this).children('.gallery__info');
        let text = info.text();
        $('.modal__info').text(text);
        $('.modal').addClass('modal_active');
    });

    $('.slider-card__img').click(function () {
        let img = $(this).children('img');
        let src = img.attr('src');
        $('.modal__img img').attr('src', src);
        let info = $(this).children('.slider-card__info');
        let text = info.text();
        $('.modal__info').text(text);
        $('.modal').addClass('modal_active');
    });

    $('.modal__close').click(function () {
        closeModal();
    });

    $('.modal__body').click(function () { 
        closeModal();
    });

    $(window).keydown(function (e) { 
        if(e.keyCode === 27) {
            closeModal();
        };
    });

    // Слайдер на страницах Наши работы и Спортзалы
    $('.gallery__slider').slick({
        dots: true
    });

});