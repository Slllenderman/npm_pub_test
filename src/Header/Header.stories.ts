import { Header } from './Header';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
    title: 'components/Header',
    component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};
