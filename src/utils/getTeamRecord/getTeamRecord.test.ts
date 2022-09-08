import { TeamList } from "../types";
import { getTeamRecord } from "./getTeamRecord";

const mockTeamName1 = "Manchester United";
const mockTeamName2 = "Liverpool";

export const defaultValue = {
  win: 0,
  loss: 0,
  draw: 0,
  gamesPlayed: 0,
  goals: {
    concede: 0,
    score: 0,
  },
};

const mockTeamList: TeamList = {
  "Manchester United": {
    win: 0,
    loss: 0,
    draw: 0,
    gamesPlayed: 0,
    goals: {
      concede: 0,
      score: 0,
    },
  },
  Liverpool: {
    win: 0,
    loss: 0,
    draw: 0,
    gamesPlayed: 0,
    goals: {
      concede: 0,
      score: 0,
    },
  },
};

describe("getTeamRecord", () => {
  it("should return updated list if team1 wins", () => {
    expect(
      getTeamRecord(mockTeamName1, mockTeamName2, [1, 2], mockTeamList)
    ).toEqual({
      [mockTeamName1]: {
        ...defaultValue,
        loss: 1,
      },
      [mockTeamName2]: {
        ...defaultValue,
        win: 1,
      },
    });
  });

  it("should return updated list if team2 wins", () => {
    expect(
      getTeamRecord(mockTeamName1, mockTeamName2, [2, 1], mockTeamList)
    ).toEqual({
      [mockTeamName1]: {
        ...defaultValue,
        win: 1,
      },
      [mockTeamName2]: {
        ...defaultValue,
        loss: 1,
      },
    });
  });

  it("should return updated list if games ends in draw", () => {
    expect(
      getTeamRecord(mockTeamName1, mockTeamName2, [1, 1], mockTeamList)
    ).toEqual({
      [mockTeamName1]: {
        ...defaultValue,
        draw: 1,
      },
      [mockTeamName2]: {
        ...defaultValue,
        draw: 1,
      },
    });
  });

  it("should return updated list as draw if score is passed as empty array", () => {
    expect(
      getTeamRecord(mockTeamName1, mockTeamName2, [], mockTeamList)
    ).toEqual({
      [mockTeamName1]: {
        ...defaultValue,
        draw: 1,
      },
      [mockTeamName2]: {
        ...defaultValue,
        draw: 1,
      },
    });
  });

  it("should throw error if score is passed as null", () => {
    expect(() =>
      getTeamRecord(mockTeamName1, mockTeamName2, null as any, mockTeamList)
    ).toThrowError(
      "Invalid score. Please verify the score data that is being passed."
    );
  });

  it("should throw error if score is passed as undefined", () => {
    expect(() =>
      getTeamRecord(
        mockTeamName1,
        mockTeamName2,
        undefined as any,
        mockTeamList
      )
    ).toThrowError(
      "Invalid score. Please verify the score data that is being passed."
    );
  });
});
