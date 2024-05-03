const container = document.querySelector(`.box`);
const play_button = document.querySelector(`#btn`);
const select_value = document.querySelector(`.form-select`);
let gameOver = true;
let score = 0;
let record = 0;

select_value.value = `SELECT GAME MODE`;

play_button.addEventListener(`click`, function () {
	// RESET
	reset();

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
}

// MILESTONE #3: GESTIRE IL PUNTEGGIO
const score_box = document.querySelector(`.score`);
const record_box = document.querySelector(`.record`);
record_box.innerHTML = `<p class="fw-bold fs-2">RECORD : 0</p>`;
score_box.innerHTML = `<p class="fw-bold fs-2">SCORE : 0</p>`;
