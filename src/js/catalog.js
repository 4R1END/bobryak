@@include('_card.js');
@@include('_range-slider.js');
@@include('_choices.js');


const filtersTitle = document.querySelectorAll(`.filters__title`);

filtersTitle.forEach(el => {
	el.addEventListener(`click`, function() {
		el.classList.toggle(`active`);
		el.nextElementSibling.classList.toggle(`active`);
	});
});

@@include('_filtering.js');
@@include('_sorting.js');