import { parseISO } from "date-fns";
import { sortMatchesByAscDate } from "utils";
import { Match } from "../types";

export const getPastGames = (matches: Match[], currentDate: Date) =>
  sortMatchesByAscDate(
    matches.filter(
      (match) => parseISO(match.date).getTime() < currentDate.getTime()
    )
  );
