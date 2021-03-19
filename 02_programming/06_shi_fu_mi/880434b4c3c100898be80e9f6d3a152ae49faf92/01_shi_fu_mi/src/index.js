const clear=require("./clear");
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
  
const rock = [
    "    ________        ",
    "---'   _ ,  |       ",
    "      (__(__)       ",
    "      (_____)       ",
    "      (____)        ",
    "---.__(___)         ",
  ];

const papper = [
    "      _______       ",
    "----'    ____)____  ",
    "            _______)",
    "            _______)",
    "           _______) ",
    "----.__________)    ",
  ];

const scissors = [
    "    ____           ",
    "---'    |________  ",
    "     (__)________) ",
    "        _________) ",
    "      (____)       ",
    "---.__(___)        ",
  ];

function movement (moved) {
    if (moved === "1") {
      console.log("Player move");
      console.log(rock);

  } else if (moved === "2") {
      console.log("Player move");
      console.log(papper);

  } else if (moved === "3") {
      console.log("Player move");
      console.log(scissors); 

  } else {
      console.log("This was not a move.");
      reader.question("Choose :\n1 for Rock, 2 for Paper and 3 for Scissors => [1, 2, 3]\n> ", movement);
  }
}

function questionnement (doYouPlayAgain) {
  if (doYouPlayAgain === "y") {
    console.log("Thanks yaaaaaa 😉");

} else if (doYouPlayAgain === "n") {
    console.log("Thanks for the game 😉");

} else
    reader.question("Do you want lay again ? \n Yes press 'y' for No press 'n'\n > ", questionnement);
}

console.log("Welcome to ShiFuMi !");
reader.question("You can choose a move :\n1 for Rock, 2 for Paper and 3 for Scissors => [1, 2, 3]\n> ", (move) => {

  // Handle the move
  const rand = Math.round(Math.random() * 3);

  if (move === "1") {
      console.log("Player move");
      console.log(rock);

      if (rand === 1) {
        console.log("Cpu move");
        console.log(rock);
        console.log("Sorry !!! Noone win :( \n\n");
        reader.question("Do you want play again ? \nYes press 'y' for No press 'n'\n > ", (questionAfterParty) => {
          questionnement(questionAfterParty);
        });

      } else if (rand === 2) {
        console.log("Cpu move");
        console.log(papper);
        console.log("The Player loose!!\n\n");
        reader.question("Do you want play again ? \nYes press 'y' for No press 'n'\n > ", (questionAfterParty) => {
          questionnement(questionAfterParty);
        });
        
      } else {

        console.log("Cpu move");
        console.log(scissors);
        console.log("The Player won!!\n\n");
        reader.question("Do you want play again ? \nYes press 'y' for No press 'n'\n > ", (questionAfterParty) => {
          questionnement(questionAfterParty);
        });
        
      }

  } else if (move === "2") {
      console.log("Player move");
      console.log(papper);

      if (rand === 1) {
        console.log("Cpu move");
        console.log(rock);
        console.log("The Player won!!\n\n");
        reader.question("Do you want play again ? \nYes press 'y' for No press 'n'\n > ", (questionAfterParty) => {
          questionnement(questionAfterParty);
        });

      } else if (rand === 2) {
        console.log("Cpu move");
        console.log(papper);
        console.log("Sorry !!! Noone win :( \n\n");
        reader.question("Do you want play again ? \nYes press 'y' for No press 'n'\n > ", (questionAfterParty) => {
          questionnement(questionAfterParty);
        });
        
      } else {

        console.log("Cpu move");
        console.log(scissors);
        console.log("The Player loose!!\n\n");
        reader.question("Do you want play again ? \nYes press 'y' for No press 'n'\n > ", (questionAfterParty) => {
          questionnement(questionAfterParty);
        });
        
      }

  } else if (move === "3") {
      console.log("Player move");
      console.log(scissors); 

      if (rand === 1) {
        console.log("Cpu move");
        console.log(rock);
        console.log("The Player loose!!\n\n");
        reader.question("Do you want play again ? \nYes press 'y' for No press 'n'\n > ", (questionAfterParty) => {
          questionnement(questionAfterParty);
        });

      } else if (rand === 2) {
        console.log("Cpu move");
        console.log(papper);
        console.log("The Player won!!\n\n");
        reader.question("Do you want play again ? \nYes press 'y' for No press 'n'\n > ", (questionAfterParty) => {
          questionnement(questionAfterParty);
        });
        
      } else {

        console.log("Cpu move");
        console.log(scissors);
        console.log("Sorry !!! Noone win :(\n");
        reader.question("Do you want play again ? \n(Yes press 'y' for No press 'n'\n > ", (questionAfterParty) => {
          questionnement(questionAfterParty);
        });
        
      }

  } else {
      movement(move);
  }
});