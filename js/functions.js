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
		element.innerText = number;
		// MILESTONE #2: CONTROLLARE LE CELLE
		let i = 0;
		let found = true;
		element.classList.add(`bg-white`);

		while (i < bombs_array.length && found) {
			let x = bombs_array[i];

			if (x == number) {
				element.classList.remove(`bg-white`);
				element.classList.add(`bg-warning`);
				found = false;
			}
			i++;
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
