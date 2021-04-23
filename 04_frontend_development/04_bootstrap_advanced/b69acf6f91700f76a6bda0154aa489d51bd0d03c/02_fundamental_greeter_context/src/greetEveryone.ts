// Copy your function greetEveryone here
type ParamRest = string[];

export function greetEveryone(...rest: ParamRest): void {
  // Code your function here
  rest.forEach(element => console.log("Welcome to ", element));
}