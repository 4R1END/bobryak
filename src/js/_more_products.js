const moreProductsBtn = document.querySelector(`.btn--more-js`); //кнопка развернуть 

const cardsShow = document.querySelectorAll(`.card[data-round="0"]`);
const cardsFirstRound = document.querySelectorAll(`.card[data-round="1"]`);
const cardsSecondRound = document.querySelectorAll(`.card[data-round="2"]`);


cardsShow.forEach(el => {
	el.classList.add(`active`);
});
// клик по кнопке развернуть
moreProductsBtn.addEventListener(`click`, () => {
	
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
});