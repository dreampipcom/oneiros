// @atoms/01_Button/__test__/01-Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example.tsx';
import {
  ButtonVariant,
  EButtonTheme,
  EButtonIconPosition,
} from '../Button.tsx';

import { ESystemIcon } from '../../05_SystemIcon';

const meta: Meta<typeof Example> = {
  title: 'Atoms/01-Button',
  component: Example,
  argTypes: {
    text: {
      control: { type: 'text' },
    },
    variant: {
      options: Object.values(ButtonVariant),
      control: { type: 'radio' },
    },
    icon: {
      options: Object.values(ESystemIcon),
      control: { type: 'select' },
    },
    iconPosition: {
      options: Object.values(EButtonIconPosition),
      control: { type: 'select' },
    },
    buttonTheme: {
      options: Object.values(EButtonTheme),
      control: { type: 'radio' },
    },
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    buttonTheme: EButtonTheme.PRIMARY,
  },
};
export const Secondary: Story = {
  args: {
    buttonTheme: EButtonTheme.SECONDARY,
  },
};
export const Filled: Story = {
  args: {
    variant: ButtonVariant.FILLED,
    buttonTheme: EButtonTheme.PRIMARY,
  },
};
export const Outline: Story = {
  args: {
    variant: ButtonVariant.OUTLINE,
    buttonTheme: EButtonTheme.PRIMARY,
  },
};

export const IconButton: Story = {
  args: {
    text: '',
    icon: ESystemIcon.account,
    variant: ButtonVariant.FILLED,
    buttonTheme: EButtonTheme.PRIMARY,
  },
};
