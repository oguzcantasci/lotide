const assertArraysEqual = function(array1, array2) {
  const eqArrays = function(array1, array2) {
    let eqStatus;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        eqStatus = true;
        // console.log("esit");
      } else {
        // console.log("olmadi");
        eqStatus = false;
        break;
      }
    }
    return eqStatus;
  };

  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else  if (eqArrays(array1, array2) !== true) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} === ${array2}`);
  }
};

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