// @atoms/04_MapView/__test__/Example.tsx
import React, { FC } from 'react';
import MapView, { IMapView } from '../MapView.tsx';

const Example: FC<IMapView> = function ({
  theme = 'light',
  cards,
  mapBoxToken,
}) {
  return <MapView cards={cards} theme={theme} mapBoxToken={mapBoxToken} />;
};

export default Example;
