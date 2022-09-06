import { FunctionComponent } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { LeagueTableProps } from "./types";

export const LeagueTable: FunctionComponent<LeagueTableProps> = ({
  headings,
  dataList,
}) => (
  <table>
    <TableHead headings={headings} />
    <TableBody dataList={dataList} />
  </table>
);
