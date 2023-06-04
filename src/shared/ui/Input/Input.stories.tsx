import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
  args: {
    value: 'some value',
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const InputDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
