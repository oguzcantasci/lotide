const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  let eqStatus;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      eqStatus = true;
      // console.log("esit");
    } else {
      // console.log("olmadi");
      eqStatus = false;
      break;
    }
  }
  return eqStatus;
};