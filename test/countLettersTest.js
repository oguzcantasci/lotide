const assert = require('chai').assert;
const countLetters = require('../countLetters');

const result = countLetters("I am Iron Man");


describe("Function countLetters()", () => {
  it("should return 2 for 'm' in 'I am Iron Man'", () => {
    assert.deepEqual(result["m"], 2);
  });
  it("return 1 for 'o' in 'I am Iron Man'", () => {
    assert.deepEqual(result["o"], 1);
  });
  it("return undefined for 'z' in 'I am Iron Man'", () => {
    assert.deepEqual(result["z"], undefined);
  });
});