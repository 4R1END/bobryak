const btnApplyFilters = document.querySelector(`.filters__btn--apply`); //кнопка "применить фильтры"
const checkedFiltersBlock = document.querySelector(`.filters__checked-filters`); //поле с уже отмеченными фильтрами
const clearFiltersBtn = document.querySelector(`.filters__btn-clear`); // унопка "очистить фильтры"

let checkedValues; //выбранные значения

//функция получения выбранных значений
function getCheckedCheckBoxes() {
	const selectedCheckBoxes = document.querySelectorAll('.filters__checkbox:checked'); 
	checkedValues = Array.from(selectedCheckBoxes).map(cb => cb.value);	
  return checkedValues; 
};

// функция очистки всех выбранных фильтров из поля отмеченных фильтров
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
	clearFiltersBtn.classList.add(`active`);
	
	cardsOfCatalog.forEach(el => {
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

	// добавление выбранного фильтра в поле отмеченных фильтров
	checkedValues.forEach((el, i) => {	
		checkedFiltersBlock.insertAdjacentHTML('afterBegin',`
			<div class="filters__checked-filter"  data-f="${selectedCheckBoxes[i].value}">
				<span>${selectedCheckBoxesName[i]}</span>
				<button class="filter-remove"></button>
			</div>
		`);
	});
});


clearFiltersBtn.addEventListener(`click`, () => {
	clearFilters();
	clearFiltersBtn.classList.remove(`active`);
	document.querySelectorAll(`input[type="checkbox"]`).forEach(el => {
		el.checked = false;
	});
	cardsOfCatalog.forEach(el => {
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
				if(!checkedFiltersBlock.firstChild) {
					clearFiltersBtn.classList.add(`hide`);
				};
				
			});
			const filterValue = e.target.closest(`filters__checked-filter`).dataset['f'];
			document.querySelectorAll(`.card[data-f="${filterValue}"]`).forEach(el => {
				el.classList.remove('hide');
			});
		};
	});



