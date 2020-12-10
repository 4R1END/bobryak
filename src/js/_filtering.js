const btnApplyFilters = document.querySelector(`.filters__btn--apply`);
const catalogCards = document.querySelector(`.catalog__cards`);
const cards = catalogCards.querySelectorAll(`.card`);
const checkedFiltersBlock = document.querySelector(`.filters__checked-filters`)
const clearFiltersBtn = document.querySelector(`.filters__btn-clear`);

let checkedValues;

function getCheckedCheckBoxes() {
	const selectedCheckBoxes = document.querySelectorAll('.filters__checkbox:checked');
	checkedValues = Array.from(selectedCheckBoxes).map(cb => cb.value);	
  return checkedValues; 
};

const clearFilters = () => {
	while (checkedFiltersBlock.firstChild) {
		checkedFiltersBlock.removeChild(checkedFiltersBlock.firstChild);
	};
};

btnApplyFilters.addEventListener(`click`, () => {
	const filterPriceMin = document.getElementById(`input-min`);
	const filterPriceMax = document.getElementById(`input-max`);
	const filterPriceRange = [parseInt(filterPriceMin.value), parseInt(filterPriceMax.value)];
	const selectedCheckBoxes = document.querySelectorAll('.filters__checkbox:checked');
	const selectedCheckBoxesName = Array.from(selectedCheckBoxes).map(cb => cb.nextElementSibling.textContent);

	clearFilters();
	getCheckedCheckBoxes();
	
	cards.forEach(el => {
		const cardPrice = el.dataset['price'];
		const cardFilter =el.dataset['f'];
		const filterValue = (fValue) => {
			if(cardPrice >= filterPriceRange[0] && cardPrice <= filterPriceRange[1]) {
				return fValue == cardFilter;
			};
		};

		el.classList.remove('hide');
		
		if (cardPrice >= filterPriceRange[0] && cardPrice <= filterPriceRange[1]) {
			el.classList.add('hide');
		};

		if (checkedValues.length > 0) {
			el.classList.remove('hide');
		};

		if (!checkedValues.some(filterValue)) {	
			el.classList.add('hide');
		};

		if (!checkedValues.length > 0 && cardPrice >= filterPriceRange[0] && cardPrice <= filterPriceRange[1]) {
			el.classList.remove('hide');
		};		
	});

	checkedValues.forEach((el, i) => {	
		checkedFiltersBlock.insertAdjacentHTML('afterBegin',`
			<div class="filters__checked-filter"  data-f="${selectedCheckBoxes[i].value}">
				<span>${selectedCheckBoxesName[i]}</span>
				<button class="filter-remove">x</button>
			</div>
		`);
	});
});


clearFiltersBtn.addEventListener(`click`, () => {
	clearFilters();
	document.querySelectorAll(`input[type="checkbox"]`).forEach(el => {
		el.checked = false;
	});
	cards.forEach(el => {
		el.classList.remove('hide');
	});
});


	checkedFiltersBlock.addEventListener(`click`, (e) => {
		const selectedCheckBoxes = document.querySelectorAll('.filters__checkbox:checked');
		if (e.target.classList.contains(`filter-remove`)) {
			e.target.closest(`.filters__checked-filter`).remove();
			selectedCheckBoxes.forEach(el => {
				if (el.value === e.target.closest(`.filters__checked-filter`).dataset['f']) {
					el.checked = false;
				};
			});
		};
	});



