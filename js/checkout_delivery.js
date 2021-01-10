const popupContainer = document.querySelector(`.popup-container`);

const popupOpen = (elem) => {
	elem.addEventListener(`click`, () => {
		popupContainer.classList.add(`active`);
	});
};

popupContainer.addEventListener(`click`, (e) => {
	if (e.target.classList.contains(`popup__close`)) {
		popupContainer.classList.remove(`active`);
	};
	if (e.target.classList.contains(`popup-container`)) {
		popupContainer.classList.remove(`active`);
	};
});;

const deliveryMethods = document.querySelectorAll(`.delivery-method`);
const deliverySelfContent = document.querySelector(`.info__by-self-content`);
const deliveryCourierContent = document.querySelector(`.info__by-courier-content`);
const newAdressRadio = document.querySelector(`.info__new-adress-radio input`);
const newAdressInput = document.querySelector(`.info__new-adress-input`);
const timeCell = document.querySelectorAll(`.time-js`);
const dateCell = document.querySelectorAll(`.date-js`);
const productsList = document.querySelector(`.simplebar-content`);
const btnProductDelete = document.querySelectorAll(`.order-item__close`);
const btnNextStep = document.querySelector(`.info__btn-next`);
const btnMapSeen = document.querySelector(`.delivery-method__link`);




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
	el.addEventListener(`click`, () => {
		el.closest(`.order-item`).remove();
		let produts = document.querySelectorAll(`.sidebar__order-item`);
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