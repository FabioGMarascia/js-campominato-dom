const container = document.querySelector(`.box`);
const play_button = document.querySelector(`#btn`);
const select_value = document.querySelector(`.form-select`);
let a, b, c;
console.log(a);

select_value.value = `SELECT GAME MODE`;

play_button.addEventListener(`click`, function () {
	container.innerHTML = " ";

	if (select_value.value == 1) {
		gridGenerator(101);
	} else if (select_value.value == 2) {
		gridGenerator(82);
	} else if (select_value.value == 3) {
		gridGenerator(50);
	} else {
		select_value.value = `SELECT GAME MODE`;
		location.reload();
	}
});
