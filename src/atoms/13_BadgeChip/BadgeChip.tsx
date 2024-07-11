/* eslint no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0 */
// @atoms/BadgeChip.tsx
import type { ReactNode as ChildrenType } from 'react';
import { useMemo } from 'react';
import clsx from 'clsx';

import Box from '@mui/material/Box';

import Chip from '@mui/material/Chip';

import { Typography, TypographyVariant } from '../02_Typography';

export enum EBadgeChipType {
  OUTLINED = 'outlined',
  FILLED = 'filled',
}

export enum EBadgeChipVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface IBadgeChip {
  className?: string;
  children?: ChildrenType;
  type?: EBadgeChipType;
  variant?: EBadgeChipVariant;
  id?: string;
}

export const HBadgeChip = function ({
  className = '',
  children = 'Staff Picks',
  type = EBadgeChipType.FILLED,
  variant = EBadgeChipVariant.PRIMARY,
  id = 'atom__badgeChip',
}: IBadgeChip) {
  const sx = [
    {
      [`
        text-body-dark 
        dark:text-body-dark
        `]: true,
      [`
        bg-secondary-light
        `]: variant === EBadgeChipVariant.PRIMARY,
      [`
        text-body-light
        bg-secondary-dark
        `]: variant === EBadgeChipVariant.SECONDARY,
    },
  ];
  const styles = `${clsx(sx)}`;

  const ChipText = useMemo(
    () => (
      <Typography inherit variant={TypographyVariant.BUTTON_SMALL}>
        {children}
      </Typography>
    ),
    [children],
  );

  return (
    <Box className={className}>
      <Chip label={ChipText} id={id} className={styles} variant={type} />
    </Box>
  );
};

export default HBadgeChip;
