const container = document.querySelector(`.box`);
const play_button = document.querySelector(`#btn`);
const select_value = document.querySelector(`.form-select`);

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

// MILESTONE #1: GENERARE LE BOME
let bombs_array = [];

while (bombs_array.length < 16) {
	let casual_bomb = Math.floor(Math.random() * 100 + 1);
	if (!bombs_array.includes(casual_bomb)) {
		bombs_array.push(casual_bomb);
	}
	console.log(casual_bomb);
	console.log(bombs_array);
}

// MILESTONE #2: CONTROLLARE LE CELLE
