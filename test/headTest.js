const assert = require('chai').assert;
const head = require('../head');

//TEST CODE
describe("The head() function", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns undefined for empty array", () => {
    assert.strictEqual(head([]), undefined);
  });
  
  it("returns the only element in a single element array", () => {
    assert.strictEqual(head([5]), 5);
  });

  it("also works with an array of strings", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});
