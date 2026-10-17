const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('divide 20 / 5 to equal 4', () => {
  expect(calculator.divide(20, 5)).toBe(4);
});

test('divide 8 / 16 to equal 0.5', () => {
  expect(calculator.divide(8, 16)).toBe(0.5);
});

test('multiply 8 * 2 to equal 16', () => {
  expect(calculator.multiply(8, 2)).toBe(16);
});

test('multiply 6 * 0 to equal 9', () => {
  expect(calculator.multiply(6, 0)).toBe(0);
});

