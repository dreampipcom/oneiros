// @atoms/03_CalendarView/__test__/Example.tsx
import React, { FC } from 'react';
import CalendarView, { ICard } from '../CalendarView.tsx';

const Example: FC<ICard> = function ({ theme = 'light', cards }) {
  return <CalendarView cards={cards} theme={theme} />;
};

export default Example;
