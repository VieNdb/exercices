function numberGame(reader, min = 1, max = 100) {
  // code here
  const rand = Math.round(Math.random() * (max - min) + min );
  console.log(`Welcome!
    You have to find the right number, between 1 and 100!
    Good luck!!`);
  reader.question("Enter a number ", value1 => {
    if (rand === value1) {
      console.log("You won!");
    }  else if (rand > value1) {
      console.log("Too low");
    } else if (rand < value1) {
      console.log("Too high");
    } else console.log("This was not a number");
  });
}
module.exports = numberGame;
