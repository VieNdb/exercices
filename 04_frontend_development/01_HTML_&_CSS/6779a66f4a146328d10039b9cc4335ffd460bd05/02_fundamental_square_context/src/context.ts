import {squareNumber} from "./squareNumber"

export function context(arrayOfNumbers: number[]): number[] {
  // Code the function here
  const tabOfsquareNumber = arrayOfNumbers.map( x => {
    return squareNumber(x);
  });
  return tabOfsquareNumber;
}
