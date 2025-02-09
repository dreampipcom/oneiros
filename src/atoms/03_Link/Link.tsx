/* eslint no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0 */
// @atoms/Button.tsx
import type { ReactNode as ChildrenType } from 'react';
import { useEffect, useRef, useCallback } from 'react';
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
  inverse?: boolean;
  onClick?: () => void;
  target?: string;
  host?: string;
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
  href = 'https://www.dreampip.com',
  host = 'www.dreampip.com',
  target = '',
  rel = 'noopener',
  title = undefined,
  download = false,
  inverse = false,
  truncate = undefined,
  id = 'atom__link',
  onClick = () => {},
  faux = false,
}: ILink) {
  const startApp = useRef<() => void>(() => {});

  const isInternal = useCallback(
    (link: string) =>
      link.startsWith('web+dreampip://') ||
      link?.startsWith('https://www.dreampip.com') ||
      link?.replace('https://', '').replace('http://', '').startsWith(host) ||
      link.startsWith('/'),
    [host],
  );

  // deep-linking: protocol
  const toProtocol = useCallback(
    (link: string): string => {
      if (link.startsWith('https://')) {
        return link?.replace('https://', 'web+dreampip://');
      }
      if (link.startsWith('http://')) {
        return link?.replace('http://', 'web+dreampip://');
      }
      if (link.startsWith('/')) {
        return `web+dreampip://${host.replace('https://', '').replace('http://', '')}${link}`;
      }
      return link;
    },
    [host],
  );

  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
    if (isInternal(href)) {
      startApp?.current();
    }
  };

  // deep-linking: handler
  useEffect(() => {
    if (isInternal(href)) {
      let timeout: any;
      const preventPopup = () => {
        clearTimeout(timeout);
        timeout = null;
        window.removeEventListener('pagehide', preventPopup);
      };
      startApp.current = () => {
        window.open(toProtocol(href), '_self');
        timeout = setTimeout(() => {
          // prompt app download
          // if (
          //   alert(
          //     'You do not seem to have the App installed, do you want to go download it now?',
          //   )
          // ) {
          //   document.location = href;
          // }
          document.location = href;
        }, 1000);
        window.addEventListener('pagehide', preventPopup);
      };
    }
  }, [isInternal, href, toProtocol]);

  const external = {
    rel,
    target,
  };

  if (!isInternal(href)) {
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
      [`
        dark:text-body-light 
        text-body-dark
        `]: !!inverse,
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
      data-app-href={isInternal(href) ? toProtocol(href) : undefined}
      rel={external.rel}
      target={external.target}
      onClick={handleOnClick}
    >
      <Typography
        as="span"
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
