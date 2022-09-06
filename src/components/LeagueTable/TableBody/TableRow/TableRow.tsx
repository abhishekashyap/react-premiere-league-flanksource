import { FunctionComponent, PropsWithChildren } from "react";

export const TableRow: FunctionComponent<PropsWithChildren> = ({
  children,
}) => (
  <tr className="cursor-pointer transition-all hover:bg-slate-100">
    {children}
  </tr>
);
