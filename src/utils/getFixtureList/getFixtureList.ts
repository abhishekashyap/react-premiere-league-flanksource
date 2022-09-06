import { Match } from "@utils/types";

export const getFixtureList = (matches: Match[], teamName: string) =>
  matches.filter(
    (match) =>
      match?.team1?.includes(teamName) || match?.team2?.includes(teamName)
  );
