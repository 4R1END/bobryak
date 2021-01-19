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

const btnOpenForm = document.querySelector(`.btn-open-form`);

btnOpenForm.addEventListener(`click`, popupOpen);