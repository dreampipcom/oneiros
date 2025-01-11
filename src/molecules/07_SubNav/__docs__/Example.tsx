// @atoms/07_SubNav/__test__/Example.tsx
import React, { FC } from 'react';
import SubNav, { ISubNav } from '../SubNav.tsx';

const Example: FC<ISubNav> = function ({
  theme = 'light',
  cards,
  mapBoxToken,
}) {
  return <SubNav cards={cards} theme={theme} mapBoxToken={mapBoxToken} />;
};

export default Example;
