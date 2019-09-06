/* eslint no-console: 0 */ // --> OFF
// const config = require('./');
// const chalk = require('chalk');
// add 2 numbers together
function add(a, b, floored) {
	if (!floored) {
		floored = false;
	}
	//check to see if the 'floored' arg is a boolean
	if (typeof floored == 'boolean') {
		//if floored is true
		if (floored) {
			if (typeof a == 'number' & typeof b == 'number') {
				// add the numbers together and floor the result
				return Math.floor(a + b);
			} else {
				//if the given args (first 2) are not numbers warn the user
				console.warn('%c The Given Arguments For add() Are Not Numbers', 'color:rgba(255,0,0);');

			}
		} else {
			// if floored is false
			if (typeof a == 'number' & typeof b == 'number') {
				//add the numbers not floored
				return a + b;
			} else {
				// console.warn('%c The First 2 Given Arguments For add() Are Not Numbers', 'color:rgba(255,0,0);');
				console.warn(chalk.red('The First 2 Given Arguments For add() Are Not Numbers'));
				
			}

		}
	}
}

function Tan(n) {
	return Math.tan(n);
}

function Atan(n) {
	return Math.atan(n);
}

function Cos(n) {
	return Math.cos(n);
}
function Sin(n) {
	return Math.sin(n);
}
function Sqrt(n) {
	return Math.sqrt(n);
}
function Max(n) {
	return Math.max(n);
}
function Min(n) {
	return Math.min(n);
}

function Log(n) {
	return Math.log(n);
}
function modulo(a, b) {
	//check the args are numbers
	if (typeof a == 'number' & typeof b == 'number') {
		// modulo the given numbers
		return a % b;
	} else {
		//if the given args are not numbers then warn the user
		console.warn('%c The Given Arguments For modulo() Are Not Numbers', 'color:rgba(255,0,0);');

	}

}
// floor the given value
function Floor(n) {
	//check that the args are numbers
	if (typeof n == 'number') {
		return Math.floor(n);
	} else {
		//if the args are not numbers warn the user
		console.warn('%c The Given Arguments For Floor() Are Not Numbers', 'color:rgba(255,0,0);');
	}
}
//function to make a 2d array
// NOTE: There are currently no tests for this function
function make2DArray(cols, rows) {
	var arr = new Array(cols);
	for (var i = 0; i < arr.length; i++) {
		arr[i] = new Array(rows);
	}
	return arr;
}

function Mult(n1, n2, floored) {
	if (!floored) {
		floored = false;
	}
	// floor the result of mult
	if (floored) {
		//check if the given args are numbers
		if (typeof n1 == 'number' && typeof n2 == 'number') {
			return Math.floor(n1 * n2);
		} else {
			// warn the user if the given args are not numbers
			console.warn('%c The Given Arguments For Mult() Are Not Numbers', 'color:rgba(255,0,0);');
		}
	}
	// don't floor the result of mult
	if (!floored) {
		//check that the given args (first 2) are numbers
		if (typeof n1 == 'number' && typeof n2 == 'number') {
			// mult the given numbers
			return n1 * n2;
		} else {
			// if the args are not numbers then warn the user
			console.warn('%c The Given Arguments For Mult() Are Not Numbers', 'color:rgba(255,0,0);');
		}

	}
}



// little trick to use 'module' in client side
if (typeof module !== 'undefined') {
	module.exports = {
		modulo: modulo,
		add: add,
		Floor: Floor,
		Mult: Mult,
		make2DArray: make2DArray,
		Cos: Cos,
		Sin: Sin,
		Atan: Atan,
		Tan: Tan,
		Sqrt: Sqrt,
		Max: Max,
		Min: Min,
		Log: Log
	};

}
