/* eslint no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0 */
// @atoms/Popover.tsx
import type { ReactNode as ChildrenType } from 'react';
import clsx from 'clsx';

import Popover from '@mui/material/Popover';

export enum EPopoverVariant {
  DEFAULT = 'default',
  NO_BADGE = 'no-badge',
}

export interface IPopover {
  className?: string;
  theme?: 'light' | 'dark';
  children: ChildrenType;
  variant?: EPopoverVariant;
  open?: boolean;
  id?: string;
}

export const HPopover = function ({
  className = '',
  children = '1100€',
  open = true,
  theme = 'light',
  variant = EPopoverVariant.DEFAULT,
  id = 'atom__review',
}: IPopover) {
  const boxSx = [
    {
      [`
        flex
        justify-center
        align-center
        items-center
        `]: true,
      [`
        [&>.MuiPaper-elevation]:bg-primary-dark2
        [&>.MuiPaper-elevation]:dark:bg-primary-soft
        rounded-md
        `]: variant === EPopoverVariant.DEFAULT,
      [`
        class02
        bg-transparent
        `]: variant === EPopoverVariant.NO_BADGE,
    },
  ];
  const boxStyles = `${clsx(boxSx)} ${className}`;

  return (
    <Popover theme={theme} open={open} id={id} className={boxStyles}>
      {children}
    </Popover>
  );
};

export default HPopover;
