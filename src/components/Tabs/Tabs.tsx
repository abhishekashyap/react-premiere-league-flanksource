import { FunctionComponent } from "react";
import TabList from "./TabList";
import TabPanel from "./TabPanel";
import { TabsProps } from "./types";

export const Tabs: FunctionComponent<TabsProps> = ({
  activeTab,
  setActiveTab,
  tabConfig,
}) => (
  <>
    <TabList
      activeTab={activeTab}
      tabConfig={tabConfig}
      setActiveTab={setActiveTab}
    />
    <TabPanel activeTab={activeTab} tabConfig={tabConfig} />
  </>
);
