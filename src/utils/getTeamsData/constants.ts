import { Team } from "../types";

export const defaultValue: Team = {
  win: 0,
  loss: 0,
  draw: 0,
  gamesPlayed: 0,
  goals: {
    concede: 0,
    score: 0,
  },
};
