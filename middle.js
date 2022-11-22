const middle = function(array) {
  let result = [];
  let middleIndex;
  
  if (array.length < 3) {
    result = [];
  } else if (array.length % 2 !== 0) {
    middleIndex = Math.floor(array.length / 2);
    result.push(array[middleIndex]);
  } else if (array.length % 2 === 0) {
    middleIndex = array.length / 2;
    result.push(array[middleIndex - 1], array[middleIndex]);
  }
  return result;
};

console.log(middle(["hede", "hodo", "falan", "filan"]));