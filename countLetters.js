// Function Implementation
// countLetter() function that takes in a string as an arg
// and returns an object that contain the count of each character of the string as key-value pairs

const countLetters = function(sentence) {
  let results = {};
  const letters = sentence.replaceAll(" ", "").toLowerCase();
  for (const letter of letters) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

module.exports = countLetters;
