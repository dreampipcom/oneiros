// @atoms/01_CardGrid/__test__/01-CardGrid.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example.tsx';
import { ECardGridVariant } from '../CardGrid';

const meta: Meta<typeof Example> = {
  title: 'Molecules/01-CardGrid',
  component: Example,
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
    variant: {
      options: Object.values(ECardGridVariant),
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    variant: ECardGridVariant.DEFAULT,
  },
};
