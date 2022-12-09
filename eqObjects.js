const eqArrays = require('./eqArrays');

const eqObjects = function(obj1, obj2) {
  const keyNames1 = Object.keys(obj1);
  const keyNames2 = Object.keys(obj2);
  let lengthMatch;
  let result;

  if (keyNames1.length === keyNames2.length) {
    lengthMatch = true;
  } else {
    result = false;
  }

  if (lengthMatch) {
    for (const key1 of keyNames1) {
      if (Array.isArray(obj1[key1])) {
        result = eqArrays(obj1[key1], obj2[key1]);
      } else if (obj1[key1] === obj2[key1]) {
        result = true;
      } else {
        result = false;
        break;
      }
    }
  }
  return result;
};

module.exports = eqObjects;