const flatten = function(arr) {
  let flattened = [];
  for (let i = 0; i < arr.length; i++) {
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