// @atoms/08_Image/__test__/08-Image.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example.tsx';
import { EImageVariant } from '../Image';

const meta: Meta<typeof Example> = {
  title: 'Atoms/08-Image',
  component: Example,
  argTypes: {
    variant: {
      options: Object.values(EImageVariant),
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const NoRatio: Story = {
  args: {
    variant: EImageVariant.NO_RATIO,
  },
};
export const OnePerOne: Story = {
  args: {
    variant: EImageVariant.ONE_PER_ONE,
  },
};
export const SixteenPerNine: Story = {
  args: {
    variant: EImageVariant.SIXTEEN_PER_NINE,
  },
};
export const ThreePerTwo: Story = {
  args: {
    variant: EImageVariant.THREE_PER_TWO,
  },
};
export const FourPerThree: Story = {
  args: {
    variant: EImageVariant.FOUR_PER_THREE,
  },
};
