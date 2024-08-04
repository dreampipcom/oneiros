// @atoms/02_AudioPlayer/__test__/02-AudioPlayer.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example.tsx';
import { EAudioPlayerVariant } from '../AudioPlayer';

const meta: Meta<typeof Example> = {
  title: 'Molecules/02-AudioPlayer',
  component: Example,
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
    variant: {
      options: Object.values(EAudioPlayerVariant),
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    variant: EAudioPlayerVariant.DEFAULT,
  },
};
