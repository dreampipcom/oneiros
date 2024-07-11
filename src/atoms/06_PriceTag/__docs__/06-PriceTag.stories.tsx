// @atoms/06_PriceTag/__test__/06-PriceTag.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example.tsx';
import { EPriceTagVariant } from '../PriceTag';

const meta: Meta<typeof Example> = {
  title: 'Atoms/06-PriceTag',
  component: Example,
  argTypes: {
    variant: {
      options: Object.values(EPriceTagVariant),
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    variant: EPriceTagVariant.NORMAL,
  },
};
export const PriceLarge: Story = {
  args: {
    variant: EPriceTagVariant.LARGE,
  },
};
export const PriceSmall: Story = {
  args: {
    variant: EPriceTagVariant.SMALL,
  },
};
