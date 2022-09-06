import { getTeamRecord } from "utils";
import { Match, TeamList } from "utils/types";
import { defaultValue } from "./constants";

export const getTeamsData = (matches: Match[]): TeamList => {
  let teamList: TeamList = {};

  matches.forEach(({ team1, team2, score }) => {
    const teamRecord = getTeamRecord(team1, team2, score, teamList);

    teamList = {
      ...teamList,
      [team1]: {
        ...defaultValue,
        ...teamRecord[team1],
        gamesPlayed: (teamList[team1]?.gamesPlayed || 0) + 1,
        goals: {
          concede: (teamList[team1]?.goals?.concede || 0) + score[1],
          score: (teamList[team1]?.goals?.score || 0) + score[0],
        },
      },
      [team2]: {
        ...defaultValue,
        ...teamRecord[team2],
        gamesPlayed: (teamList[team2]?.gamesPlayed || 0) + 1,
        goals: {
          concede: (teamList[team2]?.goals?.concede || 0) + score[0],
          score: (teamList[team2]?.goals?.score || 0) + score[1],
        },
      },
    };
  });

  return teamList;
};
