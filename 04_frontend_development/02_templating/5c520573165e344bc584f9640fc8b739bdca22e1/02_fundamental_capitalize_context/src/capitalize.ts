// Copy your function `capitalize` from the first exercise

export function capitalize(word: string): string {
  // Code your function here
  const tabOfString: string[] = word.split("");
  tabOfString[0] = tabOfString[0].toUpperCase();
  return tabOfString.join("");
}
