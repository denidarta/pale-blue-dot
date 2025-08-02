import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {
    labels: {
      control: "array",
      description: "Array of labels for radio buttons",
      defaultValue: ["Option 1", "Option 2"],
    },
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
    labels: ["Female", "Male", "Other"],
    name: "Test",
    label: "dfa",
    value: "dfad",
    checked: false
  },
  render: ({ labels, name }) => {
    const [selected, setSelected] = useState(labels[0] || "");

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {labels.map((label, index) => (
          <RadioButton
            key={index}
            label={label}
            name={name}
            value={label}
            checked={selected === label}
            onChange={setSelected}
          />
        ))}
      </div>
    );
  },
};
