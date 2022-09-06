import { TeamList, TeamRecordList } from "utils/types";

export const getTeamRecord = (
  team1: string,
  team2: string,
  score: number[],
  teamList: TeamList
): TeamRecordList => {
  if (score[0] > score[1])
    return {
      [team1]: {
        ...teamList[team1],
        win: (teamList[team1]?.win || 0) + 1,
      },
      [team2]: {
        ...teamList[team2],
        loss: (teamList[team2]?.loss || 0) + 1,
      },
    };
  else if (score[1] > score[0])
    return {
      [team1]: {
        ...teamList[team1],
        loss: (teamList[team1]?.loss || 0) + 1,
      },
      [team2]: {
        ...teamList[team2],
        win: (teamList[team2]?.win || 0) + 1,
      },
    };
  else
    return {
      [team1]: {
        ...teamList[team1],
        draw: (teamList[team1]?.draw || 0) + 1,
      },
      [team2]: {
        ...teamList[team2],
        draw: (teamList[team2]?.draw || 0) + 1,
      },
    };
};
