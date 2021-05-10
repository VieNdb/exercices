import { sentenceJoiner } from './sentenceJoiner';
import { sentenceSplitter } from './sentenceSplitter';


export const context = (sentence: string): string => {
  // Code your function for context here
  const tabOfsentence =sentenceSplitter(sentence);
  const result = tabOfsentence.filter(word => {
    const result2 = word.split("");
      if(result2[0] !=="a" &&  result2[0] !=="e" && result2[0] !=="i" && result2[0] !=="o" && result2[0] !=="u" && result2[0] !=="y" && result2[0] !=="A" &&  result2[0] !=="E" && result2[0] !=="I" && result2[0] !=="O" && result2[0] !=="U" && result2[0] !=="Y") {
        return word;
      }
    });
  return sentenceJoiner(result);
}
