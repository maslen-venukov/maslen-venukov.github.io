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

	$('.owl-carousel').owlCarousel({
		// loop:true,
		responsive:{
			0:{
				items:1,
				dots: true,
				nav: true,
				loop: true,
				startPosition: 1,
				autoHeight: true
			},
			1170:{
				items:3
			}
		}
	});

});