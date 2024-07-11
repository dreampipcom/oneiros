/* eslint no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0 */
// @atoms/Button.tsx
import type { ReactNode as ChildrenType } from 'react';
import clsx from 'clsx';
import MLink from '@mui/material/Link';

import {
  Typography,
  TypographyVariant,
  TypographyAlign,
} from '../02_Typography';

export interface ILink {
  children: ChildrenType;
  className?: string;
  align?: TypographyAlign;
  variant?: TypographyVariant;
  title?: string;
  download?: boolean;
  truncate?: boolean;
  onClick?: () => void;
  target?: string;
  href?: string;
  rel?: string;
  id?: string;
  faux?: boolean;
}

// to-do : support custom component (e.g. Next.js Link)
// although it might be better to wrap this in nyx to keep it agnostic
// const LinkComponent = () =>
//   forwardRef<any, any>((linkProps, ref) => (
//     <linkProps.component
//       ref={ref}
//       href={linkProps.props.href}
//       prefetch={linkProps.props.prefetch}
//     />
//   ));

export const HLink = function ({
  children = 'Default value',
  className = '',
  variant = TypographyVariant.LINK,
  align = TypographyAlign.LEFT,
  href = 'https://dreampip.com',
  target = '',
  rel = 'noopener',
  title = undefined,
  download = false,
  truncate = undefined,
  id = 'atom__link',
  onClick = () => {},
  faux = false,
}: ILink) {
  const external = {
    rel,
    target,
  };

  if (!href?.startsWith('https://dreampip.com')) {
    external.rel += ' noreferrer noopener';
    external.target += ' _blank';
  }

  const sx = [
    {
      [`
        text-body-light 
        dark:text-body-dark
        font-semibold
        underline
        `]: !faux,
      [`
        !no-underline
        `]: !!faux,
    },
  ];
  const styles = `${clsx(sx)} ${className}`;

  return (
    <MLink
      id={id}
      title={title}
      download={download}
      className={styles}
      href={href}
      rel={external.rel}
      target={external.target}
      onClick={onClick}
    >
      <Typography
        className={styles}
        variant={variant}
        inherit
        align={align}
        truncate={truncate}
      >
        {children}
      </Typography>
    </MLink>
  );
};

export default HLink;
