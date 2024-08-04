// @atoms/02_AudioPlayer/__test__/Example.tsx
import React, { FC } from 'react';
import AudioPlayer, { IAudioPlayer } from '../AudioPlayer.tsx';

const Example: FC<IAudioPlayer> = function ({ theme = 'light', cards }) {
  return <AudioPlayer cards={cards} theme={theme} />;
};

export default Example;
