import { Match } from "@utils/types";
import { compareAsc, parseISO } from "date-fns";

export const sortMatchesByAscDate = (matches: Match[]) =>
  matches.sort((a, b) => compareAsc(parseISO(a.date), parseISO(b.date)));
