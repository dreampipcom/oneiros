// @atoms/07_SubNav/__test__/07-SubNav.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example.tsx';
import { ESubNavVariant } from '../SubNav';

const meta: Meta<typeof Example> = {
  title: 'Molecules/07-SubNav',
  component: Example,
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
    variant: {
      options: Object.values(ESubNavVariant),
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    variant: ESubNavVariant.DEFAULT,
    mapBoxToken: import.meta.env.VITE_MAPBOX_TOKEN,
  },
};
