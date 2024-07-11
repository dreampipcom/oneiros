// @atoms/02_Typography/__test__/02-Typography.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example.tsx';
import { TypographyVariant, TypographyAlign } from '../Typography.tsx';

const meta: Meta<typeof Example> = {
  title: 'Atoms/02-Typography',
  component: Example,
  argTypes: {
    variant: {
      options: Object.values(TypographyVariant),
      control: { type: 'radio' },
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

export const XL: Story = {
  args: {
    variant: TypographyVariant.XL,
    align: TypographyAlign.LEFT,
    truncate: false,
  },
};
export const H1: Story = {
  args: {
    variant: TypographyVariant.H1,
    align: TypographyAlign.LEFT,
    truncate: false,
  },
};
export const H2: Story = {
  args: {
    variant: TypographyVariant.H2,
    align: TypographyAlign.LEFT,
    truncate: false,
  },
};
export const H3: Story = {
  args: {
    variant: TypographyVariant.H3,
    align: TypographyAlign.LEFT,
  },
};
export const H4: Story = {
  args: {
    variant: TypographyVariant.H4,
    align: TypographyAlign.LEFT,
  },
};
export const Subtitle: Story = {
  args: {
    variant: TypographyVariant.SUBTITLE,
    align: TypographyAlign.LEFT,
  },
};
export const SubtitleSmall: Story = {
  args: {
    variant: TypographyVariant.SUBTITLE_SMALL,
    align: TypographyAlign.LEFT,
  },
};
export const Body: Story = {
  args: {
    variant: TypographyVariant.BODY,
    align: TypographyAlign.LEFT,
    truncate: false,
  },
};
export const BodySmall: Story = {
  args: {
    variant: TypographyVariant.SMALL,
    align: TypographyAlign.LEFT,
    truncate: false,
  },
};
export const Button: Story = {
  args: {
    variant: TypographyVariant.BUTTON,
    align: TypographyAlign.LEFT,
    truncate: false,
  },
};
export const ButtonSmall: Story = {
  args: {
    variant: TypographyVariant.BUTTON_SMALL,
    align: TypographyAlign.LEFT,
    truncate: false,
  },
};
export const Link: Story = {
  args: {
    variant: TypographyVariant.LINK,
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
