// @atoms/08_Image/__test__/Example.tsx
import React, { FC } from 'react';
import Image, { ImageProps } from '../Image.tsx';

const Example: FC<ImageProps> = function ({ variant }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        maxWidth: '50%',
        margin: '0 auto',
      }}
    >
      <Image variant={variant} />
    </div>
  );
};

export default Example;
