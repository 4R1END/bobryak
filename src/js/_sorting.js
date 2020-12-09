const sortSelect = document.getElementById(`sortselect`);
const dataPrice = 'price';

const getSelectValue = () => {
	return sortSelect.value;
};

const insertAfter = (elem, refElem) => {
	return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
};

const sortToUp = (dataValue) => {
	for (let i = 0; i < catalogCards.children.length; i++) {
		for (let j = i; j	< catalogCards.children.length; j++) {
			if (+catalogCards.children[i].dataset[dataValue] > +catalogCards.children[j].dataset[dataValue]) {
				replacedNode = catalogCards.replaceChild(catalogCards.children[j], catalogCards.children[i]);
				insertAfter(replacedNode, catalogCards.children[i]);
			};		
		};
	};
};

const sortToDown = (dataValue) => {
		for (let i = 0; i < catalogCards.children.length; i++) {
			for (let j = i; j	< catalogCards.children.length; j++) {
				if (+catalogCards.children[i].dataset[dataValue] < +catalogCards.children[j].dataset[dataValue]) {
					replacedNode = catalogCards.replaceChild(catalogCards.children[j], catalogCards.children[i]);
					insertAfter(replacedNode, catalogCards.children[i]);
				};		
			};
		};
	};

const sort = (selectValue) => {
	if (selectValue === 'price-up') {
		sortToUp('price');
	};	

	if (selectValue === 'price-down') {
		sortToDown('price')
	};
	
	if (selectValue === 'new') {
		sortToDown('new');
	};	

	if (selectValue === 'popular') {
		sortToDown('popular');
	};

	if (selectValue === 'sale') {
		sortToDown('sale');
	};
};

sortSelect.addEventListener(`change`, () => {
	sort(getSelectValue());
});







