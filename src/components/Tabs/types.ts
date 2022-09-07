export type TabsProps = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  tabConfig: TabConfig[];
};

export type TabConfig = {
  id: string;
  name: string;
  content: JSX.Element;
};
