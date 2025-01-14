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
  anchor?: Element;
  theme?: 'light' | 'dark';
  float?: boolean;
  children: ChildrenType;
  variant?: EPopoverVariant;
  onClose?: () => void;
  open?: boolean;
  id?: string;
}

export const HPopover = function ({
  className = '',
  children = '1100€',
  open = true,
  onClose = () => {},
  theme = 'light',
  float = false,
  anchor = undefined,
  variant = EPopoverVariant.DEFAULT,
  id = 'atom__review',
}: IPopover) {
  const wrapperSx = [
    {
      [`
        class1
        `]: true,
      [`
        absolute
        `]: !!float,
    },
  ];
  const wrapperStyles = `${clsx(wrapperSx)}`;

  const boxSx = [
    {
      [`
        flex
        justify-center
        align-center
        items-center
        `]: true,
      [`
        [&>.MuiPaper-elevation]:p-a1
        [&>.MuiPaper-elevation]:md:p-a8
        [&>.MuiPaper-elevation]:bg-primary-light
        [&>.MuiPaper-elevation]:dark:bg-secondary-light
        [&>.MuiModal-backdrop]:bg-primary-passionSoft
        [&>.MuiModal-backdrop]:dark:bg-primary-dark2
        [&>.MuiModal-backdrop]:!opacity-40
        rounded-md
        `]: variant === EPopoverVariant.DEFAULT,
      [`
        class02
        bg-transparent
        `]: variant === EPopoverVariant.NO_BADGE,
    },
  ];
  const boxStyles = `${clsx(boxSx)} ${className} theme-${theme}`;
  return (
    <div id={id} className={wrapperStyles}>
      <Popover
        onClose={onClose}
        open={open}
        className={boxStyles}
        anchorEl={anchor}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {children}
      </Popover>
    </div>
  );
};

export default HPopover;
