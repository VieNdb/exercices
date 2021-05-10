import { getReposUrlByNickname, listRepos, getOneRepoInfos } from "../utils";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string |number |boolean |null;
}

export type GitHub = {
  message: string;
  repos_url: string;
}

export class GithubClient {
  static getReposUrl(nickname: string): Promise<string> {
    // You code goes here
    return getReposUrlByNickname(nickname)
    .then((value) => {
      return value.repos_url;
    })
    .catch((nickname) => {
      console.log(nickname);
      return nickname.message;
  });
  }

  static getRepos() {
    // You code goes here
  }

  static printRepos() {
    // You code goes here
  }

  
  static printRepository() {
    // You code goes here
  }
  
  static getProjectInformations() {
    // You code goes here
  }
}
//const moi: (string | number)[] = ["ma", "mea", "mia", 4];