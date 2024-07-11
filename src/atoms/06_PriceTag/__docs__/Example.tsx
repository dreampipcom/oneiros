// @atoms/06_PriceTag/__test__/Example.tsx
import React, { FC } from 'react';
import PriceTag, { PriceTagProps } from '../PriceTag.tsx';

const Example: FC<PriceTagProps> = function ({ variant }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        maxWidth: '180px',
        margin: '0 auto',
      }}
    >
      <PriceTag variant={variant} />
    </div>
  );
};

export default Example;
