import { MouseEventHandler } from "react";

export type TabProps = {
  name: string;
  onClickHandler: MouseEventHandler;
  isActive: boolean;
};
