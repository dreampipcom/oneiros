/* eslint no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0 */
// @atoms/Review.tsx
import type { ReactNode as ChildrenType } from 'react';
import clsx from 'clsx';

import Box from '@mui/material/Box';

import { Typography, TypographyVariant } from '../02_Typography';

import {
  SystemIcon as Icon,
  ESystemIcon,
  EIconSize,
  EIconColor,
} from '../05_SystemIcon';

export enum EReviewVariant {
  DEFAULT = 'default',
  NO_BADGE = 'no-badge',
}

export interface IReview {
  className?: string;
  theme?: 'light' | 'dark';
  children: ChildrenType;
  variant?: EReviewVariant;
  id?: string;
}

export const HReview = function ({
  className = '',
  children = '1100€',
  theme = 'light',
  variant = EReviewVariant.DEFAULT,
  id = 'atom__review',
}: IReview) {
  const boxSx = [
    {
      [`
        flex
        justify-center
        align-center
        items-center
        `]: true,
      [`
        bg-body-dark
        p-a0
        min-w-a9
        rounded-md
        `]: variant === EReviewVariant.DEFAULT,
      [`
        class02
        bg-transparent
        `]: variant === EReviewVariant.NO_BADGE,
    },
  ];
  const boxStyles = `${clsx(boxSx)} ${className}`;

  const sx = [
    {
      [`
        text-body-light 
        dark:text-body-light
        `]: true,
      [`
        bg-body-dark
        p-0
        `]: variant === EReviewVariant.DEFAULT,
      [`
        class02
        bg-transparent
        dark:!text-body-dark
        `]: variant === EReviewVariant.NO_BADGE,
    },
  ];
  const styles = clsx(sx);

  const iconColorVariantMap = {
    light: EIconColor.PRIMARY,
    dark:
      variant === EReviewVariant.NO_BADGE
        ? EIconColor.WHITE
        : EIconColor.PRIMARY,
  };

  return (
    <Box className={boxStyles}>
      <Icon
        className="mr-a1"
        icon={ESystemIcon.poll}
        size={EIconSize.SMALL}
        color={iconColorVariantMap[theme]}
        theme={theme}
      />
      <Typography
        id={id}
        className={styles}
        variant={TypographyVariant.BUTTON_SMALL}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default HReview;
