import { FunctionComponent, PropsWithChildren } from "react";

export const Subheader: FunctionComponent<PropsWithChildren> = ({
  children,
}) => (
  <h2 className="text-3xl text-center mb-8 font-semibold text-gray-500">
    {children}
  </h2>
);
