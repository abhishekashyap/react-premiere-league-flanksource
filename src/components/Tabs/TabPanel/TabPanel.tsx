import { FunctionComponent } from "react";
import { TablePanelProps } from "./types";

export const TabPanel: FunctionComponent<TablePanelProps> = ({
  activeTab,
  tabConfig,
}) => {
  const tabContent = tabConfig.find((tab) => tab.id === activeTab)?.content;
  return <section role={"tabpanel"}>{tabContent}</section>;
};
