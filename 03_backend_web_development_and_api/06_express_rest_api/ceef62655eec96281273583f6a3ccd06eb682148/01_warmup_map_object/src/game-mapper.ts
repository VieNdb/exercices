
export function gameMapper(games: GameWithALotOfData[]): Game[] {
  const returnGame = games.map(tab => {
    const myObj = {
      name : tab.name,
      slug : tab.slug,
      cover : tab.cover.url
    };
    return myObj;
  });
  return returnGame ;
}

export type Game = {
  name: string;
  slug: string;
  cover: string;
}

export type GameWithALotOfData = {
  name: string;
  slug: string;
  code: number;
  cover: {
    thumbnail: string;
    url: string;
  }
}
