function fizzBuzz(list) {
  // Code the function here.
  let myArray =[];
  for (let i = 0; i < list.length; i++) {
    if ((list[i] % 3 === 0) && (list[i] % 5 === 0) ){
      myArray.push("FizzBuzz");
    } else if (list[i] % 3 === 0) {
      myArray.push("Fizz");
    } else if (list[i] % 5 === 0) {
      myArray.push("Buzz");
    } else {
      myArray.push(list[i]);
    }
  }
  return myArray;
}
// Leave the line below untouched for tests to work properly.
module.exports = fizzBuzz;
