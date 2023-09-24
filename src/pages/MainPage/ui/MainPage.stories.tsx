import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Primary: Story = {
    args: {
    },
};

export const Secondary: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};