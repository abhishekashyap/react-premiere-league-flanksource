import FixtureList from "components/FixtureList";
import LeagueTable from "components/LeagueTable";
import { Route, Routes } from "react-router-dom";
import { generateLeagueTableData, getAllMatches, getTeamsData } from "utils";
import { data } from "./data";
import "./styles.css";

export default function App() {
  const matches = getAllMatches(data);
  const teamList = getTeamsData(matches);
  const leagueTableData = generateLeagueTableData(teamList);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <LeagueTable
            headings={[
              "Position",
              "Club",
              "Played",
              "Won",
              "Drawn",
              "Lost",
              "Goal Difference",
              "Points",
            ]}
            dataList={leagueTableData}
          />
        }
      />
      <Route
        path=":teamName/fixtures"
        element={<FixtureList matches={matches} />}
      />
    </Routes>
  );
}
