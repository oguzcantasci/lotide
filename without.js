const without = function(source, itemsToRemove) {
  let removalStatus;
  let result = [];
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