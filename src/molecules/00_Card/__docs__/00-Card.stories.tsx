// @atoms/00_Card/__test__/00-Card.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example.tsx';
import { ECardVariant } from '../Card';

const meta: Meta<typeof Example> = {
  title: 'Molecules/00-Card',
  component: Example,
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
    variant: {
      options: Object.values(ECardVariant),
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    variant: ECardVariant.DEFAULT,
  },
};
