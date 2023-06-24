import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { CurrencySelect } from './CurrencySelect';

const meta: Meta<typeof CurrencySelect> = {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
};

export default meta;

type Story = StoryObj<typeof CurrencySelect>;

export const Default: Story = {
  args: {
    onChange: () => {},
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
