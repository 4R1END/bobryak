
const moreProductsBtn = document.querySelector(`.btn--more-js`); //кнопка развернуть 
const moreproductsBlock = document.querySelectorAll(`.tabs__block--more`); //скрыте блоки скарточками товаров

// переключение по категориям каталога
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
	// обработчик клика по иконкам категорий в каталоге
	const tabsHandler = (path) => {
		tabsBlock.forEach(el => {
			el.classList.remove(`tabs__block--active`);
		});
		moreproductsBlock.forEach(el => {
			el.classList.remove(`active`);
		});
		document.querySelector(`[data-tabs-target="${path}"]`).classList.add(`tabs__block--active`);
	}
});

// клик по кнопке развернуть
moreProductsBtn.onclick = () => {
	moreproductsBlock.forEach(el => {
		el.classList.add(`active`);
	});
};