const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2 = ["All", "I", "ever", "have", ",", "redemption", "songs", "to", "Redwood"];

describe("#takeUntil", () => {
  it("should return [1, 2, 3, 4, 5, 6] for x >= 7.", () => {
    assert.deepEqual(takeUntil(array1, x => x >= 7), [1, 2, 3, 4, 5, 6]);
  });
  it("should return ['All', 'I', 'ever', 'have'] for x === ',').", () => {
    assert.deepEqual(takeUntil(array2, x => x === ','), ['All', 'I', 'ever', 'have']);
  });
});