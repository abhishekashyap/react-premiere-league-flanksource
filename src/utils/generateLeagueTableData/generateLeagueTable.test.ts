import { generateLeagueTableData } from "./generateLeagueTableData";

const testTeam = "Manchester United";
const WIN_PTS = 3;
const DRAW_PTS = 1;
const LOSE_PTS = 0;

const mockTeamList = {
  "Leicester City": {
    win: 3,
    loss: 0,
    draw: 3,
    gamesPlayed: 6,
    goals: {
      concede: 3,
      score: 8,
    },
  },
  "Manchester United": {
    win: 1,
    loss: 2,
    draw: 3,
    gamesPlayed: 6,
    goals: {
      concede: 9,
      score: 11,
    },
  },
};
const expectedReturn = [
  {
    draw: 3,
    gamesPlayed: 6,
    goals: { concede: 3, score: 8 },
    loss: 0,
    name: "Leicester City",
    points: 12,
    win: 3,
  },
  {
    draw: 3,
    gamesPlayed: 6,
    goals: { concede: 9, score: 11 },
    loss: 2,
    name: "Manchester United",
    points: 6,
    win: 1,
  },
];

describe("generateLeagueTableData", () => {
  it("should return formatted match data", () => {
    expect(generateLeagueTableData(mockTeamList)).toEqual(expectedReturn);
  });

  it("should return empty list if data passed is undefined", () => {
    expect(generateLeagueTableData(null as any)).toEqual([]);
  });

  it("should return empty list if data passed is null", () => {
    expect(generateLeagueTableData(undefined as any)).toEqual([]);
  });

  it("should return team with more points at zeroth index of array", () => {
    const res = generateLeagueTableData(mockTeamList);
    expect(res[0].points > res[1].points).toBe(true);
  });

  it("should correctly calculate the points when WIN=3, DRAW=1, LOSE=0", () => {
    const team = mockTeamList[testTeam];
    const manuallyCalculatedPoints =
      team.win * WIN_PTS + team.draw * DRAW_PTS + team.loss * LOSE_PTS;

    const res = generateLeagueTableData(mockTeamList);

    const idx = res.findIndex((team) => team.name === testTeam);
    expect(res[idx].points === manuallyCalculatedPoints).toBe(true);
  });
});
