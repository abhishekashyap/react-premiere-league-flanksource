import { getTeamRecord, replaceSpaceWithHyphen } from "utils";
import { Match, TeamList } from "utils/types";
import { defaultValue } from "./constants";

export const getTeamsData = (matches: Match[]): TeamList => {
  let teamList: TeamList = {};

  matches.forEach(({ team1, team2, score }) => {
    const teamRecord = getTeamRecord(team1, team2, score, teamList);

    const computeCommonValues = (team: string) => ({
      ...defaultValue,
      ...teamRecord[team],
      id: replaceSpaceWithHyphen(team),
      gamesPlayed: (teamList[team]?.gamesPlayed || 0) + 1,
    });

    teamList = {
      ...teamList,
      [team1]: {
        ...computeCommonValues(team1),
        goals: {
          concede: (teamList[team1]?.goals?.concede || 0) + score[1],
          score: (teamList[team1]?.goals?.score || 0) + score[0],
        },
      },
      [team2]: {
        ...computeCommonValues(team2),
        goals: {
          concede: (teamList[team2]?.goals?.concede || 0) + score[0],
          score: (teamList[team2]?.goals?.score || 0) + score[1],
        },
      },
    };
  });

  return teamList;
};
