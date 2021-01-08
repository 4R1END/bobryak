const deliveryMethod = document.querySelectorAll(`.delivery-method`)
const newAdressRadio = document.querySelector(`.info__new-adress-radio input`);
const newAdressInput = document.querySelector(`.info__new-adress-input`);
const timeCell = document.querySelectorAll(`.time-js`);
const dateCell = document.querySelectorAll(`.date-js`);
const productsList = document.querySelector(`.simplebar-content`);
const btnProductDelete = document.querySelectorAll(`.order-item__close`);


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

changeCell(deliveryMethod);
changeCell(timeCell);
changeCell(dateCell);


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
})