// @atoms/Button/__test__/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example.tsx';
import { ButtonVariant, ButtonTheme } from '../Button.tsx';

const meta: Meta<typeof Example> = {
  title: 'Atoms/01-Button',
  component: Example,
  argTypes: {
    variant: {
      options: Object.values(ButtonVariant),
      control: { type: 'radio' },
    },
    theme: {
      options: Object.values(ButtonTheme),
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    theme: ButtonTheme.PRIMARY,
  },
};
export const Secondary: Story = {
  args: {
    theme: ButtonTheme.SECONDARY,
  },
};
export const Filled: Story = {
  args: {
    variant: ButtonVariant.FILLED,
    theme: ButtonTheme.PRIMARY,
  },
};
export const Outline: Story = {
  args: {
    variant: ButtonVariant.OUTLINE,
    theme: ButtonTheme.PRIMARY,
  },
};
