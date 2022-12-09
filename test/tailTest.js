const assert = require('chai').assert;
const tail = require('../tail');

const testArray = ["Hello", "Lighthouse", "Labs"];
const result = tail(testArray);
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
const oneElement = ["meeeh"];
const emptyArray = [];


//TEST CODE

describe("The tail() function", () => {
  it('should work as expected with arrays that have at least two elements', () => {
    assert.deepEqual(tail(testArray), ["Lighthouse", "Labs"]);
  });

  it('should return a correct number of elements', () => {
    assert.strictEqual(result.length, 2);
  });

  it('should return \'Lighthouse\' as the first element', () => {
    assert.strictEqual(result[0], 'Lighthouse');
  });

  it('should return \'Labs\' as the first element', () => {
    assert.strictEqual(result[1], 'Labs');
  });

  it("should not change the original array", () => {
    assert.strictEqual(words.length, 3);
  });

  it('should return an empty array for the tail of an arrray with only one element', () => {
    assert.deepEqual(tail(oneElement), []);
  });

  it('should return an empty array for the tail of an empty array', () => {
    assert.deepEqual(tail(emptyArray), []);
  });
});