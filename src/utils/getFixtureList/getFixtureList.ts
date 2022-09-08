import { Match } from "@utils/types";

/**
 * Get fixture list for the specified team
 * @param  {Match[]} matches - array of objects containing match info
 * @param  {string} teamName - name of the team whose fixture list you want to get
 * @returns Fixture list - array of objects containing match id, date, score and team names that participated in the match
 */
export const getFixtureList = (matches: Match[], teamName: string) =>
  matches
    ? matches.filter(
        (match) =>
          match?.team1?.includes(teamName) || match?.team2?.includes(teamName)
      )
    : [];
