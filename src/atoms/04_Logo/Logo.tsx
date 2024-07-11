/* eslint no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0 */
// @atoms/Button.tsx
import clsx from 'clsx';
import MLink from '@mui/material/Link';
import { Logo } from './assets';

export enum ELogoSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export interface ILogo {
  size?: ELogoSize;
  id?: string;
}

export const HLogo = function ({
  size = ELogoSize.MEDIUM,
  id = 'atom__link',
}: ILogo) {
  const sx = [
    {
      [`
        class00
        `]: true,
    },
  ];
  const styles = clsx(sx);

  const sizeMap = {
    [ELogoSize.LARGE]: {
      width: 180,
      height: 'auto',
    },
    [ELogoSize.MEDIUM]: {
      width: 120,
      height: 'auto',
    },
    [ELogoSize.SMALL]: {
      width: 80,
      height: 'auto',
    },
  };

  return (
    <MLink id={id} className={styles} href="https://dreampip.com">
      <Logo width={sizeMap[size].width} height={sizeMap[size].height} />
    </MLink>
  );
};

export default HLogo;
