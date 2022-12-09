const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const ab = { a: "6", b: "9" };
const ba = { b: "9", a: "6" };
const abc = { a: "6", b: "9", c: "7" };
const cd = { c: "ozzy", d: ["light", "house", 4] };
const dc = { d: ["light", "house", 4], c: "ozzy" };
const cd2 = { c: "1", d: ["light", "house", 4] };


describe("#eqObjects", () => {
  it("should return true for eqObjects(ab === ba)", () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });

  it("should return false for eqObjects(ab === abc)", () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });

  it("should return true for eqObjects(cd === dc)", () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });
  
  it("should return false for eqObjects(dc === cd2)", () => {
    assert.deepEqual(eqObjects(dc, cd2), false);
  });
});