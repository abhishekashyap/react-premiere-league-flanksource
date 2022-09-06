import { FunctionComponent, PropsWithChildren } from "react";

export const TableData: FunctionComponent<PropsWithChildren> = ({
  children,
}) => (
  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
    {children}
  </td>
);
