const btnDown = document.querySelectorAll(`.card__btn-quantity-down`); // кнопка убавить количество товара в карточке
const btnUp = document.querySelectorAll(`.card__btn-quantity-up`); // кнопка прибавить количество товара в карточке
const price = document.querySelectorAll(`.card__price`);

// клик по кнопке убавить количество товара
btnDown.forEach(el => {
	el.addEventListener('click', function () {
		if (parseInt(el.nextElementSibling.innerText) > 1) {
			el.nextElementSibling.innerText = parseInt(el.nextElementSibling.innerText) - 1;
		};
	});
});

// клик по кнопке прибавить количество товара
btnUp.forEach(el => {
	el.onclick = function () {
		el.previousElementSibling.innerText = parseInt(el.previousElementSibling.innerText) + 1;
	};
});


price.forEach(el => {
	el.closest(`.card`).dataset['price'] = parseInt(el.textContent);
});
const rangeSlider = document.getElementById(`range-slider`);

if(rangeSlider) {
	noUiSlider.create(rangeSlider, {
    start: [100, 10000],
		connect: true,
		step: 1,
    range: {
        'min': [100],
        'max': [10000]
    }
});
}

const inputMin = document.getElementById(`input-min`);
const inputMax = document.getElementById(`input-max`);
const inputsArray = [inputMin, inputMax];

rangeSlider.noUiSlider.on(`update`, function(values, handle) {
	inputsArray[handle].value = Math.round(values[handle]);
});;
const defaultSelect = () => {
	const element = document.querySelector('.js-choice');
	const choices = new Choices(element, {
		searchEnabled: false
	});
};

defaultSelect();;


const filtersTitle = document.querySelectorAll(`.filters__title`);

filtersTitle.forEach(el => {
	el.addEventListener(`click`, function() {
		el.classList.toggle(`active`);
		el.nextElementSibling.classList.toggle(`active`);
	});
});

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



;
const sortSelect = document.getElementById(`sortselect`);
const dataPrice = 'price';

const getSelectValue = () => {
	return sortSelect.value;
};

const insertAfter = (elem, refElem) => {
	return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
};

const sortToUp = (dataValue) => {
	for (let i = 0; i < catalogCards.children.length; i++) {
		for (let j = i; j	< catalogCards.children.length; j++) {
			if (+catalogCards.children[i].dataset[dataValue] > +catalogCards.children[j].dataset[dataValue]) {
				replacedNode = catalogCards.replaceChild(catalogCards.children[j], catalogCards.children[i]);
				insertAfter(replacedNode, catalogCards.children[i]);
			};		
		};
	};
};

const sortToDown = (dataValue) => {
		for (let i = 0; i < catalogCards.children.length; i++) {
			for (let j = i; j	< catalogCards.children.length; j++) {
				if (+catalogCards.children[i].dataset[dataValue] < +catalogCards.children[j].dataset[dataValue]) {
					replacedNode = catalogCards.replaceChild(catalogCards.children[j], catalogCards.children[i]);
					insertAfter(replacedNode, catalogCards.children[i]);
				};		
			};
		};
	};

const sort = (selectValue) => {
	if (selectValue === 'price-up') {
		sortToUp('price');
	};	

	if (selectValue === 'price-down') {
		sortToDown('price')
	};
	
	if (selectValue === 'new') {
		sortToDown('new');
	};	

	if (selectValue === 'popular') {
		sortToDown('popular');
	};

	if (selectValue === 'sale') {
		sortToDown('sale');
	};
};

sortSelect.addEventListener(`change`, () => {
	sort(getSelectValue());
});







;