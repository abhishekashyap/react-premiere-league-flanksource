import LeagueTable from "components/LeagueTable";
import { generateLeagueTableData, getAllMatches, getTeamsData } from "utils";
import { data } from "./data";
import "./styles.css";

export default function App() {
  const matches = getAllMatches(data);
  const teamList = getTeamsData(matches);
  const leagueTableData = generateLeagueTableData(teamList);

  return (
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
  );
}
