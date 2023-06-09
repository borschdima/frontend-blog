import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  args: {},
};

export default meta;

type Story = StoryObj<typeof Text>;

export const TextTitle: Story = {
  args: {
    title: 'Какой-то заголовок',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const TextParagraph: Story = {
  args: {
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam modi voluptatibus repudiandae natus a eum animi sed magni, explicabo numquam.',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const TitleWithParagraph: Story = {
  args: {
    title: 'Какой-то заголовок',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam modi voluptatibus repudiandae natus a eum animi sed magni, explicabo numquam.',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ErrorText: Story = {
  args: {
    title: 'Какой-то заголовок',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam modi voluptatibus repudiandae natus a eum animi sed magni, explicabo numquam.',
    theme: TextTheme.ERROR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
