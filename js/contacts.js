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

const btnOpenForm = document.querySelector(`.btn-open-form`);

popupOpen(btnOpenForm);