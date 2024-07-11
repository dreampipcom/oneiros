// @atoms/00_Globals/__test__/00-Globals.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example.tsx';

const meta: Meta<typeof Example> = {
  title: 'Atoms/00-Globals',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Light: Story = {
  args: {
    theme: 'light',
  },
};
export const Dark: Story = {
  args: {
    theme: 'dark',
  },
};
