import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CardInvestment from './CardInvestment';

const meta: Meta<typeof CardInvestment> = {
    title: 'Components/CardInvestment',
    component: CardInvestment,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        projectName: 'Eco-Friendly Housing',
        description: 'Invest in sustainable and affordable housing projects.',
        totalStock: 1000,
        invested: 450,
        booked: 200,
    },
};