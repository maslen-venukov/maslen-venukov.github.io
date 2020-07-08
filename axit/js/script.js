// Tabs

let tab = function() {

	let tabSwitches = document.querySelectorAll('.tabs-inner-switches-item'),
	tabItem = document.querySelectorAll('.tabs-inner-content-item'),
	tabName;

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
		var windowWidth = $('body').innerWidth(),
			slider = $(".pricing-inner-row");
		if(windowWidth < 1170){
			slider.addClass('owl-carousel owl-theme owl-loaded');
		} else {
			slider.removeClass('owl-carousel owl-theme owl-loaded');
		}
	}

	checkWidth(); // проверит при загрузке страницы

	$(window).resize(function(){
		checkWidth(); // проверит при изменении размера окна клиента
	});

	$('.owl-carousel').owlCarousel({
		items:1,
		dots: true,
		nav: true,
		loop: true,
		startPosition: 1,
		autoHeight: true
	});

});