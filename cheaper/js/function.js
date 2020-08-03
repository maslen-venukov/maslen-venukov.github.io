jQuery(document).ready(function($) {
	const video_frame = {
		fun: () =>{
			function function_iframe() {
				$('.video-window').each(function(index, el) {
					var widht_modal = $(this).find('.window iframe').outerWidth();
					var formula = widht_modal * 4 / 7;
					$(this).find('.window iframe').height(formula);
				});
			}
			$('body').on('click', '.play', function(event){
				event.preventDefault();
				$('.modal-window[data-modal="' + $(this).attr('data-modal') +'"]').fadeIn(400).addClass('active').find('iframe').attr('src', $(this).attr('data-scr') + '?autoplay=1');
				$('html, body').addClass('overflow-body');
				function_iframe();
				jQuery(window).resize(function() {
					clearTimeout(window.resizedFinished);
					window.resizedFinished = setTimeout(function(){
						function_iframe();
					}, 500);
				});
			});



			$('body').on('click', 'a[data-modal]', function(event){
				event.preventDefault();
				$('.modal-window').fadeOut(400).removeClass('active');
				var data_modal = $(this).attr('data-modal');
				$('.modal-window[data-modal="' + data_modal +'"]').fadeIn(400).addClass('active');
				$('html, body').addClass('overflow-body')
			});
			$('body').on('click', '.close', function(event){
				$('.modal-window').fadeOut(400);
				$('.modal-window').removeClass('active');
				$('.video-window').find('iframe').attr('src', ' ');
				$('html, body').removeClass('overflow-body');
			});
			jQuery('.modal-window').click( function(event){
				if(jQuery(event.target).closest(".window").length ) 
				return;
					$('.modal-window').fadeOut(400);
					$('.modal-window').removeClass('active');
					$('.video-window').find('iframe').attr('src', ' ');
					$('html, body').removeClass('overflow-body');
				event.stopPropagation();
			});
		}
	}
	video_frame.fun();


	const acardion = {
		fun: () =>{
			$('.acardion .top').click(function(event) {
				$('.acardion .top').not($(this)).removeClass('active').parent('.item').find('.bottom').slideUp(400);
				$(this).toggleClass('active').parent('.item').find('.bottom').slideToggle(400);
			});
		}
	}
	acardion.fun();

	const maobile_menu = {
		fun: () =>{
			$('.mobile-nav').click(function(event) {
				$(this).toggleClass('active');
				$('.nav-main').toggleClass('active');
				$('.mobile-menu, header .bottom').removeClass('active');
			});

			$('.mobile-menu').click(function(event) {
				$(this).toggleClass('active');
				$('header .bottom').toggleClass('active');
				$('.nav-main, .mobile-nav').removeClass('active');
			});

			jQuery(document).click( function(event){
				if(jQuery(event.target).closest(".mobile-nav, .nav-main, .mobile-menu").length ) 
				return;
					$('.nav-main, .mobile-nav, .mobile-menu, header .bottom').removeClass('active');
				event.stopPropagation();
			});
		}

	}
	maobile_menu.fun();


	const auncor = {
		fun: () => {
			jQuery('a.auncor').click(function(event){
				$('.nav-main, .mobile-nav, .mobile-menu, header .bottom').removeClass('active');
				history.pushState({}, "", $(this).attr('href'));
				var target = $(this).attr('href').replace('/', '');
				var scroll_t = $(window).scrollTop();
				if(scroll_t<=60){
					$('html, body').stop(true, false).animate({scrollTop: $(target).offset().top - 0}, 900);
				}
				else{
					$('html, body').stop(true, false).animate({scrollTop: $(target).offset().top - 0}, 900);
				}
				return false;
			});
		}
	}
	auncor.fun();


	const dropdown = $('.nav-main .dropdown');
	
	$('.models').parent().hover(function () {
		dropdown.addClass('active');
	}, function () {
		dropdown.removeClass('active');
	});

	dropdown.hover(function () {
		dropdown.addClass('active');
	}, function () {
		dropdown.removeClass('active');
	});


});