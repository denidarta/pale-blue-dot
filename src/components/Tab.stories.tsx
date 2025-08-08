import type { Meta } from "@storybook/react";
import { useState } from "react";
import Tab from "./Tab";

const meta: Meta<typeof Tab> = {
  title: "Components/Tab",
  component: Tab,
};

export default meta;

type Args = {
  tabCount: number;
  labels: string[];
};

export const Default = (args: Args) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = Array.from({ length: args.tabCount }, (_, index) => (
    <Tab
      key={index}
      label={args.labels[index] ?? `Tab ${index + 1}`}
      onClick={() => setActiveTab(index)}
      active={activeTab === index}
    />
  ));

  return <div>{tabs}</div>;
};

Default.args = {
  tabCount: 3,
  labels: ["Tab 1", "Tab 2", "Tab 3"],
};
