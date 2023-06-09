import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { Button, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Test button',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Clear: Story = {
  args: {
    children: 'Test button',
    theme: ButtonTheme.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ClearDark: Story = {
  args: {
    children: 'Test button',
    theme: ButtonTheme.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Outline: Story = {
  args: {
    children: 'Outline light',
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const OutlineDark: Story = {
  args: {
    children: 'Outline dark',
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Link: Story = {
  args: {
    children: 'Test button',
    theme: ButtonTheme.LINK,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const LinkDark: Story = {
  args: {
    children: 'Test button',
    theme: ButtonTheme.LINK,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Disabled: Story = {
  args: {
    children: 'Test button',
    theme: ButtonTheme.LINK,
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
