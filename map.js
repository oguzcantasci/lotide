const map = function(array, cb) {
  let results = [];
  array.forEach(element => {
    results.push(cb(element));
  });
  return results;
};
