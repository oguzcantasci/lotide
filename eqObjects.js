const eqArrays = function(array1, array2) {
  let eqStatus;
  if (array1.length === array2.length) {
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
  } else {
    eqStatus = false;
  }
  return eqStatus;
};

const eqObjects = function(obj1, obj2) {
  const keyNames1 = Object.keys(obj1);
  const keyNames2 = Object.keys(obj2);
  let lengthMatch;
  let result;

  if (keyNames1.length === keyNames2.length) {
    lengthMatch = true;
  } else {
    result = false;
  }

  if (lengthMatch) {
    for (const key1 of keyNames1) {
      if (Array.isArray(obj1[key1])) {
        result = eqArrays(obj1[key1], obj2[key1]);
      } else if (obj1[key1] === obj2[key1]) {
        result = true;
      } else {
        result = false;
        break;
      }
    }
  }
  return result;
};