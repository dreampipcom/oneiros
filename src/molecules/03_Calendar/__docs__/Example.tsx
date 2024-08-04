// @atoms/03_CalendarView/__test__/Example.tsx
import React, { FC } from 'react';
import CalendarView, { ICalendarView } from '../CalendarView.tsx';

const Example: FC<ICalendarView> = function ({ theme = 'light', cards }) {
  return <CalendarView cards={cards} theme={theme} />;
};

export default Example;
