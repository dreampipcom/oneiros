// @atoms/07_Dropdown/__test__/Example.tsx
import React, { FC } from 'react';
import Dropdown, { DropdownProps } from '../Dropdown.tsx';

const Example: FC<DropdownProps> = function ({
  variant,
  icon = 'activity-heart',
}) {
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
      <Dropdown variant={variant} icon={icon} />
    </div>
  );
};

export default Example;
