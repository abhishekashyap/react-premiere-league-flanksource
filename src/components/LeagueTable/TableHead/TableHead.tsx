import { FunctionComponent } from "react";
import TableHeading from "./TableHeading";
import { TableHeadProps } from "./types";

export const TableHead: FunctionComponent<TableHeadProps> = ({ headings }) => (
  <thead>
    <tr>
      {headings.map((th) => (
        <TableHeading key={th}>{th}</TableHeading>
      ))}
    </tr>
  </thead>
);
