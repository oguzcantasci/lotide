const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3,4,5], [1, 2, 3]), true); // => should FAIL
assertEqual(eqArrays(["light", "house", 'labs'], ['light', 'house', 'labs']), true); // => should PASS
assertEqual(eqArrays([true, 'ozzy', 1], [true, 'ozzy', 1]), true); // => should PASS
assertEqual(eqArrays([2,3,4], [2,3,"4"]), true); // => should FAIL
assertEqual(eqArrays([], []), true); // => should PASS