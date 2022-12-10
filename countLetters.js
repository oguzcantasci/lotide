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
