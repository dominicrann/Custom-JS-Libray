/* eslint no-undef: 0 */  // --> OFF


const { add, modulo, Floor, Mult, Sin, Cos, Min, Max, Tan, Atan, Sqrt, Log } = require('../src/math.js');

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

test('Sin of 190 == 0.9977992786806003', () => {
	expect(Sin(190)).toBe(0.9977992786806003);
});


test('Cos of 190 == 0.06630685835171127', () => {
	expect(Cos(190)).toBe(0.06630685835171127);
});

test('Atan of 190 == 1.5655332174973013', () => {
	expect(Atan(190)).toBe(1.5655332174973013);
});

test('Tan of 190 == 15.048206226088658', () => {
	expect(Tan(190)).toBe(15.048206226088658);
});

test('Sqrt of 190 == 13.784048752090222', () => {
	expect(Sqrt(190)).toBe(13.784048752090222);
});

test('Max of 190 == 190', () => {
	expect(Max(190)).toBe(190);
});

test('Log of 10 == 2.302585092994046', () => {
	expect(Log(10)).toBe(2.302585092994046);
});

test('Sqrt of 190 == 190', () => {
	expect(Min(190)).toBe(190);
});
