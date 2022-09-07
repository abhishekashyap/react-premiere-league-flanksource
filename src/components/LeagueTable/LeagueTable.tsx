import Subheader from "components/Subheader";
import { FunctionComponent } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { LeagueTableProps } from "./types";

export const LeagueTable: FunctionComponent<LeagueTableProps> = ({
  headings,
  dataList,
}) => (
  <>
    <Subheader>League Table</Subheader>
    <table className="w-full">
      <TableHead headings={headings} />
      <TableBody dataList={dataList} />
    </table>
  </>
);
