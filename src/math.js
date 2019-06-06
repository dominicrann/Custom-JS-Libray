/* eslint no-console: 0 */  // --> OFF

function add(a, b, floored) {
	if (floored) {
		if (typeof a == 'number' & typeof b == 'number') {
			return Math.floor(a + b);
		} else {
			console.warn('The Given Arguments For add() Are Not Numbers');

		}
	} else {
		if (typeof a == 'number' & typeof b == 'number') {
			return a + b;
		} else {
			console.warn('The Given Arguments For add() Are Not Numbers');

		}

	}
}

function modulo(a, b) {
	if (typeof a == 'number' & typeof b == 'number') {
		return a % b;
	} else {
		console.warn('The Given Arguments For modulo() Are Not Numbers');

	}

}

if (typeof module !== 'undefined') {
	module.exports = {
		modulo: modulo,
		add: add


	};

}