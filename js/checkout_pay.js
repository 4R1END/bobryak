const checkoutBtn = document.querySelector(`.info__btn-checkout`);
const payMethodsLabel = document.querySelectorAll(`.custom-radio`);
const payMethods = document.querySelectorAll(`.paymethod`);

payMethods.forEach(el => {	
	el.addEventListener(`click`, () => {
		if(el.checked) {
			checkoutBtn.classList.remove(`btn--disable`);
			checkoutBtn.classList.add(`btn--primary`);
		};
	});	
});
