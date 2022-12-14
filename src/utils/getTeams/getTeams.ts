import { GetTeamsArgs } from "./types";

/**
 * Get enumerated list of two or more teams
 * @param  {GetTeamsArgs} teams - array of strings containing team names
 * @returns array of objects containing team iteration as key and team name as value. Returns empty list if argument is invalid.
 */
export const getTeams = (teams: GetTeamsArgs) =>
  teams ? teams.map((teamName, idx) => ({ [`team${idx + 1}`]: teamName })) : [];
