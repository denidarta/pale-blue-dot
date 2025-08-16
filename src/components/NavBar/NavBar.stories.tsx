import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import NavBar from "./NavBar";

const meta: Meta<typeof NavBar> = {
    title: "Components/NavBar",
    component: NavBar,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
    render: () => <NavBar />,
};
