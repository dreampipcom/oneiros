// @atoms/01_CardGrid/__test__/Example.tsx
import React, { FC } from 'react';
import CardGrid, { ICard } from '../CardGrid.tsx';

const Example: FC<ICard> = function ({ theme = 'light', cards }) {
  return <CardGrid cards={cards} theme={theme} />;
};

export default Example;
