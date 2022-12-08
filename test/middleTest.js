const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");


assertArraysEqual(middle([1,2,3,5]), [2,3]); // should PASS
assertArraysEqual(middle([1,2,3,5,7]), [2,3]); // should FAIL
assertArraysEqual(middle([1,2,3,5,7,9,11]), [5]); // should PASS
assertArraysEqual(middle([1,2]), []); // should PASS
