function createClickableSquare(number) {
	let element = document.createElement(`div`);

	if (select_value.value == 1) {
		element.classList.add("square-easy");
	} else if (select_value.value == 2) {
		element.classList.add("square-medium");
	} else if (select_value.value == 3) {
		element.classList.add("square-hard");
	}

	element.addEventListener(`click`, function () {
		// MILESTONE #2: CONTROLLARE LE CELLE
		// MILESTONE #3: GESTIRE IL PUNTEGGIO 2/2
		// MILESTONE #4: YOU LOSE
		// MILESTONE #5: YOU WIN
		// BONUS #1 / RECORD

		if (gameOver && element.innerText != number) {
			element.classList.add(`bg-white`);
			element.innerText = number;
			score++;
			let i = 0;
			while (i < bombs_array.length && gameOver) {
				let x = bombs_array[i];

				if (x == number) {
					element.classList.remove(`bg-white`);
					element.classList.add(`bg-warning`);
					score--;
					alert(`BOMBAAAAAAAAA !! Punteggio: ${score}`);
					gameOver = false;
				}
				i++;
			}
			score_box.innerHTML = `<p class="fw-bold fs-2">SCORE : ${score}</p>`;
			if (score > record) {
				record = score;
			}
			record_box.innerHTML = `<p class="fw-bold fs-2">RECORD : ${record}</p>`;
		}
		if (select_value.value == 1 && score == 84) {
			console.log(score);
			alert(`VITTORIAAAAAAAAA !! Punteggio: ${score}`);
			gameOver = false;
		} else if (select_value.value == 2 && score == 65) {
			console.log(score);
			alert(`VITTORIAAAAAAAAA !! Punteggio: ${score}`);
			gameOver = false;
		} else if (select_value.value == 3 && score == 33) {
			console.log(score);
			alert(`VITTORIAAAAAAAAA !! Punteggio: ${score}`);
			gameOver = false;
		}
	});

	return element;
}

function gridGenerator(nCelle) {
	for (let i = 1; i < nCelle; i++) {
		let square = createClickableSquare(i);
		container.append(square);
	}
}

function reset() {
	container.innerHTML = " ";
	score_box.innerHTML = `<p class="fw-bold fs-2">SCORE : 0</p>`;
	gameOver = true;
	score = 0;
}
