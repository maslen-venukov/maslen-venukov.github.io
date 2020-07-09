// Tabs

let tab = function() {

	const tabSwitches = document.querySelectorAll('.tabs-inner-switches-item'),
	tabItem = document.querySelectorAll('.tabs-inner-content-item');
	let tabName;

	tabSwitches.forEach(item => {
		item.addEventListener('click', selectTabSwitches)
	});

	function selectTabSwitches() {
		tabSwitches.forEach(item => {
			item.classList.remove('tabs-inner-switches-item_active')
		});
		this.classList.add('tabs-inner-switches-item_active');
		tabName = this.getAttribute('data-tab-name');
		selectTabItem(tabName);
	};

	function selectTabItem(tabName) {
		tabItem.forEach(item => {
			item.classList.contains(tabName)? item.classList.add('tabs-inner-content-item_active'): item.classList.remove('tabs-inner-content-item_active');
		});
	};

};

tab();

// Carousel

$(document).ready(function() {

	function checkWidth() {
		const windowWidth = $('body').innerWidth(),
		pricingSlider = $(".pricing-inner-row");
		// socialSlider = $(".social-inner-list");
		if(windowWidth < 1171){
			pricingSlider.addClass('owl-carousel owl-theme owl-loaded');
		} else {
			pricingSlider.removeClass('owl-carousel owl-theme owl-loaded');
		}
		// if(windowWidth < 1025){
		// 	socialSlider.addClass('owl-carousel owl-theme owl-loaded');
		// } else {
		// 	socialSlider.removeClass('owl-carousel owl-theme owl-loaded');
		// }
	}

	checkWidth(); // проверит при загрузке страницы

	$(window).resize(function(){
		checkWidth(); // проверит при изменении размера окна клиента
	});

	$('.owl-carousel').owlCarousel({
		items: 1,
		dots: true,
		nav: true,
		loop: true,
		startPosition: 1,
		autoHeight: true,
		smartSpeed: 500
	});

// Burger

	$('.nav__burger').on('click', function() {
		$('.nav__burger').toggleClass('nav__burger_active');
		$('.header-inner').toggleClass('header-inner_active');
	});

});