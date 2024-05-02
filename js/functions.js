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
		// MILESTONE #4: YOU LOSE

		if (gameOver) {
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
					alert(`BOMBAAAAAAAAA ! Punteggio: ${score}`);
					gameOver = false;
				}
				i++;
			}
			score_box.innerHTML = `<p>SCORE : ${score}</p>`;
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
