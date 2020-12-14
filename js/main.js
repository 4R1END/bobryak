

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
