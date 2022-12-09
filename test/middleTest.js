const assert = require('chai').assert;
const middle = require("../middle");

//TEST CODE
describe("The middle() function", () => {
  it("should return the middle two elements in an array if the original array has odd number of elements", () => {
    assert.deepEqual(middle([1,2,3,5]), [2,3]);
  });

  it("should return an array of two middle elements if the original array has even number of elements", () => {
    assert.deepEqual(middle([1,2,3,5,7,9,11]), [5]);
  });

  it("should return an empty array if the original array has two or less elements", () => {
    assert.deepEqual(middle([1,2]), []);
  });

});
