import { FunctionComponent, PropsWithChildren } from "react";

export const PageLayout: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="m-10 flex flex-col overflow-auto mx-auto max-w-6xl">
      <h1 className="text-5xl text-center mb-12 font-semibold text-gray-700">
        Premier League
      </h1>
      <main>{children}</main>
    </div>
  );
};
