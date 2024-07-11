// @atoms/03_Link/__test__/03-Link.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example.tsx';
import {
  TypographyVariant,
  TypographyAlign,
} from '../../02_Typography/Typography.tsx';

const meta: Meta<typeof Example> = {
  title: 'Atoms/03-Link',
  component: Example,
  argTypes: {
    href: {
      control: { type: 'text' },
    },
    align: {
      options: Object.values(TypographyAlign),
      control: { type: 'radio' },
    },
    truncate: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    variant: TypographyVariant.LINK,
    align: TypographyAlign.LEFT,
    truncate: false,
  },
};
export const LinkLarge: Story = {
  args: {
    variant: TypographyVariant.LINK_LARGE,
    align: TypographyAlign.LEFT,
    truncate: false,
  },
};
export const LinkSmall: Story = {
  args: {
    variant: TypographyVariant.LINK_SMALL,
    align: TypographyAlign.LEFT,
    truncate: false,
  },
};
