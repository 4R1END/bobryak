const popupContainer = document.querySelector(`.popup-container`);
const body = document.body;

const diableScroll = () => {
	let pagePosition = window.scrollY;
	body.classList.add(`scroll-disable`);
	body.dataset.position = pagePosition;
	body.style.top = -pagePosition + 'px';
};

const enableScroll = () => {
	let pagePosition = parseInt(body.dataset.position, 10);
	body.style.top = 'auto';
	body.classList.remove(`scroll-disable`);
	window.scroll({top: pagePosition, left: 0});
	body.removeAttribute(`data-position`);
};

const popupOpen = () => {	
	popupContainer.classList.add(`active`);	
	// diableScroll();
};

popupContainer.addEventListener(`click`, (e) => {
	if (e.target.classList.contains(`popup__close`)) {
		popupContainer.classList.remove(`active`);
	};
	if (e.target.classList.contains(`popup-container`)) {
		popupContainer.classList.remove(`active`);
	};
	// enableScroll();
});;

const deliveryMethods = document.querySelectorAll(`.delivery-method`);
const deliverySelfContent = document.querySelector(`.info__by-self-content`);
const deliveryCourierContent = document.querySelector(`.info__by-courier-content`);
const newAdressRadio = document.querySelector(`.info__new-adress-radio input`);
const newAdressInput = document.querySelector(`.info__new-adress-input`);
const timeCell = document.querySelectorAll(`.time-js`);
const dateCell = document.querySelectorAll(`.date-js`);
const productsList = document.querySelector(`.simplebar-content`);
const btnProductDelete = document.querySelectorAll(`.sidebar__btn-delete-product`);
const btnNextStep = document.querySelector(`.info__btn-next`);
const btnMapSeen = document.querySelector(`.delivery-method__link`);
const calendar = document.querySelector(`.calendar`);



newAdressRadio.addEventListener(`click`, () => {
	if (newAdressRadio.checked) {
		newAdressInput.classList.add(`active`);
	} else {
		newAdressInput.classList.remove(`active`);
	}
});

const changeCell = (element) => {
	element.forEach(el => {
		el.addEventListener(`click`, () => {
			element.forEach(elem => {
				elem.classList.remove(`active`);
			});
			el.classList.add(`active`);
		});
	});
};

const toggleTabsMethod = () => {
	deliveryMethods.forEach(el => {
		el.addEventListener(`click`, () => {
			if(el.hasAttribute(`data-by-self`)) {
				deliverySelfContent.classList.remove(`active`);
				deliveryCourierContent.classList.remove(`active`);
				deliverySelfContent.classList.add(`active`);
			};
			if(el.hasAttribute(`data-by-courier`)) {
				deliverySelfContent.classList.remove(`active`);
				deliveryCourierContent.classList.remove(`active`);
				deliveryCourierContent.classList.add(`active`);
			};
			if (el.classList.contains(`active`)) {
				btnNextStep.classList.remove(`btn--disable`);
				btnNextStep.classList.add(`btn--primary`);
			};
		});
	});
};

changeCell(deliveryMethods);
changeCell(timeCell);
changeCell(dateCell);
toggleTabsMethod();

btnProductDelete.forEach(el => {
	console.log(el.closest(`.product-js`));
	el.addEventListener(`click`, () => {
		el.closest(`.product-js`).remove();
		let produts = document.querySelectorAll(`.product-js`);
		if(produts.length === 0) {
			document.querySelector(`.simplebar-content`).insertAdjacentHTML(`afterbegin`, `
				<h3 class="order-list-empty">Список пуст</h3>
			`);
		};
	});
});

document.addEventListener(`click`, (e) => {
	if (e.target.classList.contains(`delivery-method__btn-map`)) {
		popupContainer.classList.add(`active`);
	}
});

