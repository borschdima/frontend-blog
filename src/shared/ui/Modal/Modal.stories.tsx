import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda repellendus aliquam ut magni, nulla voluptates eius beatae nostrum in voluptatem atque, adipisci architecto natus quia nemo doloribus neque esse cum eveniet sed ipsam. Expedita fuga alias libero, deserunt quidem soluta odit eveniet, praesentium error voluptatibus recusandae suscipit illo, modi iure corrupti rerum autem debitis nihil similique incidunt sapiente cupiditate. Eum odio delectus libero. Quis, aspernatur suscipit! Quo ab illum officiis excepturi quia aliquid. Minus hic sint quos! Similique debitis voluptas ut ratione magni dolor, dolore odit temporibus excepturi voluptate eum et asperiores sapiente suscipit, minus itaque dignissimos, unde qui.',
    open: true,
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ModalDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
