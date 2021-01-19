@@include('_card.js');
@@include('_range-slider.js');
@@include('_choices.js');
@@include('_popup.js');

const cards = document.querySelectorAll(`.card`);
const catalog = document.querySelector(`.catalog__cards`);
const cardsOfCatalog = catalog.querySelectorAll(`.card`);
const RangeBtnsBlock = document.querySelector(`.catalog__range-view`);
const filtersTitle = document.querySelectorAll(`.filters__title`);
const paginationLine = document.querySelector(`.pagination__line`);
const paginationLineComplete = document.querySelector(`.pagination__line`);
const generalCountCards = cardsOfCatalog.length;
const currentCountCardsBlock = document.querySelector(`.pagination__current`);
const generalCountCardsBlock = document.querySelector(`.pagination__general`);
const btnMoreFilters = document.querySelectorAll(`.btn-more-filters-js`);
const btnMoreCards = document.querySelector(`.btn--more-js`);
const filtersForm = document.querySelector(`.sidebar__form`);



// функция устанавливает аттрибут data-round элементу el (параметр1) для отображения на странице, 
// если карточки товара раположены в 3 столбца
// data-round назначает очередь появления элемента на странице при нажатии кнопки "Развернуть"

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
	el.addEventListener(`click`, function () { // обработчик клика по названию фильтра
		el.classList.toggle(`active`); 
		el.nextElementSibling.classList.toggle(`active`);
		if(el.closest(`.filters__item`).querySelector(`.filters__more-btn`) != null) { // если кнопка "показать фильтры" существует в категории
			el.closest(`.filters__item`).querySelector(`.filters__more-btn`).classList.toggle(`active`);  // сделать ее видимой
		}
		let currentFilters = Array.from(el.nextElementSibling.children); // все фильтры в текущей категории
		currentFilters.forEach(elem => {
			if(!elem.classList.contains(`visible`)) { // при нажатии всегда скрывать изначально скрытые фильтры
				elem.classList.add(`hide`);
			};			
		});
	});
});

btnMoreFilters.forEach(el => {
	el.addEventListener(`click`, () => {
		if(!el.classList.contains(`less`)) {
			el.closest(`.filters__item`).querySelectorAll(`.filters__label`).forEach(elem => {
				elem.classList.remove(`hide`);
				if(!elem.classList.contains(`hide`)) {
					el.innerText = `-`;
					el.classList.add(`less`);
				};
			});
		} else {
			el.closest(`.filters__item`).querySelectorAll(`.filters__label`).forEach(elem => {
				if(!elem.classList.contains(`visible`)) {
					elem.classList.add(`hide`);
				};				
			});
			el.innerText = `+`;
			el.classList.remove(`less`);
		}
	});
});
// переключение вида карточек в каталоге
RangeBtnsBlock.addEventListener(`click`, () => {
	Array.from(RangeBtnsBlock.children).forEach(el => {	
		el.classList.toggle(`active`);
	});
	catalog.classList.toggle(`list`);
});

cards.forEach(el => {
	const cardImg = el.querySelector(`.card__image-main`).getAttribute(`src`);
	const cardTitle = el.querySelector(`.card__title`).innerText.replace(/[\r\n]+/gm, "");
	const cardPrice = el.querySelector(`.card__price`).innerText.replace(/[\r\n]+/gm, "");
	const cardDescr = el.querySelector(`.card__descr`).innerText.replace(/[\r\n]+/gm, "");
	const linkPath = el.dataset['name'];

	const cardQuantity = el.querySelectorAll(`.quantity-block`);

	// cardQuantity.forEach(el => {
	// 	el.addEventListener(`click`, () => {
	// 		if(parseInt(cardQuantity[0].children[1].innerText) > 1) {
	// 			cardQuantity[1].children[1].innerText = cardQuantity[0].children[1].textContent;
	// 		};
	// 		if(parseInt(cardQuantity[1].children[1].innerText) > 1) {
	// 			cardQuantity[0].children[1].innerText = cardQuantity[1].children[1].textContent;
	// 		};
	// 	});	
	// });

	


	const setParam = (e) => {		
		if (e.target.classList.contains(`card__image-main`) || e.target.classList.contains(`card__title`) || e.target.classList.contains(`card__btn--more-descr`)) {
			popupOpen();
			popupContainer.querySelector(`.popup__img`).setAttribute('src', `${cardImg}`);
			popupContainer.querySelector(`.popup__title`).innerText = cardTitle;
			popupContainer.querySelector(`.popup__price`).innerText = cardPrice;
			popupContainer.querySelector(`.popup__quantity-block`).children[1].value = cardQuantity[0].children[1].value;
			popupContainer.querySelector(`.popup__descr`).innerText = cardDescr;
			popupContainer.querySelector(`.popup__more-link`).setAttribute(`href`, `card_${linkPath}.html`);
		};
	};

	el.addEventListener(`click`, (event) => {
		setParam(event);
	});
	el.querySelector(`.card__btn--more-descr`).addEventListener(`click`, (event) => {
		setParam(event);
	});
});

// i общее число карточек, j текущее число карточек
const fillPaginationLine = (i, j) => {
	return (100 / i) * j;
};

document.addEventListener(`DOMContentLoaded`, () => {
	generalCountCardsBlock.innerText = generalCountCards;
	let countActiveCards = document.querySelectorAll(`.card.active`).length;
	currentCountCardsBlock.innerText = countActiveCards;
	paginationLineComplete.style.width = `${fillPaginationLine(generalCountCards, countActiveCards)}%`
	btnMoreCards.addEventListener(`click`, () => {
		countActiveCards = document.querySelectorAll(`.card.active`).length;
		currentCountCardsBlock.innerText = countActiveCards;
		paginationLineComplete.style.width = `${fillPaginationLine(generalCountCards, countActiveCards)}%`;
		if(countActiveCards === generalCountCards) {
			btnMoreCards.classList.remove(`btn--primary`);
			btnMoreCards.classList.add(`btn--disable`);
		}
	});
});

filtersForm.addEventListener(`submit`, (e) => {
	e.preventDefault();
});



@@include('_more_products.js');
@@include('_filtering.js');
@@include('_sorting.js');
@@include('_tabs.js');
