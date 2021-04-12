
export function findGameFromSlug(games: Game[], slug: string): Game {
  const theGame = games.find(gameSlug => {
    const myObjt = {
      slug : gameSlug.slug
    };
    if(myObjt.slug === slug) return myObjt;
    else return undefined;
  });  

  return theGame;
}

export type Game = {
  name: string;
  slug: string;
  cover: string;
  platform: string;
}
