import { capitalize } from "./capitalize"

export function context(sentence: string): string {
  // Code here and use the function `capitalize` from exercise one
  const tabOfSentence = sentence.split(" ");
  const tabOfTab = tabOfSentence.map(word => capitalize(word));
return tabOfTab.join(" ");
}
