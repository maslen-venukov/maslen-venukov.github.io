$(document).ready(function () {

    const mainSlider = $('.main-slider');

    mainSlider.slick({
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });

    mainSlider.on('wheel', (function(e) {
        e.preventDefault();
        if (e.originalEvent.deltaY < 0 && !$('.wrapper').hasClass('wrapper_active')) {
            $(this).slick('slickPrev');
        } else if (!$('.wrapper').hasClass('wrapper_active')) {
            $(this).slick('slickNext');
        }
    }));

    $('.works-slider').slick({
        arrows: true,
    });
    
    $(window).mousemove(function (e) {
        let offsetX = 0.5 - e.pageX / $(window).width();
        let offsetY = 0.5 - e.pageY / $(window).height();

        $('.parallax').each(function(i, el) {
            let offset = parseInt($(el).data('offset'));

            let translate = 'translate(' + Math.round(offsetX * offset) + 'px,' + Math.round(offsetY * offset) + 'px)';

            $(el).css({
                'transform': translate
            });

            if ($(this).hasClass('figure_rhombus') || $(this).hasClass('about_triangle')) {
                $(el).css({
                    'transform': translate + 'rotate(45deg)'
                });
            };
        });
    });

    $('.nav__button').click(function (e) { 
        e.preventDefault();
        $('.wrapper').toggleClass('wrapper_active');
        $('.nav__inner').toggleClass('nav__inner_active');
    });

    $('.wrapper').click(function (e) { 
        e.preventDefault();
        if ($(this).hasClass('wrapper_active')) {
            $(this).removeClass('wrapper_active');
            $('.nav__inner').removeClass('nav__inner_active');
        };
    });

// opacity: 1; height: 100%; transform: translate3d(0px, -1576px, 0px);
// transform: translate3d(0px, -788px, 0px);
// transform: translate3d(0px, -1576px, 0px);

// class="home section slick-current slick-active" aria-hidden="false" tab-index="0"
// class="works section" aria-hidden="true" tab-index="-1"

});