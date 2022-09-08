import { Match } from "@utils/types";
import { getFixtureList } from "./getFixtureList";

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

const expectedReturn = [
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
];

describe("getFixtureList", () => {
  it("should return formatted match data", () => {
    expect(getFixtureList(mockMatchList, mockTeamName)).toEqual(expectedReturn);
  });

  it("should return empty list if data passed is undefined", () => {
    expect(getFixtureList(null as any, mockTeamName)).toEqual([]);
  });

  it("should return empty list if data passed is null", () => {
    expect(getFixtureList(undefined as any, mockTeamName)).toEqual([]);
  });

  it("should return the list if data passed has date as null", () => {
    expect(
      getFixtureList(
        [
          ...mockMatchList,
          {
            date: null,
            match: "Match2",
            score: [1, 2],
            team1: "Manchester United",
            team2: "Leicester City",
          },
        ] as any,
        mockTeamName
      )
    ).toEqual([
      ...expectedReturn,
      {
        date: null,
        match: "Match2",
        score: [1, 2],
        team1: "Manchester United",
        team2: "Leicester City",
      },
    ]);
  });

  it("should return the list if data passed has date as null", () => {
    expect(
      getFixtureList(
        [
          ...mockMatchList,
          {
            date: null,
            match: "Match2",
            score: [1, 2],
            team1: "Manchester United",
            team2: "Leicester City",
          },
        ] as any,
        mockTeamName
      )
    ).toEqual([
      ...expectedReturn,
      {
        date: null,
        match: "Match2",
        score: [1, 2],
        team1: "Manchester United",
        team2: "Leicester City",
      },
    ]);
  });

  it("should not return that match which contains team name as null", () => {
    expect(
      getFixtureList(
        [
          ...mockMatchList,
          {
            date: null,
            match: "Match2",
            score: [1, 2],
            team1: null,
            team2: null,
          },
        ] as any,
        mockTeamName
      )
    ).toEqual([...expectedReturn]);
  });

  it("should not return that match which contains one team name as null and other does not match the team", () => {
    expect(
      getFixtureList(
        [
          ...mockMatchList,
          {
            date: null,
            match: "Match2",
            score: [1, 2],
            team1: null,
            team2: "Unknown Team 2",
          },
        ] as any,
        mockTeamName
      )
    ).toEqual([...expectedReturn]);
  });

  it("should return empty list if empty match list is passed", () => {
    expect(getFixtureList([] as any, mockTeamName)).toEqual([]);
  });

  it("should return empty list if null is passed as team name", () => {
    expect(
      getFixtureList(
        [
          ...mockMatchList,
          {
            date: null,
            match: "Match2",
            score: [1, 2],
            team1: "Manchester United",
            team2: "Chelsea",
          },
        ] as any,
        null as any
      )
    ).toEqual([]);
  });

  it("should return empty list if undefined is passed as team name", () => {
    expect(
      getFixtureList(
        [
          ...mockMatchList,
          {
            date: null,
            match: "Match2",
            score: [1, 2],
            team1: "Manchester United",
            team2: "Chelsea",
          },
        ] as any,
        undefined as any
      )
    ).toEqual([]);
  });
});
