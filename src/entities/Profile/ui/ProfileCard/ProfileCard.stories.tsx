import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Filled: Story = {
  args: {
    data: {
      username: 'admin',
      first: 'dima',
      lastname: 'tester',
      age: 23,
      city: 'New York',
      currency: Currency.RUB,
      country: Country.BELARUS,
      avatar: 'https://cs8.pikabu.ru/avatars/1832/x1832143-2115011424.png',
    },
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Error: Story = {
  args: {
    error: 'error',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
