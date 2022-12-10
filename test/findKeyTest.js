
const assert = require('chai').assert;
const findKey = require('../findKey');

const obj1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

describe("#findKey", () => {
  it("return undefined for x.stars === 5", () => {
    assert.deepEqual(findKey(obj1, x => x.stars === 8), undefined);
  });

  it("return noma for x.stars === 2", () => {
    assert.deepEqual(findKey(obj1, x => x.stars === 3), "Akaleri");
  });
});