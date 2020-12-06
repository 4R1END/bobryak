const teamBtn = document.querySelectorAll(`.navigation__btn--team-js`);
const missionBtn = document.querySelectorAll(`.navigation__btn--mission-js`);

const teamBlock = document.querySelector(`.team`);
const missionBlock = document.querySelector(`.mission`);

missionBtn.forEach(el => {
	el.addEventListener(`click`, function () {
			if (missionBlock.classList.contains(`hide`)) {
				missionBlock.classList.remove(`hide`);
				teamBlock.classList.add(`hide`);
			}
		});
})

teamBtn.forEach(el => {
	el.addEventListener(`click`, function () {
			if (teamBlock.classList.contains(`hide`)) {
				teamBlock.classList.remove(`hide`);
				missionBlock.classList.add(`hide`);
			}
		});
})
