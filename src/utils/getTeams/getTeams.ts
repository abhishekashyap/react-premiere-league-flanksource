import { GetTeamsArgs } from "./types";

export const getTeams = (teams: GetTeamsArgs) =>
  teams.map((teamName, idx) => ({ [`team${idx + 1}`]: teamName }));
