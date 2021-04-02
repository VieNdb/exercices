type Person = {
  firstName: string;
  lastName: string;
}

export function parseName(name: string): Person {
  const word: string[] = name.split(' ');
  return { 
    firstName: word[0],
    lastName: word[1]
  }
}
