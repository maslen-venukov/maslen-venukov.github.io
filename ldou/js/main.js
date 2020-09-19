//mobile menu

const trigger = $('.tm-trigger');

const menuPanel = $('.tm-panel');



//modal

const darkness = $(".darkness");

const hider = $(".modal-x");

const modal = $(".modal");

const video = $('#video');

const graduate = $('#graduate');



function videoClear(){

	if ( video.is(":visible") ) {

		video.find('.modal-in').html("");

	}

}

$('.graduates-button').on('click', function(e){
	e.preventDefault();
	graduate.attr('style', 'display: block');
	darkness.show();
	const graduateName = $(this).closest('.graduates-info').children('.name').text(),
		  graduatePrice = $(this).closest('.graduates-info').children('.price').text(),
		  hiddenGraduateNameInput = $('.consultation-form form input[type="hidden"].graduate-name');
	hiddenGraduateNameInput.val(graduateName)[0];
	$('#graduate .consultation-form h2').text(graduateName);
	$('#graduate .consultation-coupon--line3').text(graduatePrice);
})


darkness.on("click", function(){

	videoClear();

	darkness.hide();

	modal.hide();

});



hider.on("click", function(){

	videoClear();

	darkness.hide();

	modal.hide();

});



trigger.on("click", function(){

	trigger.toggleClass("active");

	menuPanel.toggleClass("active");

});





document.onkeydown = function(evt) {

    evt = evt || window.event;

    if (evt.keyCode == 27) {

		darkness.hide();

		modal.hide();

    }

};



// активные пункты меню

menuPanel.find("a").each(function(){

	var $this = $(this);

	if ( $this.attr("href") == ("/" + location.hash) ) {

		$this.addClass("active");

	}

	$this.on("click", function(){

		if (menuPanel.is(".active")) {

			trigger.toggleClass("active");

			menuPanel.toggleClass("active");

		}

		$(this).addClass("active").closest("li").siblings().find("a").removeClass("active");

	});

});





//reviews

let bigvideos = $(".main-reviews--bigvid");
let clientsBigvideos = $(".main-reviews--clients .main-reviews--bigvid");

$(".main-reviews--smallvid").find("span").on("click", function(){
	if($(this).closest('.main-reviews').hasClass('main-reviews--clients')) {
		clientsBigvideos.removeClass("active").eq( $(this).data("index") ).addClass("active");
	} else {
		bigvideos.not(clientsBigvideos).removeClass("active").eq( $(this).data("index") ).addClass("active");
	};
});

// старый код из reviews
// $(".main-reviews--smallvid").find("span").on("click", function(){
// 	bigvideos.removeClass("active").eq( $(this).data("index") ).addClass("active");
// });








//Временный код для окна спасибо. его нужно убрать когда будет подключена форма.

// $("form").on("submit", function(e){

// 	e.preventDefault();

// 	$('#thanks').show();

// 	darkness.show();

// });



$("form").on("submit", function(e){

  e.preventDefault();

  var $this = $(this);

  $.ajax({

    url: '/sendnp.php',

    type: 'GET',

    data: {

    	name: $this.find('input[name="name"]').val(), 

    	phone: $this.find('input[name="phone"]').val(),

    	ticket: $this.find('input[name="ticket"]').val(),

    	forma: $this.find('input[name="forma"]').val()

    }

  })

  .done(function() {

    $('#thanks').show();

    darkness.show();

  })

  .fail(function() {

    console.log("error");

  })

  .always(function() {

    console.log("complete");

  });



});







// Получение видео о ЛДОУ

$(".main-v--video").on("click", function(e){

	e.preventDefault();

	$.ajax({

		url: '/video.php',

		type: 'GET',

		data: {video: 'about'},

	})

	.done(function(data) {

		video.show().find(".modal-in").html(data);

		darkness.show();

	})

	.fail(function() {

		console.log("error");

	})

	.always(function() {

		console.log("complete");

	});

	

});



