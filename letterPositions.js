// letterPositions() function that takes in a string as an argument
// and returns an object that contains key-value pairs of each character and their indexes

const letterPositions = function(sentence) {
  const results = {};
  {for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else { // if the character hasn't appeared yet, set an empty array as its value and push its index to it
        results[sentence[i]] = [];
        results[sentence[i]].push(i);
      }
    }
  }}
  return results;
};

module.exports = letterPositions;