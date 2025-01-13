// @atoms/06_Nav/__test__/Example.tsx
import React, { FC } from 'react';
import Nav, { INav } from '../Nav.tsx';

const Example: FC<INav> = function ({ theme = 'light', cards, mapBoxToken }) {
  return <Nav cards={cards} theme={theme} mapBoxToken={mapBoxToken} />;
};

export default Example;
