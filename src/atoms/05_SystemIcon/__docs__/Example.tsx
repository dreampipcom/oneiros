// @atoms/05_SystemIcon/__test__/Example.tsx
import React, { FC } from 'react';
import SystemIcon, { SystemIconProps } from '../SystemIcon.tsx';

const Example: FC<SystemIconProps> = function ({ icon, theme, size }) {
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
      <SystemIcon icon={icon} theme={theme} size={size} />
    </div>
  );
};

export default Example;
