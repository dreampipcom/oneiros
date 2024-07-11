/* eslint no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0 */
// @atoms/PriceTag.tsx
import type { ReactNode as ChildrenType } from 'react';
import clsx from 'clsx';

import { Typography, TypographyVariant } from '../02_Typography';

export enum EPriceTagVariant {
  NORMAL = 'normal',
  SMALL = 'small',
  LARGE = 'large',
}

export interface IPriceTag {
  children: ChildrenType;
  className?: string;
  variant?: EPriceTagVariant;
  id?: string;
}

export const HPriceTag = function ({
  children = '1100€',
  className = '',
  variant = EPriceTagVariant.NORMAL,
  id = 'atom__priceTag',
}: IPriceTag) {
  const sx = [
    {
      [`
        text-primary-light 
        dark:text-primary-dark
        font-bold
        `]: true,
    },
  ];
  const styles = `${clsx(sx)} ${className}`;

  const typographyVariantMap = {
    [EPriceTagVariant.NORMAL]: TypographyVariant.PRICE,
    [EPriceTagVariant.SMALL]: TypographyVariant.PRICE_SMALL,
    [EPriceTagVariant.LARGE]: TypographyVariant.PRICE_LARGE,
  };

  return (
    <Typography
      id={id}
      className={styles}
      variant={typographyVariantMap[variant]}
    >
      {children}
    </Typography>
  );
};

export default HPriceTag;
