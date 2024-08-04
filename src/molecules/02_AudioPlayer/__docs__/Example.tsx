// @atoms/02_AudioPlayer/__test__/Example.tsx
import React, { FC } from 'react';
import AudioPlayer, { ICard } from '../AudioPlayer.tsx';

const Example: FC<ICard> = function ({ theme = 'light', cards }) {
  return <AudioPlayer cards={cards} theme={theme} />;
};

export default Example;
