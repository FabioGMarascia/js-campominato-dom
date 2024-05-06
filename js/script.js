const container = document.querySelector(`.box`);
const play_button = document.querySelector(`#btn`);
const select_value = document.querySelector(`.form-select`);
let gameOver = true;
let score = 0;
let record = 0;
let bombs_array = [];
let prev_select = select_value.value;
let record_stored = [0, 0, 0];

select_value.value = `SELECT GAME MODE`;

play_button.addEventListener(`click`, function () {
	// RESET
	reset();
	// MILESTONE #1: GENERARE LE BOME

	while (bombs_array.length < 16) {
		let casual_bomb = Math.floor(Math.random() * 100 + 1);
		if (!bombs_array.includes(casual_bomb)) {
			bombs_array.push(casual_bomb);
		}
	}

	if (select_value.value == 1) {
		if (prev_select != 1) {
			prev_select = 1;
			record = record_stored[select_value.value - 1];
			record_box.innerHTML = `<p class="fw-bold fs-2">RECORD : ${record}</p>`;
		}

		gridGenerator(101);
	} else if (select_value.value == 2) {
		if (prev_select != 2) {
			prev_select = 2;
			record = record_stored[select_value.value - 1];
			record_box.innerHTML = `<p class="fw-bold fs-2">RECORD : ${record}</p>`;
		}
		gridGenerator(82);
	} else if (select_value.value == 3) {
		if (prev_select != 3) {
			prev_select = 3;
			record = record_stored[select_value.value - 1];
			record_box.innerHTML = `<p class="fw-bold fs-2">RECORD : ${record}</p>`;
		}
		gridGenerator(50);
	} else {
		select_value.value = `SELECT GAME MODE`;
		location.reload();
	}
});

// MILESTONE #3: GESTIRE IL PUNTEGGIO 1/2 / RECORD
const score_box = document.querySelector(`.score`);
const record_box = document.querySelector(`.record`);
score_box.innerHTML = `<p class="fw-bold fs-2">SCORE : ${score}</p>`;
record_box.innerHTML = `<p class="fw-bold fs-2">RECORD : ${record}</p>`;
