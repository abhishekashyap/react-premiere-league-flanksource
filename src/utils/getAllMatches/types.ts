import { Match } from "@utils/types";

export type GetAllMatchesArgs = {
  score: Score;
  date: string;
}[];

export type GetAllMatchesReturnType = Match[];

type Score = {
  [team: string]: number | undefined | null;
};
