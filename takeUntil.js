const takeUntil = function(array, cb) {
  let results = [];
  for (let i = 0; !cb(array[i]); i++) {
    results.push(array[i]);
  }
  return results;
};