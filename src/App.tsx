import FixtureList from "components/FixtureList";
import LeagueTable from "components/LeagueTable";
import PageLayout from "layout";
import { Route, Routes } from "react-router-dom";
import { generateLeagueTableData, getAllMatches, getTeamsData } from "utils";
import { TableHeadings } from "./constants";
import { data } from "./data";
import "./styles.css";

export default function App() {
  const matches = getAllMatches(data);
  const teamList = getTeamsData(matches);
  const leagueTableData = generateLeagueTableData(teamList);

  return (
    <PageLayout>
      <Routes>
        <Route
          path="/"
          element={
            <LeagueTable headings={TableHeadings} dataList={leagueTableData} />
          }
        />
        <Route
          path=":teamName/fixtures"
          element={<FixtureList matches={matches} />}
        />
      </Routes>
    </PageLayout>
  );
}
