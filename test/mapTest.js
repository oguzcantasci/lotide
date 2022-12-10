const assert = require('chai').assert;
const map = require('../map');

const words = ["one", "love", "one", "heart"];

describe("The map() function", () => {
  it("should return ['g', 'c', 't', 'm', 't'] for ['ground', 'control', 'to', 'major', 'tom']", () => {
    assert.deepEqual(map(words, word => word.toUpperCase()), ["ONE", "LOVE", "ONE", "HEART"]);
  });
});