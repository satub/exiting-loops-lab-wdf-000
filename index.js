function breakOut(array, changeValue, stopValue){
  for (var i = 0, l = array.length; i < l; i++) {
    if (array[i] === stopValue) {
      break;
    } else {
      array[i] = changeValue;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0, l = array.length; i < l; i++) {
    if (array[i] === skipValue) {
      continue;
    } else {
      array[i] = changeValue;
    }
  }
  return array;
}

function findBy(array, findFn) {
  for (var i = 0, l = array.length; i < l; i++) {
    console.log(`${array[i]}`)
    if (findFn(array[i])) {
      return array[i];
    }
  }
}
