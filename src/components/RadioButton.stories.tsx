import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {
    name: {
      control: "text",
      description: "Name attribute for radio group",
      defaultValue: "example",
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    name: "Test",
    label: "dfa",
    value: "dfad",
    checked: false
  },
  render: (args) => {
    const labels = ["Female", "Male", "Other"];
    const [selected, setSelected] = useState(labels[0] || "");

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {labels.map((label, index) => (
          <RadioButton
            key={index}
            label={label}
            name={args.name}
            value={label}
            checked={selected === label}
            onChange={setSelected}
          />
        ))}
      </div>
    );
  },
};
