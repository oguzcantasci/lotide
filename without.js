const without = function(source, itemsToRemove) {
  let removalStatus;
  let result = [];

  // loop through the array and push the items that return false for the removal to the result array
  for (let i = 0; i < source.length; i++) {
    removalStatus = false;
    for (let item of itemsToRemove) {
      if (source[i] === item) {
        removalStatus = true;
      }
    }
    if (!removalStatus) {
      result.push(source[i]);
    }
  }
  return result;
};

module.exports = without;