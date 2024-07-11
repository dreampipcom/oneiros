// @atoms/09_TextInput/__test__/09-TextInput.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example.tsx';
import { ETextInputVariant } from '../TextInput';

import { ESystemIcon } from '../../05_SystemIcon';

const meta: Meta<typeof Example> = {
  title: 'Atoms/09-TextInput',
  component: Example,
  argTypes: {
    variant: {
      options: Object.values(ETextInputVariant),
      control: { type: 'radio' },
    },
    icon: {
      options: Object.values(ESystemIcon),
      control: { type: 'select' },
    },
    theme: {
      options: Object.values(['light', 'dark']),
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

// export const Standard: Story = {
//   args: {
//     variant: ETextInputVariant.STANDARD,
//   },
// };
// export const Filled: Story = {
//   args: {
//     variant: ETextInputVariant.FILLED,
//   },
// };
export const Outlined: Story = {
  args: {
    variant: ETextInputVariant.OUTLINED,
    icon: ESystemIcon.account,
  },
};
