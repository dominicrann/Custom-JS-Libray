/* eslint no-undef: 0 */  // --> OFF


const { add, modulo, Floor, Mult } = require('../src/math.js');

test('adds 1 + 2 to equal 3', () => {
	expect(add(1, 2)).toBe(3);
});

test('1 modulo 3 is 1', () => {
	expect(modulo(1, 3)).toBe(1);
});


test('1.01910 should be 1', () => {
	expect(Floor(1.01910)).toBe(1);
});

test('adds 1.0910 + 2 to equal 3 (floored)', () => {
	expect(add(1.0910, 2, true)).toBe(3);
});

test('5 * 2 == 10', () => {
	expect(Mult(5, 2)).toBe(10);
});


test('5.19101 * 2 == 10 (floored)', () => {
	expect(Mult(5.19101, 2, true)).toBe(10);
});

test('5.19101 * 2 == 10.38202 (not floored)', () => {
	expect(Mult(5.19101, 2)).toBe(10.38202);
});
