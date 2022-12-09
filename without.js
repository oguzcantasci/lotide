const without = function(source, itemsToRemove) {
  let cleanArray = [];
  let trigger;
  for (let i = 0; i < source.length; i++) {
    trigger = true;
    for (let x = 0; x < itemsToRemove.length && trigger; x++) {
      if (source[i] === itemsToRemove[x]) {
        trigger = false;
      }
    }
    if (trigger) {
      cleanArray.push(source[i]);
    }
  }
  return cleanArray;
};

module.exports = without;