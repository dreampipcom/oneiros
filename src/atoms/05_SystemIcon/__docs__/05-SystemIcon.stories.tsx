// @atoms/05_SystemIcon/__test__/05-SystemIcon.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example.tsx';
import { EIconSize } from '../SystemIcon';
import { ESystemIcon } from '../assets/index.ts';

const meta: Meta<typeof Example> = {
  title: 'Atoms/05-SystemIcon',
  component: Example,
  argTypes: {
    icon: {
      options: Object.values(ESystemIcon),
      control: { type: 'select' },
    },
    theme: {
      options: Object.values(['light', 'dark']),
      control: { type: 'radio' },
    },
    size: {
      options: Object.values(EIconSize),
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    size: EIconSize.LARGE,
  },
};
export const Inverse: Story = {
  args: {
    size: EIconSize.LARGE,
    theme: 'dark',
  },
};
export const Medium: Story = {
  args: {
    size: EIconSize.MEDIUM,
  },
};
export const Small: Story = {
  args: {
    size: EIconSize.SMALL,
  },
};
