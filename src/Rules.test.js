import { rules, score } from './Rules';

console.log("What is rules.sum", Array.isArray(rules.sum), "@@@@@@@@@@@@@@@@@@@@@@@")
console.log("What is score.evalResults", Array.isArray(score.evalResults), "@@@@@@@@@@@@@@@@@@@@@@@")

it('sums halfling dice', () => {
  expect(sum([3, 4]).toEqual(7));
});

// Following test case covers future game play change of more than
// two dice for halfling rolls.
it('sums halfling dice', () => {
  expect(sum([2, 1, 5]).toEqual(8));
});

it('returns loss on > 10', () => {
  expect(evalResults([6, 5], 5, 20)).toEqual(-1);
});

it('returns loss on "kick"', () => {
  expect(evalResults([3, 2], 1, 20)).toEqual(-1);
});

it('returns push on "snake"', () => {
  expect(evalResults([1, 1], 7, 30)).toEqual(0);
});

it('returns 5:1 reward', () => {
  expect(evalResults([5, 5], 10, 10)).toEqual(60);
});

it('returns 3:1 reward', () => {
  expect(evalResults([3, 5], 8, 100)).toEqual(400);
});

it('returns 2:1 reward', () => {
  expect(evalResults([3, 4], 6, 4)).toEqual(12);
});

it('returns 1:1 reward', () => {
  expect(evalResults([2, 1], 3, 15)).toEqual(30);
});