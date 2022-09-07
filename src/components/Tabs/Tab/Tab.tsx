import { FunctionComponent } from "react";
import { TabProps } from "./types";

export const Tab: FunctionComponent<TabProps> = ({
  name,
  onClickHandler,
  isActive,
}) => (
  <li
    className={`flex-1 text-center text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium border-transparent border-b-2 ${
      isActive
        ? "text-blue-500 border-blue-500 hover:text-blue-500 hover:border-blue-500"
        : ""
    }`}
    role={"button"}
    onClick={onClickHandler}
  >
    {name}
  </li>
);
