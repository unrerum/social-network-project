import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Primary: Story = {
    args: {
    },
};

export const Secondary: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};