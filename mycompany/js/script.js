$(document).ready(function() {

	$('.nav__burger').click(function() {
		$('.nav__burger').toggleClass('nav__burger_active');
		$('.nav__inner').toggleClass('nav__inner_active');
		$('body').toggleClass('body_lock');
	});

	$('.nav__item').click(function() {
		$('.nav__burger').removeClass('nav__burger_active');
		$('.nav__inner').removeClass('nav__inner_active');
		$('body').removeClass('body_lock');
	});

	$('.slider').slick({
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					touchThreshhold: 50
				}
			}
		]
	});

	$('.header__logo').click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('.intro').offset().top
		}, 500);
	});

	$('.nav__item_logo').click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('.intro').offset().top
		}, 500);
	});

	$('#nav_home').click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('.intro').offset().top
		}, 500);
	});

	$('#nav_about').click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('.about').offset().top
		}, 500);
	});

	$('#nav_services').click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('.services').offset().top
		}, 500);
	});

	$('#nav_portfolio').click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('.work').offset().top
		}, 500);
	});

	$('#nav_reviews').click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('.reviews').offset().top
		}, 500);
	});

	$('#nav_contacts').click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('.contact').offset().top
		}, 500);
	});

	$('.top').click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('.intro').offset().top
		}, 500);
	});

	//E-mail Ajax Send
	$(".contact__form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "php/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

