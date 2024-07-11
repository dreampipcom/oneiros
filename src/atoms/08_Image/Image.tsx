/* eslint no-unused-vars:0, max-len:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, object-curly-newline:0 */
// @atoms/Image.tsx
import { useEffect } from 'react';
import clsx from 'clsx';

import Box from '@mui/material/Box';

import { Typography, TypographyVariant } from '../02_Typography';

import 'lazysizes';
import 'lazysizes/plugins/attrchange/ls.attrchange';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

type TImageFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';

export enum EImageVariant {
  ONE_PER_ONE = '1-1',
  THREE_PER_TWO = '3-2',
  FOUR_PER_THREE = '4-3',
  SIXTEEN_PER_NINE = '16-9',
  NO_RATIO = 'no-ratio',
}

export interface IOption {
  label: string;
  value: string | number;
}

export interface IImage {
  className?: string;
  caption?: string;
  alt?: string;
  src?: string;
  srcset?: string;
  placeholder?: string;
  objectFit?: TImageFit;
  variant?: EImageVariant;
  id?: string;
}

export const HImage = function ({
  className,
  caption = '',
  alt = 'This is an alt tag.',
  src = 'https://placehold.co/600x400',
  srcset = '',
  placeholder = '',
  objectFit = 'cover',
  variant = EImageVariant.NO_RATIO,
  id = 'atom__image',
}: IImage) {
  useEffect(() => {
    // Lazy Sizes config goes here, e.g.
    // window.lazySizes.cfg.lazyClass = 'lazy';
  }, []);

  const wrapperSx = [
    {
      [`
        w-full
        m-0
        overflow-hidden
        flex
        align-center
        justify-center
        flex-col
        gap-a2
        `]: true,
      [`
        mb-a3
        `]: !!caption,
    },
  ];
  const wrapperStyles = `${clsx(wrapperSx)} ${className}`;

  const boxSx = [
    {
      [`
        w-full
        overflow-hidden
        flex
        align-center
        justify-center
        `]: true,
      [`
        aspect-square
        `]: variant === EImageVariant.ONE_PER_ONE,
      [`
        aspect-blog
        `]: variant === EImageVariant.THREE_PER_TWO,
      [`
        aspect-tv
        `]: variant === EImageVariant.FOUR_PER_THREE,
      [`
        aspect-cinema
        `]: variant === EImageVariant.SIXTEEN_PER_NINE,
      [`
        class-05
        `]: variant === EImageVariant.NO_RATIO,
    },
  ];
  const boxStyles = clsx(boxSx);

  const imgSx = [
    {
      [`
        lazyload
        min-w-full
        min-h-full
        shrink-0
        `]: true,
      [`
        object-cover
        `]: objectFit === 'cover',
      [`
        object-fill
        `]: objectFit === 'fill',
      [`
        object-contain
        `]: objectFit === 'contain',
      [`
        object-none
        `]: objectFit === 'none',
      [`
        object-scale-down
        `]: objectFit === 'scale-down',
    },
  ];
  const imgStyles = clsx(imgSx);

  return (
    <Box component="figure" className={wrapperStyles}>
      <Box className={boxStyles}>
        <img
          id={id}
          src={placeholder}
          data-src={src}
          data-srcset={srcset}
          alt={alt}
          className={imgStyles}
        />
      </Box>
      {caption ? (
        <Typography as="figcaption" variant={TypographyVariant.SMALL}>
          {caption}
        </Typography>
      ) : undefined}
    </Box>
  );
};

export default HImage;
