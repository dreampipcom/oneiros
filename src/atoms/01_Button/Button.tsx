/* eslint no-unused-vars:0 no-shadow:0 */
// @atoms/Button.tsx
import type { ReactNode as ChildrenType } from 'react';
import clsx from 'clsx';
import Button from '@mui/material/Button';
import { Typography, TypographyVariant } from '../02_Typography';
import { Image, EImageVariant } from '../08_Image';

import {
  SystemIcon as Icon,
  EIcon,
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
  image?: string;
  onClick?: () => void;
  target?: string;
  href?: string;
  host?: string;
  rel?: string;
  icon?: EIcon;
  iconPosition?: EButtonIconPosition;
  type?: string;
  id?: string;
}

export const HButton = function ({
  children,
  className,
  variant = ButtonVariant.FILLED,
  buttonTheme = EButtonTheme.PRIMARY,
  image = '',
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
      'relative normal-case shadow-none hover:shadow-none overflow-hidden':
        true,
      'rounded-md w-full px-a3 py-b1': !!children,
      'rounded-md px-0 py-0 min-h-b5 max-w-b5 min-w-b5 max-h-b5': !children,
    },
    buttonTheme === EButtonTheme.PRIMARY && {
      [`
        class1

        text-body-light


        bg-primary-light
        hover:bg-primary-passionSoft

        dark:bg-primary-light
        dark:hover:bg-primary-passionSoft
        
      `]: variant === ButtonVariant.FILLED,
      [`
        class2
        border-primary-dark 
        text-primary-dark 

        hover:border-secondary-dark

        hover:bg-soft-bg

        dark:border-primary-soft 
        dark:text-primary-soft 

        dark:hover:border-secondary-dark 
        dark:hover:bg-primary-soft
        dark:hover:text-secondary-dark
      `]: variant === ButtonVariant.OUTLINE,
    },
    buttonTheme === EButtonTheme.SECONDARY && {
      [`
        class3

        text-body-light
        dark:text-body-light

        bg-secondary-light
        hover:bg-primary-passionSoft

        dark:bg-body-dark
        dark:hover:bg-primary-passionSoft
      `]: variant === ButtonVariant.FILLED,
      [`
        class4
        !border-transparent
        text-primary-dark 

        hover:bg-soft-bg

        dark:!border-transparent
        dark:text-primary-soft

        dark:hover:!border-primary-light
        dark:hover:bg-transparent
      `]: variant === ButtonVariant.OUTLINE,
    },
    buttonTheme === EButtonTheme.PASSION && {
      [`
        class3
        text-primary-passion
        dark:text-body-passion

        bg-primary-passionSoft
        hover:bg-primary-passionLight

        dark:!border-primary-passionSoft
        dark:bg-primary-passionSoft
        dark:hover:bg-primary-passion
        dark:text-primary-dark
        dark:hover:text-body-dark
      `]: variant === ButtonVariant.FILLED,
      [`
        class4
        
        text-body-passion 
        hover:text-primary-passion
        dark:text-primary-passionSoft
        dark:hover:text-body-passion

        dark:hover:bg-primary-passionSoft 
        hover:bg-primary-passionSoft
        
        border-primary-passion
        hover:border-primary-passion

        dark:border-primary-passionSoft
        dark:hover:border-primary-passionSoft 

      `]: variant === ButtonVariant.OUTLINE,
    },
    buttonTheme === EButtonTheme.PASSION_SELECTED && {
      [`
        class3
        text-body-light
        hover:text-body-light

        bg-primary-passionLight
        hover:bg-transparent

        dark:bg-primary-passion
        dark:hover:bg-transparent
        dark:text-body-dark
        dark:hover:text-body-dark
      `]: variant === ButtonVariant.FILLED,
      [`
        class4
        text-body-passion 

        hover:bg-primary-passionSoft

        bg-primary-passionSoft
        border-primary-passion

        hover:border-primary-passion 
        hover:bg-transparent
        hover:text-primary-passion

        dark:border-primary-passion 
        dark:text-primary-passion
        dark:bg-primary-passionSoft

        dark:hover:border-primary-passion 
        dark:hover:bg-transparent 
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
        [EButtonTheme.PRIMARY]: EIconColor.PRIMARY,
        [EButtonTheme.SECONDARY]: EIconColor.SECONDARY,
        [EButtonTheme.PASSION]: EIconColor.PASSION,
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
        [EButtonTheme.PRIMARY]: EIconColor.SECONDARY,
        [EButtonTheme.SECONDARY]: EIconColor.SECONDARY,
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
      {image ? (
        <Image
          className="absolute opacity-30"
          variant={EImageVariant.ONE_PER_ONE}
          src={image}
        />
      ) : undefined}
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
