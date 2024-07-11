// @atoms/12_DateRange/__test__/12-DateRange.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example.tsx';
import { EDateRangeVariant } from '../DateRange';

import { ESystemIcon } from '../../05_SystemIcon';

const meta: Meta<typeof Example> = {
  title: 'Atoms/12-DateRange',
  component: Example,
  argTypes: {
    variant: {
      options: Object.values(EDateRangeVariant),
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
//     variant: EDateRangeVariant.STANDARD,
//   },
// };
// export const Filled: Story = {
//   args: {
//     variant: EDateRangeVariant.FILLED,
//   },
// };
export const Outlined: Story = {
  args: {
    variant: EDateRangeVariant.OUTLINED,
    icon: ESystemIcon.calendar,
  },
};
