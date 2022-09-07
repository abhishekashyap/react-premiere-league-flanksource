import { Tabs } from "components/Tabs/Tabs";
import { FunctionComponent, useState } from "react";
import { useParams } from "react-router-dom";
import { getFixtureList, getFutureGames, getPastGames } from "utils";
import MatchList from "./MatchList";
import { FixtureListProps } from "./types";

// 5 May 2021 at 2pm
const CURRENT_DATE = new Date(2021, 4, 5, 14);

export const FixtureList: FunctionComponent<FixtureListProps> = ({
  matches,
}) => {
  const [activeTab, setActiveTab] = useState("PAST_GAMES");
  const params = useParams<{ teamName: string }>();

  const fixtureList = getFixtureList(matches, params.teamName!);

  const TABS = [
    {
      id: "PAST_GAMES",
      name: "Past Games",
      content: <MatchList matches={getPastGames(fixtureList, CURRENT_DATE)} />,
    },
    {
      id: "FUTURE_GAMES",
      name: "Future Games",
      content: (
        <MatchList matches={getFutureGames(fixtureList, CURRENT_DATE)} />
      ),
    },
  ];

  return (
    <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabConfig={TABS} />
  );
};