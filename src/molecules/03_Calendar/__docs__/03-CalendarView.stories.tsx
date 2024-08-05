// @atoms/03_CalendarView/__test__/03-CalendarView.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example.tsx';
import { ECalendarViewVariant } from '../CalendarView';

const meta: Meta<typeof Example> = {
  title: 'Molecules/03-CalendarView',
  component: Example,
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
    variant: {
      options: Object.values(ECalendarViewVariant),
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    variant: ECalendarViewVariant.DEFAULT,
  },
};
