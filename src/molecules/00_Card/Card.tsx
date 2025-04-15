/* eslint no-nested-ternary:0, no-unused-vars:0, max-len:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, object-curly-newline:0 */
// @atoms/Card.tsx
import clsx from 'clsx';

import { Typography, TypographyVariant } from '../../atoms/02_Typography';
import Grid, {
  EBleedVariant,
  EGridVariant,
  EGradientVariant,
} from '../../atoms/10_Grid/Grid.tsx';
import { EIcon } from '../../atoms/05_SystemIcon';
import Button, { EButtonTheme } from '../../atoms/01_Button/Button.tsx';
import Link from '../../atoms/03_Link/Link.tsx';
import PriceTag, {
  EPriceTagVariant,
} from '../../atoms/06_PriceTag/PriceTag.tsx';
import Image, { EImageVariant } from '../../atoms/08_Image/Image.tsx';
import BadgeChip from '../../atoms/13_BadgeChip/BadgeChip.tsx';
import Review from '../../atoms/14_Review/Review.tsx';

export enum ECardVariant {
  DEFAULT = 'default',
  FULL_WIDTH_IMAGE = 'full-width-image',
}

export enum ECardBackground {
  GRADIENT = 'gradient',
  NONE = 'none',
}

interface ILocation {
  lat: number;
  lng: number;
  radius: number;
}

export interface ICard {
  id?: string;
  className?: string;
  onLike?: (item: string) => void;
  title?: string;
  description?: string;
  latlng?: ILocation;
  where?: string;
  when?: string;
  value?: string;
  link?: string;
  rating?: string;
  badgeText?: string;
  badgeLink?: string;
  selected?: boolean;
  images?: string[];
  background?: ECardBackground;
  variant?: ECardVariant;
  theme?: 'light' | 'dark';
}

export const HCard = function ({
  id = 'atom__Card',
  className = '',
  onLike,
  rating = '',
  link = 'https://dreampip.com',
  title = 'This is a very long title for a card to see how it displays on it.',
  description = 'This is a very long description for a card to see how it displays on it.',
  where = 'Home',
  when = 'Whenever',
  latlng = { lat: 0, lng: 0, radius: 0.4 },
  selected = false,
  value = '1800£',
  background = ECardBackground.NONE,
  badgeText = '',
  badgeLink = '',
  images = ['https://placehold.co/600x400'],
  variant = ECardVariant.FULL_WIDTH_IMAGE,
  theme = 'light',
}: ICard) {
  const gridSx = [
    {
      [`class00
        relative
        bg-card-white
        hover:bg-icon-soft
        p-a2
        `]: variant === ECardVariant.DEFAULT,
      [`class00
        relative
        bg-card-white
        hover:bg-icon-soft
        p-a0
        `]: variant === ECardVariant.FULL_WIDTH_IMAGE,
    },
  ];

  const gridStyles = `${clsx(gridSx)} ${className}`;

  return (
    <Grid
      theme={theme}
      id={id}
      className={gridStyles}
      variant={EGridVariant.ONE_COLUMN}
      bleed={EBleedVariant.ZERO}
      gradient={
        background === ECardBackground.NONE ? undefined : EGradientVariant.WHITE
      }
    >
      {images.length > 0 ? (
        <Grid className="relative" theme={theme} full>
          <Link href={link} faux>
            <Image
              src={images[0]}
              variant={EImageVariant.SIXTEEN_PER_NINE}
              className="col-span-full col-start-0 md:col-span-4 md:col-start-0 rounded-md overflow-hidden"
            />
          </Link>
          {rating ? (
            <Review
              theme={theme}
              className="absolute sm:left-a1 left-a2 sm:top-a1 top-a2"
            >
              {rating}
            </Review>
          ) : undefined}
          {onLike ? (
            <Button
              onClick={() => onLike(id)}
              theme={theme}
              buttonTheme={
                selected ? EButtonTheme.PASSION_SELECTED : EButtonTheme.PASSION
              }
              icon={selected ? EIcon.heart : EIcon['heart-broken']}
              className="!absolute sm:right-a1 right-a2 sm:top-a1 top-a2"
            />
          ) : undefined}
          {badgeText ? (
            <Link href={badgeLink || link} faux>
              <BadgeChip className="absolute left-a1 bottom-a1">
                {badgeText}
              </BadgeChip>
            </Link>
          ) : undefined}
          {variant === ECardVariant.FULL_WIDTH_IMAGE ? (
            <Typography
              variant={TypographyVariant.BODY}
              as="h3"
              truncate
              className="rounded-t-none p-a1 sm:p-a2 bg-primary-light dark:bg-primary-dark w-full col-start-0 col-span-2 absolute bottom-0 left-0"
            >
              {title}
            </Typography>
          ) : undefined}
        </Grid>
      ) : undefined}
      <Grid theme={theme} full className="gap-0">
        {images.length === 0 ? (
          <Grid
            variant={EGridVariant.TWELVE_COLUMNS}
            bleed={EBleedVariant.ZERO}
            className="grid gap-a2"
          >
            {onLike ? (
              <Button
                onClick={() => onLike(id)}
                theme={theme}
                buttonTheme={
                  selected
                    ? EButtonTheme.PASSION_SELECTED
                    : EButtonTheme.PASSION
                }
                icon={selected ? EIcon.heart : EIcon['heart-broken']}
                className="col-start-0 col-span-2 absolute right-a2"
              />
            ) : undefined}
            {rating ? (
              <Review theme={theme} className="col-span-4 col-start-0">
                {rating}
              </Review>
            ) : undefined}
            {badgeText ? (
              <Link
                href={badgeLink || link}
                faux
                className="col-span-4 col-start-0"
              >
                <BadgeChip className="">{badgeText}</BadgeChip>
              </Link>
            ) : undefined}
          </Grid>
        ) : undefined}
        {variant === ECardVariant.DEFAULT ? (
          <Link href={link} title={title} faux className="flex flex-col">
            {title ? (
              <Typography
                variant={TypographyVariant.H4}
                truncate
                className="pt-a2 w-full col-span-full col-start-0 md:col-span-full md:col-start-0"
              >
                {title}
              </Typography>
            ) : undefined}
            {description ? (
              <Typography
                inherit
                variant={TypographyVariant.SMALL}
                className="w-full pt-a1 pb-0 text-neutral-light dark:text-body-dark col-span-full col-start-0 md:col-span-full md:col-start-0"
              >
                {description}
              </Typography>
            ) : undefined}
            {where ? (
              <Typography
                inherit
                variant={TypographyVariant.SMALL}
                data-lat={latlng.lat}
                data-lng={latlng.lng}
                className="w-full pt-a1 pb-0 text-neutral-light dark:text-body-dark col-span-full col-start-0 md:col-span-full md:col-start-0"
              >
                {where}
              </Typography>
            ) : undefined}
            {when ? (
              <Typography
                inherit
                variant={TypographyVariant.SMALL}
                className="w-full pt-0 text-neutral-light dark:text-body-dark col-span-full col-start-0 md:col-span-full md:col-start-0"
              >
                {when}
              </Typography>
            ) : undefined}
            {value ? (
              <PriceTag
                variant={EPriceTagVariant.NORMAL}
                className="w-full pt-a2 pb-a0 col-span-4 col-start-0 md:col-span-4 md:col-start-0"
              >
                {value}
              </PriceTag>
            ) : undefined}
          </Link>
        ) : undefined}
      </Grid>
    </Grid>
  );
};

export default HCard;
