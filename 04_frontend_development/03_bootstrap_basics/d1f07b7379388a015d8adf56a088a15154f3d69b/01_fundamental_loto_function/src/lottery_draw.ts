type Draw = [number, number, number, number, number, number]

export function lottery_draw(): Draw {
  const myTab: Draw = [1,1,1,1,1,1];
  for (let i = 0; i < 6; i++) {
    myTab[i] = (Math.floor(Math.random() * 100));
  }
  return myTab;
}