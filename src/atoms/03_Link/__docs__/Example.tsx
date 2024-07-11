// @atoms/03_Link/__test__/Example.tsx
import React, { FC } from 'react';
import Link, { LinkProps } from '../Link.tsx';

const Example: FC<LinkProps> = function ({
  variant,
  align,
  truncate,
  href,
  as,
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
      <Link
        href={href}
        variant={variant}
        align={align}
        truncate={truncate}
        as={as}
      />
    </div>
  );
};

export default Example;
