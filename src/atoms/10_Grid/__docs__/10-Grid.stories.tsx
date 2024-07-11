// @atoms/10_Grid/__test__/10-Grid.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example.tsx';
import { EGridVariant, EGradientVariant } from '../Grid';

const DEFAULT_BACKGROUND = {
  mobile: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Pink_blob.svg',
  desktop: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Pink_blob.svg',
};

const meta: Meta<typeof Example> = {
  title: 'Atoms/10-Grid',
  component: Example,
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
    variant: {
      options: Object.values(EGridVariant),
      control: { type: 'radio' },
    },
    gradient: {
      options: Object.values(EGradientVariant),
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    variant: EGridVariant.DEFAULT,
    background: DEFAULT_BACKGROUND,
  },
};
export const Gradient: Story = {
  args: {
    variant: EGridVariant.DEFAULT,
    gradient: EGradientVariant.SOFT,
  },
};
export const TwelveColumns: Story = {
  args: {
    variant: EGridVariant.TWELVE_COLUMNS,
  },
};
export const SixColumns: Story = {
  args: {
    variant: EGridVariant.SIX_COLUMNS,
  },
};
