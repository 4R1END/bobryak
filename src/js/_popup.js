const popupContainer = document.querySelector(`.popup-container`);
const body = document.body;

const diableScroll = () => {
	let pagePosition = window.scrollY;
	body.classList.add(`scroll-disable`);
	body.dataset.position = pagePosition;
	body.style.top
};

const enableScroll = () => {
	body.classList.remove(`scroll-disable`);
};

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
});