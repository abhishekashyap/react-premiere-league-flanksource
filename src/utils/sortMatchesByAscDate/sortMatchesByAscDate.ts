import { compareAsc, parseISO } from "date-fns";
import { Match } from "../types";

export const sortMatchesByAscDate = (matches: Match[]) =>
  matches.sort((a, b) => compareAsc(parseISO(a.date), parseISO(b.date)));
