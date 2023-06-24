import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import AvatarSrc from './avatar.jpg';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: AvatarSrc,
    alt: 'avatar',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
