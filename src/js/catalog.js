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
const card = document.querySelectorAll(`.card`);
const popupContainer = document.querySelector(`.popup-container`);


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
});

card.forEach(el => {
	const cardImg = el.querySelector(`.card__image-main`).getAttribute(`src`);
	const cardTitle = el.querySelector(`.card__title`).innerText.replace(/[\r\n]+/gm, "");
	const cardPrice = el.querySelector(`.card__price`).innerText.replace(/[\r\n]+/gm, "");
	const cardDescr = el.querySelector(`.card__descr`).innerText.replace(/[\r\n]+/gm, "");
	const linkPath = el.dataset['name'];
	
	const setParam = (e) => {
		const cardQuantity = el.querySelectorAll(`.quantity-block`);
		cardQuantityArray = Array.from(cardQuantity);
		console.log(cardQuantityArray);
		
		// cardQuantityArray[1].children[1].innerText = cardQuantityArray[0].children[1].textContent.replace(/[\r\n]+/gm, "");
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

popupContainer.addEventListener(`click`, (e) => {
	if (e.target.classList.contains(`popup__close`)) {
		popupContainer.classList.remove(`active`);
	};
	if(e.target.classList.contains(`popup-container`)) {
		popupContainer.classList.remove(`active`);
	}
});




@@include('_filtering.js');
@@include('_sorting.js');
@@include('_tabs.js');
@@include('_more_products.js');