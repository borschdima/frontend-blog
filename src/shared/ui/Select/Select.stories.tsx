import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: 'Укажите значение',
    options: [
      { value: '1', content: 'some content' },
      { value: '2', content: 'second text' },
    ],
    onChange: () => {},
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
