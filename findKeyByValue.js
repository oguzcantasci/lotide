// Function Implementation
// findKeyByValue() function that takes in an object and a value as args
// and returns the first key of that object that matches that value

const findKeyByValue = function(obj, value) {
  let result;
  // const keys = Object.keys(obj);
  for (let key in obj) {
    if (obj[key] === value) {
      result = key;
    }
  }
  return result;
};

module.exports = findKeyByValue;