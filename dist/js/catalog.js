const btnDown = document.querySelectorAll(`.quantity-block__btn-down`); // кнопка убавить количество товара в карточке
const btnUp = document.querySelectorAll(`.quantity-block__btn-up`); // кнопка прибавить количество товара в карточке
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



;
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
// инициализация объекта кастомного селекта

const defaultSelect = () => {
	const element = document.querySelector('.js-choice');
	const choices = new Choices(element, {
		searchEnabled: false
	});
};

defaultSelect();;

const cards = document.querySelectorAll(`.card`);
const catalog = document.querySelector(`.catalog__cards`);
const cardsOfCatalog = catalog.querySelectorAll(`.card`);
const rangeListBtn = document.querySelector(`.btn-range-list`);
const rangeQuadroBtn = document.querySelector(`.btn-range-quadro`);
const popupContainer = document.querySelector(`.popup-container`);
const filtersTitle = document.querySelectorAll(`.filters__title`);

const setDataRoundPer3 = (el, i) => {
	if (i <= 2) {
		el.setAttribute(`data-round`, `0`);
	};
	if (i >= 3 && i <= 5) {
		el.setAttribute(`data-round`, `1`);
	};
	if (i >= 6 && i <= 8) {
		el.setAttribute(`data-round`, `2`);
	};
	if (i >= 9 && i <= 11) {
		el.setAttribute(`data-round`, `3`);
	};
	if (i >= 12 && i <= 14) {
		el.setAttribute(`data-round`, `4`);
	};
};

cardsOfCatalog.forEach((el, i) => {
	setDataRoundPer3(el, i);
});


filtersTitle.forEach(el => {
	el.addEventListener(`click`, function () {
		el.classList.toggle(`active`);
		el.nextElementSibling.classList.toggle(`active`);
	});
});



rangeListBtn.addEventListener(`click`, () => {
	rangeListBtn.querySelectorAll(`.btn-range-list rect`).forEach(el => {
		el.setAttribute(`fill`, `#0F5628`);
		el.setAttribute(`stroke`, `#0F5628`);
	});
	rangeQuadroBtn.querySelectorAll(`.btn-range-quadro rect`).forEach(el => {
		el.setAttribute(`fill`, `#9D9D9C`);
		el.setAttribute(`stroke`, `#9D9D9C`);
	});
	catalog.classList.add(`list`);
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
	catalog.classList.remove(`list`);
});

cards.forEach(el => {
	const cardImg = el.querySelector(`.card__image-main`).getAttribute(`src`);
	const cardTitle = el.querySelector(`.card__title`).innerText.replace(/[\r\n]+/gm, "");
	const cardPrice = el.querySelector(`.card__price`).innerText.replace(/[\r\n]+/gm, "");
	const cardDescr = el.querySelector(`.card__descr`).innerText.replace(/[\r\n]+/gm, "");
	const linkPath = el.dataset['name'];



	const setParam = (e) => {
		const cardQuantity = el.querySelectorAll(`.quantity-block`);
		cardQuantityArray = Array.from(cardQuantity);

		if (e.target.classList.contains(`card__image-main`) || e.target.classList.contains(`card__title`) || e.target.classList.contains(`card__btn--more-descr`)) {
			popupContainer.classList.add(`active`);
			popupContainer.querySelector(`.popup__img`).setAttribute('src', `${cardImg}`);
			popupContainer.querySelector(`.popup__title`).innerText = cardTitle;
			popupContainer.querySelector(`.popup__price`).innerText = cardPrice;
			popupContainer.querySelector(`.popup__quantity-block`).children[1].innerText = cardQuantity[0].children[1].textContent;
			popupContainer.querySelector(`.popup__descr`).innerText = cardDescr;
			popupContainer.querySelector(`.popup__more-link`).setAttribute(`href`, `cards/card_${linkPath}.html`);
		};
	};

	el.addEventListener(`click`, (event) => {
		setParam(event);
	});
	el.querySelector(`.card__btn--more-descr`).addEventListener(`click`, (event) => {
		setParam(event);
	});
});

popupContainer.addEventListener(`click`, (e) => {
	if (e.target.classList.contains(`popup__close`)) {
		popupContainer.classList.remove(`active`);
	};
	if (e.target.classList.contains(`popup-container`)) {
		popupContainer.classList.remove(`active`);
	};
});



const moreProductsBtn = document.querySelector(`.btn--more-js`); //кнопка развернуть 

const cardsFirstRound = document.querySelectorAll(`.card[data-round="1"]`);
const cardsSecondRound = document.querySelectorAll(`.card[data-round="2"]`);

// клик по кнопке развернуть
moreProductsBtn.addEventListener(`click`, () => {
	console.log(cardsFirstRound);
	cardsSecondRound.forEach(el => {
		console.log(cardsFirstRound[0].classList.contains(`active`));
		if(cardsFirstRound[0].classList.contains(`active`) && !el.classList.contains(`active`)) {
			el.classList.add(`active`);
		};
	});
	cardsFirstRound.forEach(el => {
		if(!el.classList.contains(`active`)) {
			el.classList.add(`active`);
		}
	});
});;
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
			});
			const filterValue = e.target.closest(`filters__checked-filter`).dataset['f'];
			document.querySelectorAll(`.card[data-f="${filterValue}"]`).forEach(el => {
				el.classList.remove('hide');
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


document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelector(`.tabs`);
	const tabsBlock = document.querySelectorAll(`.tabs__block`);
	const tabsBtn = document.querySelectorAll(`.tabs__btn-js`);

	// клик по табам в каталоге
	if (tabs) {
		tabs.addEventListener('click', (e) => {
			if (e.target.classList.contains(`tabs__btn-js`)) {
				tabsBtn.forEach(el => {
					el.classList.remove(`tabs__item--active`);
				})
				e.target.classList.add(`tabs__item--active`);
				const tabsPath = e.target.dataset.tabsPath;
				tabsHandler(tabsPath);
			}
		});
	}
	// обработчик клика по табам 
	const tabsHandler = (path) => {
		tabsBlock.forEach(el => {
			el.classList.remove(`tabs__block--active`);
		});
		document.querySelectorAll(`.card[data-round]`).forEach(el => {
			el.classList.remove(`active`);
		});
		document.querySelector(`[data-tabs-target="${path}"]`).classList.add(`tabs__block--active`);
	}
});

;
