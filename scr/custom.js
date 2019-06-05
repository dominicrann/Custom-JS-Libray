/* eslint no-console: 0 */  // --> OFF

function add(a, b) {
	if (typeof a == 'number' & typeof b == 'number') {
		return a + b;
	} else {
		console.warn('The Given Arguments For add() Are Not Numbers');

	}
}

function modulo(a, b) {
	if (typeof a == 'number' & typeof b == 'number') {
		return a % b;
	} else {
		console.warn('The Given Arguments For modulo() Are Not Numbers');

	}

}

function consoleLog(t) {
	console.log(t);
}

function consoleTable(table) {
	console.table(table);
}

if (typeof module !== 'undefined') {
	module.exports = {
		modulo: modulo,
		consoleTable: consoleTable,
		consoleLog: consoleLog,
		add: add


	};

}