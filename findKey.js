const findKey = function(obj, cb) {
  let resultKey;
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (cb(obj[keys[i]])) {
      resultKey = keys[i];
      break;
    }
  }
  return resultKey;
};

module.exports = findKey;