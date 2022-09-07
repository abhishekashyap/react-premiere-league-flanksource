import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import TableData from "./TableData";
import TableRow from "./TableRow";
import { TableBodyProps } from "./types";

export const TableBody: FunctionComponent<TableBodyProps> = ({ dataList }) => (
  <tbody>
    {dataList.map(
      ({ name, gamesPlayed, win, draw, loss, goals, points }, idx) => (
        <TableRow key={name}>
          <TableData>{idx + 1}</TableData>
          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 h-full hover:underline">
            <Link to={`${name}/fixtures`}>{name}</Link>
          </th>
          <TableData>{gamesPlayed}</TableData>
          <TableData>{win}</TableData>
          <TableData>{draw}</TableData>
          <TableData>{loss}</TableData>
          <TableData>{goals?.score - goals?.concede}</TableData>
          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center text-blueGray-700 ">
            {points}
          </th>
        </TableRow>
      )
    )}
  </tbody>
);
