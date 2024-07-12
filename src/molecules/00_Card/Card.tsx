/* eslint no-nested-ternary:0, no-unused-vars:0, max-len:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, object-curly-newline:0 */
// @atoms/Card.tsx
import clsx from 'clsx';

import { Typography, TypographyVariant } from '../../atoms/02_Typography';
import Grid, {
  EBleedVariant,
  EGridVariant,
  EGradientVariant,
} from '../../atoms/10_Grid/Grid.tsx';
import { ESystemIcon } from '../../atoms/05_SystemIcon';
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
}

export enum ECardBackground {
  GRADIENT = 'gradient',
  NONE = 'none',
}

export interface ICard {
  id?: string;
  className?: string;
  onLike?: (item: string) => void;
  title?: string;
  where?: string;
  when?: string;
  price?: string;
  link?: string;
  rating?: string;
  badgeLink?: string;
  selected?: boolean;
  image?: string;
  background?: ECardBackground;
  theme?: 'light' | 'dark';
}

export const HCard = function ({
  id = 'atom__Card',
  className = '',
  onLike = () => {},
  rating = '4.5/5',
  link = 'https://dreampip.com',
  title = 'This is a very long title for a card to see how it displays on it.',
  where = 'Home',
  when = 'Whenever',
  selected = false,
  price = '1900€',
  background = ECardBackground.NONE,
  badgeLink = '',
  image = 'https://placehold.co/600x400',
  theme = 'light',
}: ICard) {
  const gridSx = [
    {
      [`class00
        relative
        bg-card-white
        hover:bg-icon-soft
        p-a2
        `]: true,
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
      <Grid className="relative" theme={theme} full>
        <Link href={link} faux>
          <Image
            src={image}
            variant={EImageVariant.SIXTEEN_PER_NINE}
            className="col-span-full col-start-0 md:col-span-4 md:col-start-0 rounded-md overflow-hidden"
          />
        </Link>
        <Review theme={theme} className="absolute left-a1 sm:top-a1 top-a2">
          {rating}
        </Review>
        <Button
          onClick={() => onLike(id)}
          theme={theme}
          buttonTheme={
            selected ? EButtonTheme.PASSION_SELECTED : EButtonTheme.PASSION
          }
          icon={selected ? ESystemIcon.heart : ESystemIcon['heart-broken']}
          className="absolute right-a1 sm:top-a1 top-a2"
        />
        <Link href={badgeLink || link} faux>
          <BadgeChip className="absolute left-a1 bottom-a1" />
        </Link>
      </Grid>
      <Grid theme={theme} full className="gap-0">
        <Link href={link} title={title} faux className="flex flex-col">
          <Typography
            variant={TypographyVariant.H4}
            truncate
            className="w-full pt-a2 col-span-full col-start-0 md:col-span-full md:col-start-0"
          >
            {title}
          </Typography>
          <Typography
            inherit
            variant={TypographyVariant.SMALL}
            className="w-full pt-a1 pb-0 text-neutral-light dark:text-body-dark col-span-full col-start-0 md:col-span-full md:col-start-0"
          >
            {where}
          </Typography>
          <Typography
            inherit
            variant={TypographyVariant.SMALL}
            className="w-full pt-0 text-neutral-light dark:text-body-dark col-span-full col-start-0 md:col-span-full md:col-start-0"
          >
            {when}
          </Typography>
          <PriceTag
            variant={EPriceTagVariant.NORMAL}
            className="w-full pt-a2 pb-a0 col-span-4 col-start-0 md:col-span-4 md:col-start-0"
          >
            {price}
          </PriceTag>
        </Link>
      </Grid>
    </Grid>
  );
};

export default HCard;
