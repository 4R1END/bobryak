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
});

const setRangeValue = (i, value) => {
	let arr = [null, null];
	arr[i] = value;
	rangeSlider.noUiSlider.set(arr)
};

inputsArray.forEach((el, i) => {
	el.addEventListener(`change`, (e) => {
		setRangeValue(i, e.currentTarget.value);
	});
});