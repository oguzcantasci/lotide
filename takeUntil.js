const takeUntil = function(array, cb) {
  let results = [];

  //Looping through the given array, pushing the iterated element to the results if it returns false for the callback function
  for (let i = 0; i < array.length; i++) {
    if (!cb(array[i])) {
      console.log(array[i]);
      results.push(array[i]);
    } else {
      break; //break the loop when the callback returns true
    }
  }
  return results;
};

module.exports = takeUntil;