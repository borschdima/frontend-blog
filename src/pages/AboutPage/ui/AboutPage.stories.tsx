import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage,
};

export default meta;

type Story = StoryObj<typeof AboutPage>;

export const Light: Story = {
  args: {},
};

export const Dart: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};