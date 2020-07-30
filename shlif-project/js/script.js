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

    // Слайдер на страницах Наши работы и Спортзалы
    $('.gallery__slider').slick({
        dots: true
    });

});