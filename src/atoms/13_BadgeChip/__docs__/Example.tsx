// @atoms/13_BadgeChip/__test__/Example.tsx
import React, { FC } from 'react';
import BadgeChip, { BadgeChipProps } from '../BadgeChip.tsx';

const Example: FC<BadgeChipProps> = function ({ variant }) {
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
      <BadgeChip variant={variant} />
    </div>
  );
};

export default Example;
