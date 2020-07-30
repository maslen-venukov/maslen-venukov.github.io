$(document).ready(function () {

    $('.header__burger').click(function () {
        $('.header__burger').toggleClass('header__burger_active');
        $('.header-nav__inner').toggleClass('header-nav__inner_active');
        $('body').toggleClass('body_lock');
    });

    //E-mail Ajax Send
    $(".contact__form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Сообщение отправлено!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    //E-mail Ajax Send
    $(".footer-callback__form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Сообщение отправлено!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    $('.gallery__slider').slick({
        dots: true
    });

});