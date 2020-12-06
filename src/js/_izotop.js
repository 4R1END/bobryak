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
