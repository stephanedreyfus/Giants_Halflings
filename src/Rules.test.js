import Rules from './Rules';

it('sums halfling dice', () => {
  expect(Rules.sum([3, 4]).toEqual(7));
});

// Following test case covers future game play change of more than
// two dice for halfling rolls.
it('sums halfling dice', () => {
  expect(Rules.sum([2, 1, 5]).toEqual(8));
});

it('returns loss on > 10', () => {
  expect(Rules.evalResults([6, 5], 5, 20)).toEqual(-1);
});

it('returns loss on "kick"', () => {
  expect(Rules.evalResults([3, 2], 1, 20)).toEqual(-1);
});

it('returns push on "snake"', () => {
  expect(Rules.evalResults([1, 1], 7, 30)).toEqual(0);
});

// it('works for fours', () => {
//   expect(Rules.evalResults([4, 4, 2, 2, 2])).toEqual(8);
// });

// it('works for fives', () => {
//   expect(Rules.evalResults([3, 5, 2, 2, 2])).toEqual(5);
// });

// it('works for sixes', () => {
//   expect(Rules.evalResults([6, 2, 1, 3, 4])).toEqual(6);
// });