// @atoms/07_Dropdown/__test__/07-Dropdown.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example.tsx';
import { EDropdownVariant } from '../Dropdown';

import { ESystemIcon } from '../../05_SystemIcon';

const meta: Meta<typeof Example> = {
  title: 'Atoms/07-Dropdown',
  component: Example,
  argTypes: {
    variant: {
      options: Object.values(EDropdownVariant),
      control: { type: 'radio' },
    },
    icon: {
      options: Object.values(ESystemIcon),
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

// export const Standard: Story = {
//   args: {
//     variant: EDropdownVariant.STANDARD,
//   },
// };
// export const Filled: Story = {
//   args: {
//     variant: EDropdownVariant.FILLED,
//   },
// };
export const Outlined: Story = {
  args: {
    variant: EDropdownVariant.OUTLINED,
    icon: ESystemIcon.account,
  },
};
