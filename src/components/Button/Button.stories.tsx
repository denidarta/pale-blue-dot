import { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { Button } from "./Button";
import { DemoIcon } from "../DemoIcon";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  tags: ["autodocs"],
  component: Button,
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Disable the button",
      defaultValue: false,
    },
    icon: {
      control: "boolean",
      description: "Show icon",
      defaultValue: false,
      table: { category: "Icon" },
    },
    iconPosition: {
      control: { type: "radio" },
      options: ["left", "right"],
      description: "Icon position",
      defaultValue: "left",
      table: { category: "Icon" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Active: Story = {
  args: {
    label: "Button Example",
    disabled: false,
    icon: false,
    iconPosition: "left",
  },
  render: (args) => {
    const { icon, ...rest } = args;
    return <Button {...rest} icon={icon ? <DemoIcon /> : undefined} />;
  },
};
