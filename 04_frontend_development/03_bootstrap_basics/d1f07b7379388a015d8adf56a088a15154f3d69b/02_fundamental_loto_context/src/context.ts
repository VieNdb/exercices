import { lottery_draw } from "./lottery_draw"

type Draw = number[]

export function contextFunction(ticket: Draw): void {
  // Code the function here
  const compare: Draw = lottery_draw();
  let compteur: number = 0;
  for (let i = 0; i < 6; i++) {
    if (compare[i] === ticket[i]) {
      compteur += 1;
    } 
  }
  if (compteur === 6) console.log("You won the lottery!");
    else console.log("You lost...");
}
