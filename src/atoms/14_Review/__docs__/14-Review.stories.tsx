// @atoms/14_Review/__test__/14-Review.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example.tsx';
import { EReviewVariant } from '../Review';

const meta: Meta<typeof Example> = {
  title: 'Atoms/14-Review',
  component: Example,
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
    variant: {
      options: Object.values(EReviewVariant),
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    variant: EReviewVariant.DEFAULT,
  },
};
export const NoBadge: Story = {
  args: {
    variant: EReviewVariant.NO_BADGE,
  },
};
