// @atoms/09_TextInput/__test__/Example.tsx
import React, { FC } from 'react';
import TextInput, { TextInputProps } from '../TextInput.tsx';

const Example: FC<TextInputProps> = function ({
  variant,
  theme,
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
      <TextInput variant={variant} icon={icon} theme={theme} />
    </div>
  );
};

export default Example;
