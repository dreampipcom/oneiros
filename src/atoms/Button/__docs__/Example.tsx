// @atoms/Button/__test__/Example.tsx
import React, { FC } from 'react';
import Button, { ButtonProps } from '../Button.tsx';

const Example: FC<ButtonProps> = function ({ variant, theme }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Button variant={variant} theme={theme} />
    </div>
  );
};

export default Example;
