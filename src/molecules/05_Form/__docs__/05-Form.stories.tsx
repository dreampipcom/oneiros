// @atoms/05_Form/__test__/05-Form.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example.tsx';
import { EFormVariant } from '../Form';

const meta: Meta<typeof Example> = {
  title: 'Molecules/05-Form',
  component: Example,
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
    variant: {
      options: Object.values(EFormVariant),
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    variant: EFormVariant.DEFAULT,
    mapBoxToken: import.meta.env.VITE_MAPBOX_TOKEN,
  },
};
