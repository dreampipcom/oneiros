/* eslint no-nested-ternary:0, no-unused-vars:0, max-len:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, object-curly-newline:0 */
// @atoms/Grid.tsx
import { Children } from 'react';
import clsx from 'clsx';
import type { ReactNode as ChildrenType } from 'react';

import Box from '@mui/material/Box';

export enum EGridVariant {
  DEFAULT = '8',
  ONE_COLUMN = '1',
  TWELVE_COLUMNS = '12',
  SIX_COLUMNS = '6',
}

export enum EBleedVariant {
  ZERO = 'zero',
  RESPONSIVE = 'responsive',
  VERTICAL = 'vertical',
}

export enum EGradientVariant {
  NONE = 'none',
  SOFT = 'soft',
  WHITE = 'white',
}

export interface IBackgroundImage {
  mobile?: string;
  desktop?: string;
}

export interface IGrid {
  id?: string;
  className?: string;
  children: ChildrenType;
  background?: IBackgroundImage;
  gradient?: EGradientVariant;
  bleed?: EBleedVariant;
  full?: boolean;
  variant?: EGridVariant;
  theme?: 'light' | 'dark';
}

export const HGrid = function ({
  id = 'atom__Grid',
  className = '',
  theme = 'light',
  children,
  bleed = EBleedVariant.VERTICAL,
  background,
  gradient = EGradientVariant.NONE,
  full = false,
  variant = EGridVariant.DEFAULT,
}: IGrid) {
  const coercedVariant = full ? EGridVariant.ONE_COLUMN : variant;
  const coercedBleed = full ? EBleedVariant.ZERO : bleed;

  const bgImage =
    background?.mobile || background?.desktop
      ? `${
          background?.mobile
            ? background?.desktop
              ? 'bg-[image:var(--mobile-bg-image)] md:bg-[image:var(--bg-image)]'
              : 'bg-[image:var(--mobile-bg-image)]'
            : 'bg-[image:var(--bg-image)]'
        } bg-center bg-cover bg-no-repeat `
      : '';

  const gradientSx = [
    {
      [`
        bg-transparent
        `]: !!gradient,
      [`
          bg-gradient-to-r from-gradient-soft-light-from to-gradient-soft-light-to dark:from-gradient-soft-dark-from dark:from-gradient-soft-dark-to
        `]: gradient === EGradientVariant.SOFT,
      [`
          bg-gradient-to-r from-card-white to-card-soft dark:from-card-dark dark:from-card-foggy
        `]: gradient === EGradientVariant.WHITE,
    },
  ];
  const bgColor = clsx(gradientSx);

  const bg = bgImage + bgColor || '';

  const gridGap = `
    gap-a1 md:gap-a2
  `;

  const bleedSx = [
    {
      [gridGap]: true,
      [`
          p-0
          md:p-0
        `]: coercedBleed === EBleedVariant.ZERO,
      [`
          p-a2
          md:p-a6
        `]: coercedBleed === EBleedVariant.RESPONSIVE,
      [`
          py-a2
          md:py-a6
        `]: coercedBleed === EBleedVariant.VERTICAL,
    },
  ];

  const bleedStyles = `${clsx(bleedSx)}`;

  const gridColumnsSx = [
    {
      [`
          grid-cols-6
          md:grid-cols-8
          `]: coercedVariant === EGridVariant.DEFAULT,
      [`
          grid-cols-1
          md:grid-cols-1
          `]: coercedVariant === EGridVariant.ONE_COLUMN,
      [`
          grid-cols-6
          md:grid-cols-12
          `]: coercedVariant === EGridVariant.TWELVE_COLUMNS,
      [`
          grid-cols-6
          `]: coercedVariant === EGridVariant.SIX_COLUMNS,

      [`
          col-span-full
          `]: !!full,
    },
  ];
  const gridColumnStyles = clsx(gridColumnsSx);

  const gridRowSx = [
    !className && {
      [`
          grid
          w-full
          auto-cols-auto
          ${gridGap}
          `]: true,
      [`
        class01
          `]: theme === 'light',
    },
  ];

  const gridRowStyles = `${clsx(gridRowSx)} ${gridColumnStyles} ${bleedStyles}`;

  const mappedChildren = Children.map(children, (child: any) => (
    <Box component="article" className={`${child?.props?.className || ''}`}>
      {child}
    </Box>
  ));

  return (
    <Box
      id={id}
      component="section"
      className={`${gridRowStyles} ${bg} ${className}`}
      sx={{
        '--mobile-bg-image': `url('${background?.mobile}')`,
        '--bg-image': `url('${background?.desktop}')`,
      }}
    >
      {mappedChildren}
    </Box>
  );
};

export default HGrid;
