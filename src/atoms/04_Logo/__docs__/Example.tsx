// @atoms/04_Logo/__test__/Example.tsx
import React, { FC } from 'react';
import Logo, { LogoProps } from '../Logo.tsx';

const Example: FC<LogoProps> = function ({ theme, size }) {
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
      <Logo theme={theme} size={size} />
    </div>
  );
};

export default Example;
