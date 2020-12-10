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

const rangeListBtn = document.querySelector(`.btn-range-list`);
const rangeQuadroBtn = document.querySelector(`.btn-range-quadro`);
const cardsCatalog = document.querySelector(`.catalog__cards`);

rangeListBtn.addEventListener(`click`, () => {
	rangeListBtn.querySelectorAll(`.btn-range-list rect`).forEach(el => {
		el.setAttribute(`fill`, `#0F5628`);
		el.setAttribute(`stroke`, `#0F5628`);
	});
	rangeQuadroBtn.querySelectorAll(`.btn-range-quadro rect`).forEach(el => {
		el.setAttribute(`fill`, `#9D9D9C`);
		el.setAttribute(`stroke`, `#9D9D9C`);
	});
	cardsCatalog.classList.add(`list`);
	rangeQuadroBtn.classList.remove(`active`);
	rangeListBtn.classList.add(`active`);
});

rangeQuadroBtn.addEventListener(`click`, () => {
	rangeQuadroBtn.querySelectorAll(`.btn-range-quadro rect`).forEach(el => {
		el.setAttribute(`fill`, `#0F5628`);
		el.setAttribute(`stroke`, `#0F5628`);
	});
	rangeListBtn.querySelectorAll(`.btn-range-list rect`).forEach(el => {
		el.setAttribute(`fill`, `#9D9D9C`);
		el.setAttribute(`stroke`, `#9D9D9C`);
	});
	cardsCatalog.classList.remove(`list`);
	rangeQuadroBtn.classList.add(`active`);
	rangeListBtn.classList.remove(`active`);
});

@@include('_filtering.js');
@@include('_sorting.js');
@@include('_tabs.js');
@@include('_more_products.js');