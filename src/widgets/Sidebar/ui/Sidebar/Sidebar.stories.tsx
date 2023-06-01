import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppContextDecorator } from 'shared/config/storybook/decorators/AppContextDecorator';

import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const LightCollapsed: Story = {
  args: {},
  decorators: [AppContextDecorator({ isSidebarCollapsed: true }), ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkCollapsed: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), AppContextDecorator({ isSidebarCollapsed: true })],
};
