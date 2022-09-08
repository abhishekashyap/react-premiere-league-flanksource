import { Match, TeamList } from "@utils/types";
import { getTeamsData } from "./getTeamsData";

const mockTeamName = "Manchester United";

const mockMatchList: Match[] = [
  {
    date: "2021-05-04T14:00:00",
    match: "Match0",
    score: [1, 2],
    team1: "Manchester United",
    team2: "Leicester City",
  },
  {
    date: "2021-05-09T11:00:00",
    match: "Match1",
    score: [2, 3],
    team1: "Manchester United",
    team2: "Liverpool",
  },
  {
    date: "2021-05-09T11:00:00",
    match: "Match2",
    score: [2, 3],
    team1: "Unmatched Team 1",
    team2: "Unmatched Team 2",
  },
];

const mockReturnValue: TeamList = {
  "Leicester City": {
    draw: 0,
    gamesPlayed: 1,
    goals: {
      concede: 1,
      score: 2,
    },
    loss: 0,
    win: 1,
  },
  Liverpool: {
    draw: 0,
    gamesPlayed: 1,
    goals: {
      concede: 2,
      score: 3,
    },
    loss: 0,
    win: 1,
  },
  "Manchester United": {
    draw: 0,
    gamesPlayed: 2,
    goals: {
      concede: 5,
      score: 3,
    },
    loss: 2,
    win: 0,
  },
  "Unmatched Team 1": {
    draw: 0,
    gamesPlayed: 1,
    goals: {
      concede: 3,
      score: 2,
    },
    loss: 1,
    win: 0,
  },
  "Unmatched Team 2": {
    draw: 0,
    gamesPlayed: 1,
    goals: {
      concede: 2,
      score: 3,
    },
    loss: 0,
    win: 1,
  },
};

describe("getTeamsData", () => {
  it("should return team list with team data", () => {
    expect(getTeamsData(mockMatchList)).toEqual(mockReturnValue);
  });

  it("should return empty object if match list is empty", () => {
    expect(getTeamsData([])).toEqual({});
  });

  it("should return empty object if match list is null", () => {
    expect(getTeamsData(null as any)).toEqual({});
  });

  it("should return empty object if match list is undefined", () => {
    expect(getTeamsData(undefined as any)).toEqual({});
  });

  it("should return team list with incrementing games played", () => {
    const res1 = getTeamsData(mockMatchList);
    expect(res1[mockTeamName].gamesPlayed).toEqual(2);

    const res2 = getTeamsData([
      ...mockMatchList,
      {
        date: "2021-05-08T14:00:00",
        match: "Match3",
        score: [2, 2],
        team1: "Manchester United",
        team2: "Leicester City",
      },
    ]);
    expect(res2[mockTeamName].gamesPlayed).toEqual(3);
  });

  it("should return team list with updates goals scored and conceded", () => {
    const res1 = getTeamsData(mockMatchList);
    expect(res1[mockTeamName].goals.score).toEqual(3);
    expect(res1[mockTeamName].goals.concede).toEqual(5);

    const res2 = getTeamsData([
      ...mockMatchList,
      {
        date: "2021-05-08T14:00:00",
        match: "Match3",
        score: [2, 2],
        team1: "Manchester United",
        team2: "Leicester City",
      },
    ]);
    expect(res2[mockTeamName].goals.score).toEqual(5);
    expect(res2[mockTeamName].goals.concede).toEqual(7);
  });
});
