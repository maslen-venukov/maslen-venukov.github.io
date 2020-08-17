$(document).ready(function () {

    $('.main__btn.btn--secondary').click(function (e) {
        e.preventDefault();
        $('.popup').addClass('popup--active');
    });

    $('.popup__close').click(function (e) { 
        e.preventDefault();
        $('.popup').removeClass('popup--active');
    });

    $(window).keydown(function (e) {
        if (e.keyCode === 27) {
            $('.popup').removeClass('popup--active');
        }
    });

    $('.main__title .secondary').hover(function () {
            // over
            $('.main__popup').addClass('main__popup--active');
        }, function () {
            // out
            $('.main__popup').removeClass('main__popup--active');
        }
    );

    $('.popup__form').submit(function() {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize()
        }).done(function() {
            alert("Спасибо!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});