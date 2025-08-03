import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Disable the button",
      defaultValue: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Active: Story = {
  args: {
    label: "Click me",
    disabled: false,
  },
  render: (args) => <Button {...args} />,
};
