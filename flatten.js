const flatten = function(array) {
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let x = 0; x < array[i].length; x++) {
        flattenedArray.push(array[i][x]);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
};

console.log(flatten(["am", "got", ["meme", "yarrak"], ["sikis", "sokus"]])); // => [1, 2, 3, 4, 5, 6]