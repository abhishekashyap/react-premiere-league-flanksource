import { LeagueTableDataType, TeamList } from "utils/types";
import { Points } from "./constants";

export const generateLeagueTableData = (
  teamList: TeamList
): LeagueTableDataType[] =>
  Object.keys(teamList).map((name) => ({
    name,
    points:
      teamList[name].win * Points.WIN +
      teamList[name].draw * Points.DRAW +
      teamList[name].loss * Points.LOST,
    ...teamList[name],
  }));
