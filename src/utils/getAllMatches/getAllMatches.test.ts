import { getAllMatches } from "./getAllMatches";

const mockTeamsNamesArr = [
  {
    score: {
      "Manchester United": 1,
      "Leicester City": 2,
    },
    date: "2021-05-04T14:00:00",
  },
  {
    score: { "Manchester United": null, Liverpool: null },
    date: "2021-05-09T11:00:00",
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
    score: [null, null],
    team1: "Manchester United",
    team2: "Liverpool",
  },
];

describe("getAllMatches", () => {
  it("should return formatted match data", () => {
    expect(getAllMatches(mockTeamsNamesArr)).toEqual(expectedReturn);
  });

  it("should return empty list if data passed is undefined", () => {
    expect(getAllMatches(null as any)).toEqual([]);
  });

  it("should return empty list if data passed is null", () => {
    expect(getAllMatches(undefined as any)).toEqual([]);
  });

  it("should return the list if data passed has date as null", () => {
    expect(
      getAllMatches([
        ...mockTeamsNamesArr,
        {
          date: null,
          score: {
            "Manchester United": 1,
            "Leicester City": 2,
          },
        },
      ] as any)
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

  it("should return empty score array is score is an empty object", () => {
    expect(
      getAllMatches([
        ...mockTeamsNamesArr,
        {
          date: "2021-05-19T11:00:00",
          score: {},
        },
      ] as any)
    ).toEqual([
      ...expectedReturn,
      {
        date: "2021-05-19T11:00:00",
        match: "Match2",
        score: [],
      },
    ]);
  });

  it("should throw error if score is null", () => {
    expect(() =>
      getAllMatches([
        ...mockTeamsNamesArr,
        {
          date: "2021-05-19T11:00:00",
          score: null,
        },
      ] as any)
    ).toThrow(
      "Incorrect data passed. Please verify the data that is being passed."
    );
  });
});
