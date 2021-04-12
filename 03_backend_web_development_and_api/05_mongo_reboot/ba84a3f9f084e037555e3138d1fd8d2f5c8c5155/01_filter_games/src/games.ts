import { Game } from "./types";

export function filterGameByPlatform(games: Game[], platform: string): Game[] {
  const result: Game[] = games.filter(games => games.platform === platform);
  return result;
}
