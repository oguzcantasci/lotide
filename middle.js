//Function Implementation
// middle() function that takes in an array as an arg
// and returns the most middle item(s) of that array as an array.

const middle = function(array) {
  let result = [];
  let middleIndex;
  
  if (array.length < 3) { // return an empty array if the arg array has 1 or 2 items
    return [];
  } else if (array.length % 2 !== 0) {  // return the most middle item of an array if the arg array has odd number of items
    middleIndex = Math.floor(array.length / 2);
    result.push(array[middleIndex]);
  } else if (array.length % 2 === 0) { // return the 2 most middle items of the array has even number of items
    middleIndex = array.length / 2;
    result.push(array[middleIndex - 1], array[middleIndex]);
  }
  return result;
};

module.exports = middle;