//Получение видео отзыва

$(".main-reviews--bigvid").on("click", function(e){

	e.preventDefault();

	var $this = $(this);

	$.ajax({

		url: $this.attr("href"),

		type: 'GET',

	})

	.done(function(data) {

		video.show().find(".modal-in").html(data);

		darkness.show();

	})

	.fail(function() {

		console.log("error");

	})

	.always(function() {

		console.log("complete");

	});

	

});



// Поиск отзывов

$('.reviews--input').on('keyup', function(e){
	e.preventDefault();
	const value = $('.reviews--input')[0].value.toLowerCase();
	$('.reviews-list.video .main-reviews--bigvid').addClass('hidden');
	$('.reviews-list.more .reviews-item').attr('style', 'display: none;');
	$('.reviews-list.video .main-reviews--bigvid[data-graduate]').each(function(index){
		if($(this).data('graduate').toLowerCase() === value){
			$(this).closest('.reviews-list.video .main-reviews--bigvid').removeClass('hidden');
		};
		if($('.reviews-list.video .main-reviews--bigvid span')[index].innerHTML.replace('<br>', '').toLowerCase().includes(value) || $('.reviews-list.video .main-reviews--bigvid[data-graduate]')[index] === value){
			$(this).closest('.reviews-list.video .main-reviews--bigvid').removeClass('hidden');
		};
	});
	$('.reviews-list.more .reviews-item[data-graduate]').each(function(index){
		if($(this).data('graduate').toLowerCase() === value){
			// $(this).closest('.reviews-list.more .reviews-item').removeClass('hidden');
			$(this).closest('.reviews-list.more .reviews-item').attr('style', 'display: block;');
		};
		if($('.reviews-list.more .reviews-item .name')[index].innerHTML.replace('<br>', '').toLowerCase().includes(value) || $('.reviews-list.more .reviews-item[data-graduate]')[index] === value) {
			// $(this).closest($('.reviews-list.more .reviews-item')).removeClass('hidden');
			$(this).closest($('.reviews-list.more .reviews-item')).attr('style', 'display: block;');
		};
	});
	if($('.reviews--input')[0].value === ''){
		$('.reviews-list.video .main-reviews--bigvid').removeClass('hidden');
		$('.reviews-list.more .reviews-item').attr('style', 'display: block;');
	};
});

$('.reviews--reset').on('click', function(){
	$(('.reviews--input')[0].value === '');
	$('.reviews-list.video .main-reviews--bigvid').removeClass('hidden');
	$('.reviews-list.more .reviews-item').attr('style', 'display: block;');
});

$('.reviews--form').keydown(function(e){
	if(e.keyCode == 13) {
		e.preventDefault();
		return false;
	}
});

// Табы в отзывах

$('.reviews .tabs--item').click(function (e) {
	const th = $(this);
	e.preventDefault();
	th.addClass('active');
	if(th.hasClass('video')) {
		$('.reviews-list.video').addClass('active');
		$('.reviews-list.more').removeClass('active');
		$('.reviews .tabs--item.more').removeClass('active');
	} else if($(this).hasClass('more')) {
		$('.reviews-list.more').addClass('active');
		$('.reviews-list.video').removeClass('active');
		$('.reviews .tabs--item.video').removeClass('active');
	}
});



// Табы в выпускниках

const graduatesTabsItem = $('.graduates .tabs--item'),
	  graduatesCourse = $('.graduates .graduates-course');

graduatesTabsItem.click(function (e) {
	const th = $(this),
		  dataTabs = th.data('tabs');
		  graduatesThCourse = $('.graduates .graduates-course[data-course="' + dataTabs + '"]');
	e.preventDefault();
	graduatesTabsItem.removeClass('active');
	graduatesCourse.removeClass('active');
	th.addClass('active');
	graduatesThCourse.addClass('active');
});
