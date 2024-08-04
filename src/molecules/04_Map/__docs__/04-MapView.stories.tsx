// @atoms/04_MapView/__test__/04-MapView.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example.tsx';
import { EMapViewVariant } from '../MapView';

const meta: Meta<typeof Example> = {
  title: 'Molecules/04-MapView',
  component: Example,
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
    variant: {
      options: Object.values(EMapViewVariant),
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    variant: EMapViewVariant.DEFAULT,
  },
};
