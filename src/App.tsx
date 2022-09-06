import { generateLeagueTableData, getAllMatches, getTeamsData } from "utils";
import { data } from "./data";
import "./styles.css";

export default function App() {
  const matches = getAllMatches(data);
  const teamList = getTeamsData(matches);
  const leagueTableData = generateLeagueTableData(teamList);

  return (
    <div className="bg-slate-400">
      <h1>Hello Codesandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
