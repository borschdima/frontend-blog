import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
  args: {},
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const LoginFormDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
