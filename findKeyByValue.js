const findKeyByValue = function(obj, value) {
  let result;
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (obj[key] === value) {
      result = key;
    }
  }
  return result;
};

module.exports = findKeyByValue;