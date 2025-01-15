/* eslint no-underscore-dangle:0, max-len:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0 */
// @atoms/Button.tsx
import clsx from 'clsx';
import MLink from '@mui/material/Link';
import { Logo } from './assets';

export enum ELogoSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  RESPONSIVE = 'responsive',
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

  const _sizeMap = {
    [ELogoSize.LARGE]: {
      width: 180,
      desktop: 180,
    },
    [ELogoSize.MEDIUM]: {
      width: 120,
      desktop: 120,
    },
    [ELogoSize.SMALL]: {
      width: 80,
      desktop: 80,
    },
    [ELogoSize.RESPONSIVE]: {
      width: 80,
      desktop: 120,
    },
  };

  const sizeMap =
    size === ELogoSize.RESPONSIVE
      ? {
          [ELogoSize.LARGE]: {
            width: 80,
            desktop: 120,
          },
          [ELogoSize.MEDIUM]: {
            width: 80,
            desktop: 120,
          },
          [ELogoSize.SMALL]: {
            width: 80,
            desktop: 120,
          },
          [ELogoSize.RESPONSIVE]: {
            width: 80,
            desktop: 120,
          },
        }
      : _sizeMap;

  return (
    <MLink id={id} className={styles} href="https://www.dreampip.com">
      <Logo
        className="hidden md:block"
        width={sizeMap[size].desktop}
        height={sizeMap[size].desktop}
      />
      <Logo
        className="block md:hidden"
        width={sizeMap[size].width}
        height={sizeMap[size].width}
      />
    </MLink>
  );
};

export default HLogo;
