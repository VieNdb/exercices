export type Game = {
  name: string;
  slug: string;
  [key: string]: any
};

export type Platform = {
  name: string;
  slug: string;
  [key: string]: any
};

export class GameModel {
  collection: Game[];

  constructor(collection: Game[]) {
    this.collection = collection;
  }

  getAll(): Game[] {
    const returnGame = this.collection.map(tab => {
      const myObj = {
        name: tab.name,
        slug: tab.slug,
        key: tab.key
      };
      return myObj;
    });
    return returnGame ;
  }

  findBySlug(slug: string): Game | null {
    const returnGame = this.collection.find(gameSlug => {
      return gameSlug.slug === slug; 
    });
      if(returnGame === undefined) return null;
      else return returnGame;
  }

  
}
