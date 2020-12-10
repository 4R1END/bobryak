const moreProductsBtn = document.querySelector(`.btn--more-js`); //кнопка развернуть 
const moreProductsBlock = document.querySelectorAll(`.block-more-js`); //скрыте блоки скарточками товаров


// клик по кнопке развернуть
moreProductsBtn.onclick = () => {
	moreProductsBlock.forEach(el => {
		el.classList.add(`active`);
	});
};