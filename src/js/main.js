@@include('_tabs.js');
@@include('_card.js');


const cosmeticsBlock = document.querySelector(`.tabs__block[data-tabs-target="cosmetics"]`)
const cardsCosmetics = cosmeticsBlock.querySelectorAll(`.card`);
const honeyBlock = document.querySelector(`.tabs__block[data-tabs-target="honey"]`)
const cardsHoney = honeyBlock.querySelectorAll(`.card`);
const teaBlock = document.querySelector(`.tabs__block[data-tabs-target="tea"]`)
const cardsTea = teaBlock.querySelectorAll(`.card`);
const jamBlock = document.querySelector(`.tabs__block[data-tabs-target="jam"]`)
const cardsJam = jamBlock.querySelectorAll(`.card`);

const setDataRoundPer4 = (el, i) => {
	if (i <= 3) {
		el.setAttribute(`data-round`, `0`);
	};
	if (i > 3 && i < 8) {
		el.setAttribute(`data-round`, `1`);
	};
	if (i > 7 && i < 12) {
		el.setAttribute(`data-round`, `2`);
	};
	if (i > 11 && i < 16) {
		el.setAttribute(`data-round`, `3`);
	};
};

cardsCosmetics.forEach((el,i) => {
	setDataRoundPer4(el, i)
});
cardsHoney.forEach((el,i) => {
	setDataRoundPer4(el, i)
});
cardsTea.forEach((el,i) => {
	setDataRoundPer4(el, i)
});
cardsJam.forEach((el,i) => {
	setDataRoundPer4(el, i)
});



@@include('_more_products.js');
