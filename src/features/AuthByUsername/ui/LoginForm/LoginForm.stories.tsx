import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
  args: {},
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({ loginForm: { username: 'admin', password: '123' } })],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ loginForm: { username: 'admin', password: '123' } })],
};

export const DarkWithError: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ loginForm: { username: 'admin', password: '123', error: 'error' } })],
};
