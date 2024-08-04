// @atoms/04_MapView/__test__/Example.tsx
import React, { FC } from 'react';
import MapView, { IMapView } from '../MapView.tsx';

const Example: FC<IMapView> = function ({
  theme = 'light',
  cards,
  mapBoxToken = 'pk.eyJ1IjoiYW5nZWxvcmVhbGUiLCJhIjoiY2tobDk2bHd2MDh3cTJ6cXRja3RtN3RhdCJ9.iqcyq19xPQhIYuAWIi4VZQ',
}) {
  return <MapView cards={cards} theme={theme} mapBoxToken={mapBoxToken} />;
};

export default Example;
