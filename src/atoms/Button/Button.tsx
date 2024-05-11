/* eslint no-unused-vars:0 no-shadow:0 */
// @atoms/Button.tsx
import type { ReactNode as ChildrenType } from 'react';
import clsx from 'clsx';
import Button from '@mui/material/Button';

export enum ButtonVariant {
  FILLED = 'contained',
  OUTLINE = 'outlined',
}

export enum ButtonTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface IButton {
  children: ChildrenType;
  variant?: ButtonVariant;
  theme?: ButtonTheme;
  onClick?: () => void;
  target?: string;
  href?: string;
  rel?: string;
  id?: string;
}

export const HButton = function ({
  children = 'Default value',
  variant = ButtonVariant.FILLED,
  theme = ButtonTheme.PRIMARY,
  href = '',
  target = '',
  rel = 'noopener',
  id = 'test',
  onClick = () => {},
}: IButton) {
  const external = {
    rel,
    target,
  };

  if (!href?.startsWith('https://www.dreampip.com')) {
    external.rel += ' noreferrer';
    external.target += ' _blank';
  }

  const sx = [
    { 'rounded-md normal-case': true },
    theme === ButtonTheme.PRIMARY && {
      [`
        bg-primary-light

        hover:bg-primary-dark
        hover:text-body-light

        dark:text-inverse-dark
        dark:bg-primary-dark 

        dark:hover:bg-primary-light
        dark:hover:text-inverse-light
      `]: variant === ButtonVariant.FILLED,
      [`
        border-primary-light
        text-primary-light 

        hover:text-body-light 
        hover:border-primary-dark 
        hover:bg-primary-dark 

        dark:border-primary-dark 
        dark:text-primary-dark 

        dark:hover:border-primary-dark 
        dark:hover:bg-primary-dark 
        dark:hover:text-inverse-dark
      `]: variant === ButtonVariant.OUTLINE,
    },
    theme === ButtonTheme.SECONDARY && {
      [`
        bg-outro-light

        hover:bg-outro-dark 
        hover:text-body-light

        dark:text-inverse-dark
        dark:bg-outro-dark 

        dark:hover:bg-outro-light
        dark:hover:text-inverse-light
      `]: variant === ButtonVariant.FILLED,
      [`
        border-outro-light 
        
        text-outro-light 
        hover:text-body-light

        hover:border-outro-dark 
        hover:bg-outro-dark 

        dark:border-outro-dark 
        dark:text-outro-dark 

        dark:hover:border-outro-dark 
        dark:hover:bg-outro-dark 
        dark:hover:text-inverse-dark
      `]: variant === ButtonVariant.OUTLINE,
    },
  ];

  const styles = clsx(sx);

  return (
    <Button
      id={id}
      href={href}
      rel={external.rel}
      target={target}
      className={styles}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default HButton;
