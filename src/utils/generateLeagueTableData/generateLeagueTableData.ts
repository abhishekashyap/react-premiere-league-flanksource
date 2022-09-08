import { LeagueTableDataType, TeamList } from "utils/types";
import { Points } from "./constants";

/**
 * Generated data for league table by evaluating points and sorting the team list
 * @param  {TeamList} teamList
 * @returns LeagueTableDataType
 */
export const generateLeagueTableData = (
  teamList: TeamList
): LeagueTableDataType[] =>
  teamList
    ? Object.keys(teamList)
        .map((name) => ({
          name,
          points:
            teamList[name].win * Points.WIN +
            teamList[name].draw * Points.DRAW +
            teamList[name].loss * Points.LOST,
          ...teamList[name],
        }))
        .sort((a, b) => b.points - a.points)
    : [];
