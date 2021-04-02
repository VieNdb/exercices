export function rectangle(width: number, height: number): string {
  let star : string = "";
  for(let i: number = 1; i<= height; i++) {
    for(let j: number = 1; j <= width; j++) {
      star = star+"*";
    }
    star = star+"\n";
  }
  return star
}