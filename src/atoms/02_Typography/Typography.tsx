/* eslint no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0 */
// @atoms/Button.tsx
import type { ReactNode as ChildrenType, ElementType } from 'react';
import clsx from 'clsx';
import Typography, { TypographyTypeMap } from '@mui/material/Typography';

export enum TypographyVariant {
  XL = 'xl',
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  BODY = 'body1',
  SMALL = 'caption',
  QUOTE = 'quote',
  BUTTON = 'button',
  BUTTON_SMALL = 'button_small',
  SUBTITLE = 'subtitle',
  SUBTITLE_SMALL = 'subtitle_small',
  LINK = 'link',
  LINK_SMALL = 'link_small',
  LINK_LARGE = 'link_large',
  PRICE = 'price',
  PRICE_SMALL = 'price_small',
  PRICE_LARGE = 'price_large',
}

export enum TypographyAlign {
  CENTER = 'center',
  INHERIT = 'inherit',
  JUSTIFY = 'justify',
  LEFT = 'left',
  RIGHT = 'right',
}

export interface ITypography {
  children: ChildrenType;
  theme?: 'light' | 'dark';
  variant?: TypographyVariant;
  align?: TypographyAlign;
  truncate?: boolean;
  inherit?: boolean;
  as?: ElementType;
  className?: string;
  id?: string;
}

export const HTypography = function ({
  children = 'Default value',
  variant = TypographyVariant.BODY,
  align = TypographyAlign.LEFT,
  truncate = undefined,
  inherit = undefined,
  theme,
  as,
  className = '',
  id = 'atom__typography',
}: ITypography) {
  const props = {
    theme,
    align,
    noWrap: truncate === true,
    paragraph: truncate === false && variant !== TypographyVariant.H3,
    component: as as ElementType,
  };

  const variantMap = {
    ...TypographyVariant,
    XL: TypographyVariant.H1,
    QUOTE: TypographyVariant.SMALL,
    BUTTON: TypographyVariant.BODY,
    BUTTON_SMALL: TypographyVariant.BODY,
    SUBTITLE: TypographyVariant.BODY,
    SUBTITLE_SMALL: TypographyVariant.SMALL,
    LINK: TypographyVariant.BODY,
    LINK_SMALL: TypographyVariant.BODY,
    LINK_LARGE: TypographyVariant.BODY,
    PRICE: TypographyVariant.BODY,
    PRICE_SMALL: TypographyVariant.BODY,
    PRICE_LARGE: TypographyVariant.BODY,
  };

  const variantKeys: (keyof typeof TypographyVariant)[] = Object.keys(
    TypographyVariant,
  ) as unknown as (keyof typeof TypographyVariant)[];

  const coercedVariantName: keyof typeof TypographyVariant =
    variantKeys.find(
      (name: keyof typeof TypographyVariant) =>
        !!TypographyVariant && variant === TypographyVariant[name],
    ) || 'BODY';

  const coercedVariant: TypographyTypeMap['props']['variant'] = variantMap[
    coercedVariantName
  ] as unknown as TypographyTypeMap['props']['variant'];

  const sx = [
    {
      [`
      rounded-md 
      normal-case 
      tracking-b0
      leading-a3
      ${
        !inherit
          ? `
            text-body-light 
            dark:text-body-dark
          `
          : `
            m-0
          `
      }
    `]: true,
    },
    {
      [`
        class1
        text-base
        md:text-base
        font-regular
      `]: variant === TypographyVariant.BODY,
      [`
        class2
        text-md
        md:text-md
        font-regular
      `]: variant === TypographyVariant.SMALL,
      [`
        class3
        text-md
        md:text-base
        !font-semibold
        underline
      `]: variant === TypographyVariant.LINK,
      [`
        class4
        text-md
        md:text-md
        !font-semibold
        underline
      `]: variant === TypographyVariant.LINK_SMALL,
      [`
        class4
        text-base
        md:text-base
        !font-semibold
        underline
      `]: variant === TypographyVariant.LINK_LARGE,
      [`
        class5
        text-base
        md:text-base
        font-semibold
        !leading-b2
      `]: variant === TypographyVariant.BUTTON,
      [`
        class6
        text-md
        md:text-md
        font-semibold
      `]: variant === TypographyVariant.BUTTON_SMALL,
      [`
        class7
        text-sm
        italic
        md:text-md
      `]: variant === TypographyVariant.QUOTE,
      [`
        class8
        text-4xl
        md:text-5xl
        font-semibold
        leading-b2
        !tracking-a0
      `]: variant === TypographyVariant.XL,
      [`
        class9
        text-3xl
        md:text-4xl
        font-semibold
      `]: variant === TypographyVariant.H1,
      [`
        class10
        text-2xl
        md:text-3xl
        font-semibold
      `]: variant === TypographyVariant.H2,
      [`
        class11
        text-1xl
        md:text-2xl
        font-semibold
      `]: variant === TypographyVariant.H3,
      [`
        class12
        text-xl
        md:text-xl
        font-semibold
      `]: variant === TypographyVariant.H4,
      [`
        class13
        text-base
        md:text-base
        !font-medium
      `]: variant === TypographyVariant.SUBTITLE,
      [`
        class14
        text-md
        md:text-md
        font-medium
      `]: variant === TypographyVariant.SUBTITLE_SMALL,
      [`
        class15
        text-1xl
        lg:text-4xl
        font-bold
      `]: variant === TypographyVariant.PRICE,
      [`
        class15
        text-1xl
        lg:text-1xl
        font-bold
      `]: variant === TypographyVariant.PRICE_SMALL,
      [`
        class16
        text-4xl
        lg:text-4xl
        font-bold
      `]: variant === TypographyVariant.PRICE_LARGE,
    },
  ];

  const styles = `${clsx(sx)} ${className}`;

  return (
    <Typography id={id} className={styles} variant={coercedVariant} {...props}>
      {children}
    </Typography>
  );
};

export default HTypography;
