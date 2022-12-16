// Function Implementation
// map() function that takes in an array and a callback function as args,
// and returns the array with each of its items passed in the callback function.


const map = function(array, cb) {
  let results = [];
  array.forEach(element => {
    results.push(cb(element));
  });
  return results;
};

module.exports = map;