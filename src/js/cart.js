@@include('_card.js');
@@include('_tabs.js');

const product = document.querySelectorAll(`.product`);
const table = document.querySelector(`.cart__products-list`);
const tableHead = document.querySelector(`.thead`);
const tableBody = document.querySelector(`.tbody`);
const generalSum = document.querySelector(`.sidebar__sum`);
const promoCheckbox = document.querySelector(`.promo-checkbox`);
const promoInput = document.querySelector(`.sidebar__input`);
const btnClearPromoInput = document.querySelector(`.clear-input`);
const btnOrder = document.querySelector(`.sidebar__btn-order`);


// const renderCart = () => {
// 	if (localStorage.getItem(`products`)) {
// 		tableBody.innerHTML = localStorage.getItem(`products`);
// 	};
// };

// renderCart();

product.forEach(el => {	
	const productQuantityBlock = el.querySelector(`.product__quantity`);	
	const productSum = el.querySelector(`.product__sum`);
	const btnCountUp = el.querySelector(`.quantity-block__btn-up`);
	const btnCountDown = el.querySelector(`.quantity-block__btn-down`);
	const btnDeleteProduct = el.querySelector(`.btn-remove-product-js`);
	const productPriceBlock = el.querySelector(`.product__price`);
	const weightCheckboxBlock = el.querySelector(`.product__weight`);
	const weight150 = el.querySelector(`input[value="150"]`);
	const weight200 = el.querySelector(`input[value="200"]`);
	const weight250 = el.querySelector(`input[value="250"]`);

	const weightHandler = () => {
		if (weight150.checked) {
			productPriceBlock.innerText = `${productPriceBlock.dataset[150]} ₽`
		};
	
		if (weight200.checked) {
			productPriceBlock.innerText = `${productPriceBlock.dataset[200]} ₽`
		};
	
		if (weight250.checked) {
			productPriceBlock.innerText = `${productPriceBlock.dataset[250]} ₽`
		};
	};

	const counterHandler = () => {
		const productPrice = parseInt( el.querySelector(`.product__price`).textContent );
		const productQuantity = parseInt( productQuantityBlock.querySelector(`input`).value );
		const productNumeralSum = productPrice * productQuantity;
		productSum.innerText = `${productNumeralSum} ₽`;
		const allProductSum = document.querySelectorAll(`.product__sum`);
		let generalSumNumeral = 0;
		allProductSum.forEach(elem => {			
			generalSumNumeral = generalSumNumeral + parseInt(elem.textContent);
			generalSum.innerText = `${generalSumNumeral} ₽`;
		});		
	};

	window.addEventListener(`DOMContentLoaded`, () => {
		weightHandler(); 
		counterHandler();
	});
	weightCheckboxBlock.addEventListener(`click`, () => {
		weightHandler(); 
		counterHandler();
	});
	
	btnCountUp.addEventListener(`click`, counterHandler);	
	btnCountDown.addEventListener(`click`, counterHandler);
	productQuantityBlock.querySelector(`input`).addEventListener(`change`, counterHandler)	

	btnDeleteProduct.addEventListener(`click`, () => {
		el.remove();
		let countProducts = document.querySelectorAll(`.product`).length;
		if (countProducts === 0) {
			tableHead.classList.add(`hide`);
			tableBody.classList.add(`empty`);
			tableBody.insertAdjacentHTML(`afterbegin`, `<span>Корзина пуста</span>`);
			generalSum.innerText = `0 ₽`;
			btnOrder.classList.remove(`btn--primary`);
			btnOrder.classList.add(`btn--disable`);
		} else {
			tableHead.classList.remove(`hide`);
			tableBody.classList.remove(`empty`);
			tableBody.querySelector(`span`).remove();
			btnOrder.classList.add(`btn--primary`);
			btnOrder.classList.remove(`btn--disable`);
		};
		counterHandler();
		let productsList = document.querySelector(`.tbody`);
		updateStorage(productsList);
	});	
});

document.querySelector(`.sidebar__label-checkbox`).addEventListener(`click`, () => {
	if(promoCheckbox.checked) {
		promoInput.classList.add(`active`);
		btnClearPromoInput.classList.add(`active`);
	} else {
		promoInput.classList.remove(`active`);
		btnClearPromoInput.classList.remove(`active`);
	}
});

btnClearPromoInput.addEventListener(`click`, () => {
	promoInput.value = ``;
});

btnOrder.addEventListener(`click`, () => {
});