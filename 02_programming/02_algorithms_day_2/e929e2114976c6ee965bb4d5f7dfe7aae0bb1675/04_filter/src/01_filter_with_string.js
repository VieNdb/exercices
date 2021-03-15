function filter(array, str) {
  // Your code here
  let myArray =[];
  for (let i = 0 ; i < array.length ; i++) {
    if (array[i] % 2 === 0) {
      myArray.push(array[i]);
    }
    else {
      myArray.push(array[i]);
    }
  }
  return myArray;
}
// do not remove this line, it is for tests
module.exports = filter;
