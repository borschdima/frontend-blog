import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { BurgerBtn } from './BurgerBtn';

const meta: Meta<typeof BurgerBtn> = {
  title: 'widgets/BurgerBtn',
  component: BurgerBtn,
};

export default meta;

type Story = StoryObj<typeof BurgerBtn>;

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
