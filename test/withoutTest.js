const assert = require('chai').assert;
const without = require('../without');


describe("The without() function", () => {
  it("should return ['1'] when removing ['2, '3'] from ['1', '2', '3']", () => {
    assert.deepEqual(without(["1", "2", "3"], ['2', '3']), ["1"]);
  });

  it("should return [] when removing 'mommy' from the string 'mommy'.", () => {
    assert.deepEqual((without("mommy", "mommy")), []);
  });
  it("should return [11] when removing [9, 11, 69] from [9, '11', 69]", () => {
    assert.deepEqual(without([9, '11', 69], [9, 11, 69]), ['11']);
  });
});