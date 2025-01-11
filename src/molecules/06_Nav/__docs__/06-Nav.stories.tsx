// @atoms/06_Nav/__test__/06-Nav.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example.tsx';
import { ENavVariant } from '../Nav';

const meta: Meta<typeof Example> = {
  title: 'Molecules/06-Nav',
  component: Example,
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
    variant: {
      options: Object.values(ENavVariant),
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    variant: ENavVariant.DEFAULT,
    mapBoxToken: import.meta.env.VITE_MAPBOX_TOKEN,
  },
};
