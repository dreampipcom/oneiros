// @atoms/14_Review/__test__/Example.tsx
import React, { FC } from 'react';
import Review, { ReviewProps } from '../Review.tsx';

const Example: FC<ReviewProps> = function ({ variant, theme }) {
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
      <Review variant={variant} theme={theme}>
        4.5/5
      </Review>
    </div>
  );
};

export default Example;
