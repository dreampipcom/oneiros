// @atoms/15_Popover/__test__/15-Popover.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example.tsx';
import { EPopoverVariant } from '../Popover';

const meta: Meta<typeof Example> = {
  title: 'Atoms/15-Popover',
  component: Example,
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
    open: {
      options: [true, false],
      control: { type: 'radio' },
    },
    variant: {
      options: Object.values(EPopoverVariant),
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    variant: EPopoverVariant.DEFAULT,
  },
};
export const NoBadge: Story = {
  args: {
    variant: EPopoverVariant.NO_BADGE,
  },
};
