// @atoms/Button/__test__/Example.tsx
import React, { FC } from 'react';
import Globals, { IGlobals } from '../Globals.tsx';
import Button from '../../Button/Button.tsx';

const Example: FC<IGlobals> = function ({ theme = 'light' }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Globals theme={theme}>
        <Button> Globals Demo Button </Button>
      </Globals>
    </div>
  );
};

export default Example;
