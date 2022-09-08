import { TeamList, TeamRecordList } from "utils/types";

/**
 * Evaluates if team has won, lost or drawn the game and returns updated team list
 * @param  {string} team1 - name of the first team
 * @param  {string} team2 - name of the second team
 * @param  {number[]} score - array containing scores of both teams
 * @param  {TeamList} teamList - list of teams
 * @returns TeamRecordList - team list with updated win, loss and draw counts
 */
export const getTeamRecord = (
  team1: string,
  team2: string,
  score: number[],
  teamList: TeamList
): TeamRecordList => {
  try {
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
  } catch (error) {
    throw new Error(
      "Invalid score. Please verify the score data that is being passed."
    );
  }
};
