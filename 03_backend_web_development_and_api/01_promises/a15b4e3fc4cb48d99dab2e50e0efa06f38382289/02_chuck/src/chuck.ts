//import { resolveConfig } from "prettier";
import { getChuckCategories, getChuckJoke } from "../utils";

function getCategories(): Promise<string[]> {
  // Your code goes here
  return getChuckCategories();
}

function getJoke(category: string): Promise<string> {
  const joke = getChuckJoke(category);
  return new Promise((resolve) => {
    // réussir une fois sur deux
    resolve(joke.value);
    joke.then((value) => {
      console.log(value);
    });
  });
}

// Leave the line below for tests to work properly
export { getCategories, getJoke };
