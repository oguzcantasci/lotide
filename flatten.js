const flatten = function(arr) {
  let flattened = []; //declared an empty array to store the flattened arrays
  for (let i = 0; i < arr.length; i++) { // looping throught the array to see if there are nested arrays inside
    if (Array.isArray(arr[i])) {
      let cbArray = flatten(arr[i]);
      flattened = flattened.concat(cbArray);
    } else {
      flattened.push(arr[i]);
    }
  }
  return flattened;
};

module.exports = flatten;