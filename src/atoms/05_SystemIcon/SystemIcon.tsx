/* eslint no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0 */
// @atoms/SystemIcon.tsx
import { useMemo } from 'react';
import clsx from 'clsx';
import { DreamPipColors } from '../../../tailwind.config.ts';
import { EIcon, SystemIcons, BrandedIcons } from './assets';

type Theme = 'light' | 'dark';

export enum EIconCollection {
  SYSTEM = 'system',
  BRANDED = 'branded',
}

export enum EIconSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum EIconColor {
  BW = 'bw',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  WHITE = 'white',
  PASSION = 'passion',
  PASSION_LIGHT = 'passion-light',
  PASSION_SELECTED = 'passion-selected',
  LIGHT = 'light',
}

export interface ISystemIcon {
  className?: string;
  color?: EIconColor;
  collection?: EIconCollection;
  icon?: string;
  theme?: Theme;
  size?: EIconSize;
  id?: string;
}

export const HSystemIcon = function ({
  className,
  color = EIconColor.PRIMARY,
  icon = EIcon.account,
  collection = EIconCollection.SYSTEM,
  theme = 'light',
  size = EIconSize.MEDIUM,
  id = 'atom__link',
}: ISystemIcon) {
  console.log({ icon });
  const transposeIcon =
    collection === EIconCollection.SYSTEM
      ? SystemIcons[icon]
      : BrandedIcons[icon];

  const sx = [
    {
      [`
        class00
        `]: true,
    },
  ];
  const styles = `${clsx(sx)} ${className}`;

  const sizeMap = {
    [EIconSize.LARGE]: {
      width: 32,
      height: 32,
    },
    [EIconSize.MEDIUM]: {
      width: 24,
      height: 24,
    },
    [EIconSize.SMALL]: {
      width: 16,
      height: 16,
    },
  };

  const colorMap = {
    light: {
      primary: DreamPipColors.outro.dark,
      secondary: DreamPipColors.outro.dark,
      bw: DreamPipColors.icon.light.bw,
      white: DreamPipColors.icon.light.white,
      passion: DreamPipColors.primary.passion,
      light: DreamPipColors.primary.dark,
      'passion-light': DreamPipColors.primary.green,
      'passion-selected': DreamPipColors.primary.green,
    },
    dark: {
      primary: DreamPipColors.icon.dark.primary,
      secondary: DreamPipColors.outro.dark,
      bw: DreamPipColors.icon.dark.bw,
      white: DreamPipColors.icon.dark.white,
      passion: DreamPipColors.outro.dark,
      light: DreamPipColors.primary.dark,
      'passion-light': DreamPipColors.primary.green,
      'passion-selected': DreamPipColors.primary.green,
    },
  };

  const IconComponent = useMemo(
    () => transposeIcon,
    [icon, theme, transposeIcon, collection],
  );

  if (!transposeIcon) return <>Icon not found.</>;

  return (
    <IconComponent
      id={id}
      className={styles}
      width={sizeMap[size].width}
      height={sizeMap[size].height}
      color={colorMap[theme][color]}
    />
  );
};

export default HSystemIcon;
