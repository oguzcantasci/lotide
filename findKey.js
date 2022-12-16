// Function Implementation
// findKey() function that takes an object and a callback function as args
// and returns the first key that returns true when passed in the callback.

const findKey = function(obj, cb) {
  let resultKey;
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (cb(obj[keys[i]])) {
      resultKey = keys[i];
      break;
    }
  }
  return resultKey;
};

module.exports = findKey;