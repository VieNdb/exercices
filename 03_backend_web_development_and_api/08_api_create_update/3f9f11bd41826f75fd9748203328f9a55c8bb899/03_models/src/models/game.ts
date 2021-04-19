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
        cover: tab.key
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

  findByPlatform(platform_slug: string): Game[] {
    const returnGame = this.collection.filter((findGameWithPlatformmSlug) => {
      if(findGameWithPlatformmSlug.platform.slug === platform_slug) 
      return {
        name: findGameWithPlatformmSlug.name,
        slug: findGameWithPlatformmSlug.slug
      };
    });
    return returnGame;
  }
  
getPlatforms(): Platform[] {
  const tabOfPlatform1: Platform[] =  [];
  const returnPlatforms = this.collection.map(tabOfPlatform2 => {
      if() {

      } else {
        
      }

    const myPlatform = {
      name: tabOfPlatform2.name,
      slug: tabOfPlatform2.slug
    };
    
    return myPlatform;
  });

  return returnPlatforms ;
}
 
}
