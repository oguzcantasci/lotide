// Function Implementation
// takeUntil() function that takes in an array and a callback function as arguments
// and returns a portion of the array until the callback function returns true

const takeUntil = function(array, cb) {
  let results = [];

  // Looping through the given array, pushing the iterated element to the results if it returns false for the callback function
  for (let i = 0; i < array.length; i++) {
    if (!cb(array[i])) {
      console.log(array[i]);
      results.push(array[i]);
    } else {
      break; // break the loop when the callback returns true and return the result
    }
  }
  return results;
};

module.exports = takeUntil;