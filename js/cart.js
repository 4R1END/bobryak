const btnDown = document.querySelectorAll(`.quantity-block__btn-down`); // кнопка убавить количество товара в карточке
const btnUp = document.querySelectorAll(`.quantity-block__btn-up`); // кнопка прибавить количество товара в карточке
const price = document.querySelectorAll(`.card__price`);
const btnAddToCart = document.querySelectorAll(`.card__btn-basket`);

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

const generateCartProducts = (img, title, price, quantity) => {
	return `
		<tr class="product">
			<td class="product__name">
				<img src="${img}" alt="Балхам">
				<div class="product__options">
					<h3 class="product__title">
						${title}
					</h3>
					<div class="product__weight weight-checkbox">
						<label class="weight-checkbox__weight-light">
							<input type="radio" name="weight_balham" value="150">
							<span>150 гр</span>
						</label>
						<label class="weight-checkbox__weight-middle">
							<input type="radio" name="weight_balham" value="200">
							<span>200 гр</span>
						</label>
						<label class="weight-checkbox__weight-big">
							<input type="radio" name="weight_balham" value="250">
							<span>250 гр</span>
						</label>
					</div>
				</div>
			</td>
			<td class="product__price" data-150="1350" data-200="1570" data-250="1800">
				${price} ₽
			</td>
			<td class="product__quantity">
				<div class="product__quantity-block quantity-block">
					<button class="quantity-block__btn-down">
						-
					</button>
					<span>${quantity}</span>
					<button class="quantity-block__btn-up">
						+
					</button>
				</div>
			</td>
			<td class="product__sum">
				1350 ₽
			</td>
			<td class="product__delete">
				<button class="btn-remove-product-js">
					<img src="img/icons/close.svg" alt="удалить">
				</button>
			</td>
		</tr>	
	`
};

const updateStorage = (parent) => {
	let html = parent.innerHTML;
	localStorage.setItem(`products`, html)
}

let productsWrapper = document.createElement(`table`);
productsWrapper.className = 'products-wrapper';
let productsWrapperBody = document.createElement(`tbody`);
productsWrapperBody.className = 'tbody';
productsWrapper.insertAdjacentElement(`afterbegin`, productsWrapperBody);

btnAddToCart.forEach(el => {
	el.addEventListener(`click`, (e) => {
		let self = e.currentTarget;
		let parent = self.closest(`.card`);
		let img = parent.querySelector(`.card__image-main`).getAttribute(`src`);
		let title = parent.querySelector(`.card__title`).textContent;
		let price = parseInt(parent.querySelector(`.card__price`).textContent);
		let quantity = parent.querySelector(`.card__quantity-block span`).textContent;
		
		productsWrapper.querySelector(`tbody`).insertAdjacentHTML("beforeEnd", generateCartProducts(img, title, price, quantity));
		updateStorage(productsWrapper.querySelector(`tbody`));		
	});
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
		const productQuantity = parseInt( productQuantityBlock.querySelector(`span`).textContent );
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

	btnDeleteProduct.addEventListener(`click`, () => {
		el.remove();
		let countProducts = document.querySelectorAll(`.product`).length;
		if (countProducts === 0) {
			tableHead.classList.add(`hide`);
			tableBody.classList.add(`empty`);
			tableBody.append(`Корзина пуста`);
			generalSum.innerText = `0 ₽`;
			btnOrder.disabled = true;
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