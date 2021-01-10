@@include('_card.js');
@@include('_range-slider.js');
@@include('_choices.js');
@@include('_popup.js');

const cards = document.querySelectorAll(`.card`);
const catalog = document.querySelector(`.catalog__cards`);
const cardsOfCatalog = catalog.querySelectorAll(`.card`);
const rangeListBtn = document.querySelector(`.btn-range-list`);
const rangeQuadroBtn = document.querySelector(`.btn-range-quadro`);
const filtersTitle = document.querySelectorAll(`.filters__title`);
const paginationLine = document.querySelector(`.pagination__line`);
const paginationLineComplete = document.querySelector(`.pagination__line`);
const generalCountCards = cardsOfCatalog.length;
const currentCountCardsBlock = document.querySelector(`.pagination__current`);
const generalCountCardsBlock = document.querySelector(`.pagination__general`);



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
			popupContainer.classList.add(`active`);
			popupContainer.querySelector(`.popup__img`).setAttribute('src', `${cardImg}`);
			popupContainer.querySelector(`.popup__title`).innerText = cardTitle;
			popupContainer.querySelector(`.popup__price`).innerText = cardPrice;
			popupContainer.querySelector(`.popup__quantity-block`).children[1].innerText = cardQuantity[0].children[1].textContent;
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
	document.querySelector(`.btn--more-js`).addEventListener(`click`, () => {
		countActiveCards = document.querySelectorAll(`.card.active`).length;
		currentCountCardsBlock.innerText = countActiveCards;
		paginationLineComplete.style.width = `${fillPaginationLine(generalCountCards, countActiveCards)}%`
	});
});



@@include('_more_products.js');
@@include('_filtering.js');
@@include('_sorting.js');
@@include('_tabs.js');
