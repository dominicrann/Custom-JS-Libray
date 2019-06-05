const { add, modulo } = require('./custom');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('1 modulo 3 is 1', () => {
    expect(modulo(1, 3)).toBe(1);
});