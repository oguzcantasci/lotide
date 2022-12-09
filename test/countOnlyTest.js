const assert = require('chai').assert;
const countOnly = require('../countOnly');

//TEST CODE

//Test 1
const letters = ['a','a','b','c','d','e','a'];
const count1 = {a: true, d: true, b: false, f: true};
const count2 = {b: true, c: true, e: false};

const result1 = {a:3, d:1};
const result2 = {b: 1, c:1};

//Test 2
const passengers = [
  "Ozzy",
  "Nurdan",
  "Ege",
  "Hale",
  "Oyku",
  "Caner",
  "Nurdan",
  "Hale",
  "Melih"
];
const result3 = countOnly(passengers, { "Caner": true, "Tuna": true, "Hale": true, "Ege": false });


describe('counOnly() function', () => {
  it('should return the count of letters a & d', () => {
    assert.deepEqual(countOnly(letters, count1), result1);
  });

  it('should return the count of letters b & c ', () => {
    assert.deepEqual(countOnly(letters, count2), result2);
  });
});

describe('countOnly() function', () => {
  it('should return the count of the name', () => {
    assert.deepEqual(result3["Caner"], 1);
  });

  it('should not count the name if it does not exist in the array', () => {
    assert.deepEqual(result3["Tuna"], undefined);
  });

  it('should return the count of the name even if it exists more than once ', () => {
    assert.deepEqual(result3["Hale"], 2);

  });

  it('should not count the name if it\'s value is false', () => {
    assert.deepEqual(result3["Ege"], undefined);
  });
});


