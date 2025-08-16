import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CardInvestment from './CardInvestment';

const meta: Meta<typeof CardInvestment> = {
    title: 'Components/CardInvestment',
    component: CardInvestment,
    tags: ['autodocs'],
    parameters: { layout: 'centered', },
    argTypes: {
        projectName: { control: 'text' },
        companyName: { control: 'text' },
        totalStock: { control: 'number' },
        invested: { control: 'number' },
        booked: { control: 'number' },
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        projectName: 'Project Alpha',
        companyName: 'Tech Innovations Inc.',
        totalStock: 100,
        invested: 60,
        booked: 20,
    },
};