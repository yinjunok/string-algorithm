import sum from './sum'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('add two number', () => {
  expect(sum(5, 10)).toBe(15)
})