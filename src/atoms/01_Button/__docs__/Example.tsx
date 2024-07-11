// @atoms/01_Button/__test__/Example.tsx
import React, { FC } from 'react';
import Button, { ButtonProps } from '../Button.tsx';

const Example: FC<ButtonProps> = function ({
  variant,
  theme,
  buttonTheme,
  icon,
  iconPosition,
  text = 'Default value',
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 'fit-content',
        height: '100%',
        margin: '0 auto',
      }}
    >
      <Button
        icon={icon}
        iconPosition={iconPosition}
        variant={variant}
        theme={theme}
        buttonTheme={buttonTheme}
      >
        {text}
      </Button>
    </div>
  );
};

export default Example;
