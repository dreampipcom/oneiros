// @atoms/04_MapView/__test__/Example.tsx
import React, { FC } from 'react';
import MapView, { ICard } from '../MapView.tsx';

const Example: FC<ICard> = function ({ theme = 'light', cards }) {
  return <MapView cards={cards} theme={theme} />;
};

export default Example;
