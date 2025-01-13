// @atoms/15_Popover/__test__/Example.tsx
import React, { FC } from 'react';
import Popover, { PopoverProps } from '../Popover.tsx';
import Typography from '../../02_Typography/Typography.tsx';

const Example: FC<PopoverProps> = function ({ variant, theme, open }) {
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
      <Popover variant={variant} theme={theme} open={open}>
        <Typography className="m-a8 !text-body-dark dark:!text-body-light">
          Hello world.
        </Typography>
      </Popover>
    </div>
  );
};

export default Example;
