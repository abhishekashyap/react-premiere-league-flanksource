import { FunctionComponent } from "react";
import Tab from "../Tab";
import { TabsProps } from "../types";

export const TabList: FunctionComponent<TabsProps> = ({
  activeTab,
  setActiveTab,
  tabConfig,
}) => {
  return (
    <ul className="flex flex-wrap -mb-px" role={"tablist"}>
      {tabConfig.map(({ id, name }) => (
        <Tab
          key={id}
          name={name}
          onClickHandler={() => setActiveTab(id)}
          isActive={activeTab === id}
        />
      ))}
    </ul>
  );
};
