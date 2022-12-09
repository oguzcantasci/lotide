const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("letterPositions() function", () => {
  it("should return {o: [0], z: [1, 2], y: [3]} for 'ozzy'.", () => {
    assert.deepEqual(letterPositions("ozzy"), {o: [0], z: [1, 2], y: [3]});
  });
  it("should return [1, 2] for `ozzy`.z", () => {
    assert.deepEqual(letterPositions("ozzy").z, [1, 2]);
  });
});