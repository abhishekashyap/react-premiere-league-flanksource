import { getTeams } from "utils";
import { GetAllMatchesArgs, GetAllMatchesReturnType } from "./types";

/**
 * Get formatted list of all the matches
 * @param  {GetAllMatchesArgs} data - Array of objects containing score and date keys
 * @returns Array of objects containing match id, date, score and team names that participated in the match
 */
export const getAllMatches = (
  data: GetAllMatchesArgs
): GetAllMatchesReturnType =>
  data
    ? data.map(({ score: matchScore, date }, idx) => {
        try {
          const teamNames = Object.keys(matchScore);
          const teams = getTeams(teamNames);

          const score = Object.values(matchScore);
          return Object.assign(
            {},
            {
              match: `Match${idx}`,
              date,
              score,
            },
            ...teams
          );
        } catch (e) {
          throw new Error(
            "Incorrect data passed. Please verify the data that is being passed."
          );
        }
      })
    : [];
