// Function Implementation
// eqObjects() functions that takes two objects as args
// and checks if they are equal or not

const eqArrays = require('./eqArrays');

const eqObjects = function(obj1, obj2) {
  const keyNames1 = Object.keys(obj1);
  const keyNames2 = Object.keys(obj2);
  let result;

  if (keyNames1.length !== keyNames2.length) { // check if the objects have the same number of keys
  }
  for (const key1 of keyNames1) { // check if keys have arrays as values
    if (Array.isArray(obj1[key1])) {
      result = eqArrays(obj1[key1], obj2[key1]);
      if (!result) {
        return result;
      }
    } else if (obj1[key1] === obj2[key1]) {
      result = true;
    } else {
      return false;
    }
  }
  return result;
};


module.exports = eqObjects;