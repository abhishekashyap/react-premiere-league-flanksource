export type TeamList = {
  [teamName: string]: Team;
};

export type TeamRecordList = {
  [teamName: string]: Record;
};

export type Team = Record & {
  goals: Goal;
};

export type Record = {
  win: number;
  loss: number;
  draw: number;
  gamesPlayed: number;
};

export type Goal = {
  concede: number;
  score: number;
};

export type Match = {
  match: string;
  date: string;
  score: number[];
  team1: string;
  team2: string;
};
