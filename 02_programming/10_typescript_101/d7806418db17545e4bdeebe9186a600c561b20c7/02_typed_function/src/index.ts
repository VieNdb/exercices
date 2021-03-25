type tuple = [string, number];
function handleTuple(tuple: [string, number]): void {
  // Code the function here.
  for (let i = 0; i < tuple.length; i++) {
    if (typeof tuple[i] === "string") {
      console.log(tuple[i]+`${tuple[i]} is string's type`);
    } else if(typeof tuple[i] === "number") {
      console.log(tuple[i]+`${tuple[i]} is number's type`);
    }
  }
}

// Leave the line below for tests to work properly.
export { handleTuple };