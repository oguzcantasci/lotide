const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("The eqArrays() function",() => {
  it('eqArrays([1, 2, 3], [1, 2, 3]) should return true', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it('eqArrays([1, 2, 3, 4, 5], [1, 2, 3]) should return false', () => {
    assert.strictEqual(eqArrays([1, 2, 3, 4, 5], [1, 2, 3]), false);
  });

  it('eqArrays(["light", "house", "labs"], ["light", "house", "labs"] should return true', () => {
    assert.strictEqual(eqArrays(["light", "house", 'labs'], ['light', 'house', 'labs']), true);
  });

  it('eqArrays([true, "ozzy", 1], [true, "ozzy", 1]) should return true', () => {
    assert.strictEqual(eqArrays([true, 'ozzy', 1], [true, 'ozzy', 1]), true);
  });

  it('eqArrays([2,3,4], [2,3,"4"]) should return false', () => {
    assert.strictEqual(eqArrays([2,3,4], [2,3,"4"]), false);
  });

  it('eqArrays([], []) should return true', () => {
    assert.strictEqual(eqArrays([], []), true);
  });


});