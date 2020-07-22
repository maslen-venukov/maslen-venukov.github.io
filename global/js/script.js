$(document).ready(function () {

    // Main Slider

    const mainSlider = $('.main-slider');

    mainSlider.slick({
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: false,
                }
            }
        ]
    });

    mainSlider.on('wheel', (function(e) {
        e.preventDefault();
        if (e.originalEvent.deltaY < 0 && !$('.wrapper').hasClass('wrapper_active')) {
            $(this).slick('slickPrev');
        } else if (!$('.wrapper').hasClass('wrapper_active')) {
            $(this).slick('slickNext');
        }
    }));

    // Works Slider

    $('.works-slider').slick({
        arrows: true,
    });

    // Parallax
    
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

    // Nav button

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

    // Navigation

    $('.nav__inner .nav__item').click(function (e) { 
        e.preventDefault();
        const index = $(this).index();
        console.log(index);
        const slideStr = '#slick-slide-control0' + index;
        const slide = $(slideStr);
        console.log(slide);
        slide.click();
    });

    // Hire Us

    const hireUsSection = $('#slick-slide-control04');

    $('.header__button').click(function (e) { 
        e.preventDefault();
        hireUsSection.click();
    });

    $('.home__button').click(function (e) { 
        e.preventDefault();
        hireUsSection.click();
    });

});