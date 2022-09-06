import { getTeams } from "utils";
import { GetAllMatchesArgs, GetAllMatchesReturnType } from "./types";

export const getAllMatches = (
  data: GetAllMatchesArgs
): GetAllMatchesReturnType =>
  data.map((match, idx) => {
    const teamNames = Object.keys(match.score);
    const teams = getTeams(teamNames);

    const score = Object.values(match.score);

    return Object.assign(
      {},
      {
        match: `Match${idx}`,
        date: match.date,
        score,
      },
      ...teams
    );
  });
