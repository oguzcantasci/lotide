// Function Implementation
// assertArraysEqual() function that takes in and actual and an expected output
// to check if the eqArrays() function is working properly

const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};

module.exports = assertArraysEqual;