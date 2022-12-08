const assertEqual = require('./assertEqual');

const eqArrays = function(array1, array2) {
  let eqStatus;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        eqStatus = true;
      } else {
        eqStatus = false;
        break;
      }
    }
  } else {
    eqStatus = false;
  }
  return eqStatus;
};

module.exports = eqArrays;