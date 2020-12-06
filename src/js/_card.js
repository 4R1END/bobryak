const btnDown = document.querySelectorAll(`.card__btn-quantity-down`); // кнопка убавить количество товара в карточке
const btnUp = document.querySelectorAll(`.card__btn-quantity-up`); // кнопка прибавить количество товара в карточке

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
