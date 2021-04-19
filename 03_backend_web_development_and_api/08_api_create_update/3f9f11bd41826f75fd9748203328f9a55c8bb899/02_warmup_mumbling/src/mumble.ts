export function mumble (words : string) : string {
  
  const wordArray = words.toLowerCase();
  let wordToReturn = wordArray.split('');
  wordToReturn = wordToReturn.map((myWords, index) => {
    return myWords.repeat(index + 1);
  });
  return wordToReturn.join('-');
}