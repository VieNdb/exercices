function range(valueA, valueB) {
  // Code the function here.
  const returnedArray =[];
  if (valueA <= valueB){
    for (let i = valueA; i <= valueB; i++) {
      returnedArray.push(i);
    }
  }
  else {
    for (let i = valueA; i >= valueB; i--) {
      returnedArray.push(i);
    }
  }
  return returnedArray;
}

// Do not remove last lines, it is for tests
module.exports = range;