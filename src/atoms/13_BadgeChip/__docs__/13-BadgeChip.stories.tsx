// @atoms/13_BadgeChip/__test__/13-BadgeChip.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example.tsx';
import { EBadgeChipVariant } from '../BadgeChip';

const meta: Meta<typeof Example> = {
  title: 'Atoms/13-BadgeChip',
  component: Example,
  argTypes: {
    variant: {
      options: Object.values(EBadgeChipVariant),
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    variant: EBadgeChipVariant.PRIMARY,
  },
};
export const Secondary: Story = {
  args: {
    variant: EBadgeChipVariant.SECONDARY,
  },
};
