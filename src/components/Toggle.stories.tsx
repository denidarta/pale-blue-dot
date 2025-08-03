import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./Toggle";
import { LabeledToggle } from "./LabeledToggle";

const meta: Meta = {
  title: "Components/Toggle",
};

export default meta;

// Stories for Toggle
export const BasicToggle: React.FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Toggle checked={checked} onChange={setChecked} label="Enable feature" />
  );
};

// Stories for LabeledToggle
export const Labeled: React.FC = () => {
  const [checked, setChecked] = useState(false);
  return <LabeledToggle checked={checked} onChange={setChecked} />;
};
