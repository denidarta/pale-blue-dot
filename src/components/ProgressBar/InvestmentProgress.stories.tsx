import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import InvestmentProgress from "./InvestmentProgress";

const meta: Meta<typeof InvestmentProgress> = {
  title: "Components/InvestmentProgress",
  component: InvestmentProgress,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof InvestmentProgress>;

export const Default: Story = {
  args: {
    totalStock: 100,
    invested: 60,
    booked: 20,
  },
};