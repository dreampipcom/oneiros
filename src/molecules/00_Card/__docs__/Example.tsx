// @atoms/00_Card/__test__/Example.tsx
import React, { FC } from 'react';
import Card, { ICard } from '../Card.tsx';

const Example: FC<ICard> = function ({ variant, theme = 'light', selected }) {
  return <Card full selected={selected} theme={theme} variant={variant} />;
};

export default Example;
