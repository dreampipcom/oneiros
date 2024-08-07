/* eslint no-unused-vars:0 no-shadow:0 */
// @atoms/Button.tsx
import type { ReactNode as ChildrenType } from 'react';
import clsx from 'clsx';
import Button from '@mui/material/Button';
import { Typography, TypographyVariant } from '../02_Typography';

import {
  SystemIcon as Icon,
  ESystemIcon,
  EIconSize,
  EIconColor,
} from '../05_SystemIcon';

export enum ButtonVariant {
  FILLED = 'contained',
  OUTLINE = 'outlined',
}

export enum EButtonTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  PASSION = 'passion',
  PASSION_SELECTED = 'passion-selected',
}

export enum EButtonIconPosition {
  START = 'start',
  END = 'end',
}

export interface IButton {
  children?: ChildrenType;
  className?: string;
  variant?: ButtonVariant;
  theme?: 'light' | 'dark';
  buttonTheme?: EButtonTheme;
  onClick?: () => void;
  target?: string;
  href?: string;
  host?: string;
  rel?: string;
  icon?: ESystemIcon;
  iconPosition?: EButtonIconPosition;
  type?: string;
  id?: string;
}

export const HButton = function ({
  children,
  className,
  variant = ButtonVariant.FILLED,
  buttonTheme = EButtonTheme.PRIMARY,
  theme = 'light',
  href = '',
  host = 'www.dreampip.com',
  target = '',
  rel = 'noopener',
  icon,
  iconPosition = EButtonIconPosition.START,
  id = 'atom__button',
  type,
  onClick = () => {},
}: IButton) {
  const isInternal = (link: string) =>
    link.startsWith('web+dreampip://') ||
    link?.startsWith('https://www.dreampip.com') ||
    link?.replace('https://', '').replace('http://', '').startsWith(host) ||
    link.startsWith('/');

  const toProtocol = (link: string): string => {
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
  };

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
      'relative normal-case shadow-none hover:shadow-none': true,
      'rounded-md w-full px-a3 py-b1': !!children,
      'rounded-md px-0 py-0 min-h-b5 max-w-b5 min-w-b5 max-h-b5': !children,
    },
    buttonTheme === EButtonTheme.PRIMARY && {
      [`
        class1

        text-body-dark
        dark:text-body-dark


        bg-primary-light
        hover:bg-primary-contrast

        dark:bg-primary-contrast
        dark:hover:bg-primary-light
        
      `]: variant === ButtonVariant.FILLED,
      [`
        class2
        border-primary-light 
        text-primary-light 

        hover:border-secondary-light
        hover:text-secondary-light
        hover:bg-transparent

        dark:border-secondary-dark 
        dark:text-secondary-dark 

        dark:hover:border-secondary-dark 
        dark:hover:bg-primary-soft
        dark:hover:text-secondary-dark
      `]: variant === ButtonVariant.OUTLINE,
    },
    buttonTheme === EButtonTheme.SECONDARY && {
      [`
        class3
        text-body-dark
        dark:text-body-dark

        bg-soft-light
        hover:bg-soft-constrast

        dark:bg-secondary-dark 
        dark:hover:bg-primary-light
      `]: variant === ButtonVariant.FILLED,
      [`
        class4
        !border-transparent
        text-secondary-light 

        hover:border-none
        hover:bg-soft-bg

        dark:!border-secondary-soft 
        dark:text-body-dark 

        dark:hover:border-secondary-dark 
        dark:hover:bg-primary-dark
      `]: variant === ButtonVariant.OUTLINE,
    },
    buttonTheme === EButtonTheme.PASSION && {
      [`
        class3
        text-body-dark
        dark:text-body-passion

        bg-primary-passion
        hover:bg-primary-passionLight

        dark:bg-primary-passionSoft
        dark:hover:bg-primary-passionSoft
        dark:text-body-dark
      `]: variant === ButtonVariant.FILLED,
      [`
        class4
        border-none
        text-body-passion 

        bg-transparent
        hover:border-none
        hover:bg-primary-passionSoft

        dark:border-secondary-dark 
        dark:text-body-passion

        dark:hover:border-primary-passionSoft 
        dark:hover:bg-primary-passionSoft 
        dark:hover:text-body-passion
      `]: variant === ButtonVariant.OUTLINE,
    },
    buttonTheme === EButtonTheme.PASSION_SELECTED && {
      [`
        class3
        text-body-dark
        dark:text-body-passion

        bg-primary-passion
        hover:bg-primary-passionLight

        dark:bg-primary-passionSoft
        dark:hover:bg-primary-passionSoft
        dark:text-body-dark
      `]: variant === ButtonVariant.FILLED,
      [`
        class4
        border-none
        text-body-passion 

        bg-transparent
        hover:border-none
        hover:bg-primary-passionSoft

        dark:border-secondary-dark 
        dark:text-body-passion

        dark:hover:border-primary-passionSoft 
        dark:hover:bg-primary-passionSoft 
        dark:hover:text-body-passion
      `]: variant === ButtonVariant.OUTLINE,
    },
  ];

  const iconColorVariantMap = {
    light: {
      [ButtonVariant.OUTLINE]: {
        [EButtonTheme.PRIMARY]: EIconColor.PRIMARY,
        [EButtonTheme.SECONDARY]: EIconColor.SECONDARY,
        [EButtonTheme.PASSION]: EIconColor.PASSION,
        [EButtonTheme.PASSION_SELECTED]: EIconColor.PASSION_SELECTED,
      },
      [ButtonVariant.FILLED]: {
        [EButtonTheme.PRIMARY]: EIconColor.WHITE,
        [EButtonTheme.SECONDARY]: EIconColor.WHITE,
        [EButtonTheme.PASSION]: EIconColor.WHITE,
        [EButtonTheme.PASSION_SELECTED]: EIconColor.PASSION_SELECTED,
      },
    },
    dark: {
      [ButtonVariant.OUTLINE]: {
        [EButtonTheme.PRIMARY]: EIconColor.LIGHT,
        [EButtonTheme.SECONDARY]: EIconColor.WHITE,
        [EButtonTheme.PASSION]: EIconColor.PASSION_LIGHT,
        [EButtonTheme.PASSION_SELECTED]: EIconColor.PASSION_SELECTED,
      },
      [ButtonVariant.FILLED]: {
        [EButtonTheme.PRIMARY]: EIconColor.WHITE,
        [EButtonTheme.SECONDARY]: EIconColor.WHITE,
        [EButtonTheme.PASSION]: EIconColor.PASSION,
        [EButtonTheme.PASSION_SELECTED]: EIconColor.PASSION_SELECTED,
      },
    },
  };

  const styles = `${className} ${clsx(sx)}`;

  return (
    <Button
      id={id}
      href={href}
      data-app-href={isInternal(href) ? toProtocol(href) : undefined}
      rel={external.rel}
      target={external.target}
      className={styles}
      variant={variant}
      onClick={onClick}
      type={type}
    >
      {icon && iconPosition === EButtonIconPosition.START ? (
        <Icon
          icon={icon}
          theme={theme}
          color={iconColorVariantMap[theme][variant][buttonTheme]}
          size={EIconSize.MEDIUM}
          className={children ? 'mr-a1' : 'absolute'}
        />
      ) : undefined}
      {children ? (
        <Typography variant={TypographyVariant.BUTTON} inherit>
          {children}
        </Typography>
      ) : undefined}
      {icon && iconPosition === EButtonIconPosition.END ? (
        <Icon
          icon={icon}
          theme={theme}
          color={iconColorVariantMap[theme][variant][buttonTheme]}
          size={EIconSize.MEDIUM}
          className={children ? 'ml-a1' : 'absolute'}
        />
      ) : undefined}
    </Button>
  );
};

export default HButton;
