import reverseInt from '../src/solution';

test('reverseInt', () => {
  expect(reverseInt(12)).toBe(21);
  expect(reverseInt(-122)).toBe(-221);
});
