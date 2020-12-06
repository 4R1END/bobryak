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
;
const rangeSlider = document.getElementById(`range-slider`);

if(rangeSlider) {
	noUiSlider.create(rangeSlider, {
    start: [100, 10000],
		connect: true,
		step: 1,
    range: {
        'min': [100],
        'max': [10000]
    }
});
}

const inputMin = document.getElementById(`input-min`);
const inputMax = document.getElementById(`input-max`);
const inputsArray = [inputMin, inputMax];

rangeSlider.noUiSlider.on(`update`, function(values, handle) {
	inputsArray[handle].value = Math.round(values[handle]);
});;
const defaultSelect = () => {
	const element = document.querySelector('.js-choice');
	const choices = new Choices(element, {
		searchEnabled: false
	});
};

defaultSelect();;
const elem = document.querySelector('.grid');
const iso = new Isotope( elem, {
  // options
  itemSelector: '.card',
  layoutMode: 'masonry'
});



function getCheckedCheckBoxes() {
  const selectedCheckBoxes = document.querySelectorAll('.filters__checkbox:checked');

  let checkedValues = Array.from(selectedCheckBoxes).map(cb => cb.value);

  console.log(checkedValues);

  return checkedValues; 
};

const btnApplyFilters = document.querySelector(`.filters__btn--apply`);

btnApplyFilters.addEventListener(`click`, getCheckedCheckBoxes);
;

const filtersTitle = document.querySelectorAll(`.filters__title`);

filtersTitle.forEach(el => {
	el.addEventListener(`click`, function() {
		el.classList.toggle(`active`);
		el.nextElementSibling.classList.toggle(`active`);
	});
});

