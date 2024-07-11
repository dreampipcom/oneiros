// @atoms/04_Logo/__test__/04-Logo.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example.tsx';
import { ELogoSize } from '../Logo.tsx';

const meta: Meta<typeof Example> = {
  title: 'Atoms/04-Logo',
  component: Example,
  argTypes: {
    theme: {
      options: Object.values(['light', 'dark']),
      control: { type: 'radio' },
    },
    size: {
      options: Object.values(ELogoSize),
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    size: ELogoSize.LARGE,
  },
};
export const Inverse: Story = {
  args: {
    size: ELogoSize.LARGE,
    theme: 'dark',
  },
};
export const Medium: Story = {
  args: {
    size: ELogoSize.MEDIUM,
  },
};
export const Small: Story = {
  args: {
    size: ELogoSize.SMALL,
  },
};
