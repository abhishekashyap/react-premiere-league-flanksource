import { getTeams } from "./getTeams";

const mockTeamsNamesArr = ["Manchester City", "Manchester United", "Liverpool"];

const expectedReturn = [
  { team1: "Manchester City" },
  { team2: "Manchester United" },
  { team3: "Liverpool" },
];

describe("getTeams", () => {
  it("should return enumerated team lists array of objects", () => {
    expect(getTeams(mockTeamsNamesArr)).toEqual(expectedReturn);
  });

  it("should return empty array if empty array is provided as argument", () => {
    expect(getTeams([])).toEqual([]);
  });

  it("should return empty array if null is provided as argument", () => {
    expect(getTeams(null as any)).toEqual([]);
  });

  it("should return empty array if undefined is provided as argument", () => {
    expect(getTeams(undefined as any)).toEqual([]);
  });
});
