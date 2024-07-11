// @atoms/02_Typography/__test__/Example.tsx
import React, { FC } from 'react';
import Typography, { TypographyProps } from '../Typography.tsx';

const Example: FC<TypographyProps> = function ({
  variant,
  align,
  truncate,
  as,
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        maxWidth: '80vw',
        margin: '0 auto',
      }}
    >
      <Typography variant={variant} align={align} truncate={truncate} as={as} />
    </div>
  );
};

export default Example;
