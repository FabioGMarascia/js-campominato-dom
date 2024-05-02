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
		if (element.innerText == number) {
			element.innerText = " ";
		} else {
			element.innerText = number;
		}

		element.classList.toggle(`bg-warning`);
	});

	return element;
}

function gridGenerator(nCelle) {
	for (let i = 1; i < nCelle; i++) {
		let square = createClickableSquare(i);
		container.append(square);
	}
}
