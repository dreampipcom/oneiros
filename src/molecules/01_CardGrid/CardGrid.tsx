/* eslint no-nested-ternary:0, no-unused-vars:0, max-len:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, object-curly-newline:0 */
// @atoms/CardGrid.tsx
import clsx from 'clsx';
import type { ICard } from '../00_Card/Card.tsx';
import Card from '../00_Card/Card.tsx';
import Grid, {
  EBleedVariant,
  EGridVariant,
} from '../../atoms/10_Grid/Grid.tsx';

export const DEFAULT_CARDS = [
  {
    id: 'molecule__cardgrid__card--01',
    className: '',
    onLike: () => {},
    title: 'This is a card example #01',
    where: 'Home',
    when: 'February',
    price: '299€',
    link: 'https://dreampip.com',
    badgeLink: 'https://dreampip.com',
    rating: '3/5',
    selected: false,
  },
  {
    id: 'molecule__cardgrid__card--02',
    className: '',
    onLike: () => {},
    title: 'This is a card example #02',
    where: 'Home',
    when: 'February',
    price: '299€',
    link: 'https://dreampip.com',
    badgeLink: 'https://dreampip.com',
    rating: '',
    selected: true,
  },
  {
    id: 'molecule__cardgrid__card--03',
    className: '',
    onLike: () => {},
    title: 'This is a card example #03',
    where: 'Home',
    when: 'February',
    price: '299€',
    link: 'https://dreampip.com',
    badgeLink: 'https://dreampip.com',
    rating: '3/5',
    selected: false,
  },
  {
    id: 'molecule__cardgrid__card--04',
    className: '',
    onLike: () => {},
    title: 'This is a card example #04',
    where: 'Home',
    when: 'February',
    price: '299€',
    link: 'https://dreampip.com',
    badgeLink: 'https://dreampip.com',
    rating: '2/5',
    selected: false,
  },
  {
    id: 'molecule__cardgrid__card--05',
    className: '',
    onLike: () => {},
    title: 'This is a card example #05',
    where: 'Home',
    when: 'February',
    price: '299€',
    link: 'https://dreampip.com',
    badgeLink: 'https://dreampip.com',
    rating: '3.5/5',
    selected: false,
  },
  {
    id: 'molecule__cardgrid__card--06',
    className: '',
    onLike: () => {},
    title: 'This is a card example #06',
    where: 'Home',
    when: 'February',
    price: '299€',
    link: 'https://dreampip.com',
    badgeLink: 'https://dreampip.com',
    rating: '3.6/5',
    selected: false,
  },
  {
    id: 'molecule__cardgrid__card--07',
    className: '',
    onLike: () => {},
    title: 'This is a card example #07',
    where: 'Home',
    when: 'February',
    price: '299€',
    link: 'https://dreampip.com',
    badgeLink: 'https://dreampip.com',
    rating: '5/5',
    selected: false,
  },
  {
    id: 'molecule__cardgrid__card--08',
    className: '',
    onLike: () => {},
    title: 'This is a card example #08',
    where: 'Home',
    when: 'February',
    price: '299€',
    link: 'https://dreampip.com',
    badgeLink: 'https://dreampip.com',
    rating: '4.8/5',
    selected: false,
  },
  {
    id: 'molecule__cardgrid__card--09',
    className: '',
    onLike: () => {},
    title: 'This is a card example #08',
    where: 'Home',
    when: 'February',
    price: '299€',
    link: 'https://dreampip.com',
    badgeLink: 'https://dreampip.com',
    rating: '3/5',
    selected: false,
  },
];

export const BLOG_POSTS = [
  {
    id: 'molecule__cardgrid__card--01',
    className: '',
    title: 'This is a card example #01',
    link: 'https://dreampip.com',
  },
  {
    id: 'molecule__cardgrid__card--02',
    className: '',
    title: 'This is a card example #02',
    link: 'https://dreampip.com',
  },
  {
    id: 'molecule__cardgrid__card--03',
    className: '',
    title: 'This is a card example #03',
    link: 'https://dreampip.com',
  },
  {
    id: 'molecule__cardgrid__card--04',
    className: '',
    title: 'This is a card example #04',
    link: 'https://dreampip.com',
  },
  {
    id: 'molecule__cardgrid__card--05',
    className: '',
    title: 'This is a card example #05',
    link: 'https://dreampip.com',
  },
  {
    id: 'molecule__cardgrid__card--06',
    className: '',
    title: 'This is a card example #06',
    link: 'https://dreampip.com',
  },
  {
    id: 'molecule__cardgrid__card--07',
    className: '',
    title: 'This is a card example #07',
    link: 'https://dreampip.com',
  },
  {
    id: 'molecule__cardgrid__card--08',
    className: '',
    title: 'This is a card example #08',
    link: 'https://dreampip.com',
  },
  {
    id: 'molecule__cardgrid__card--09',
    className: '',
    title: 'This is a card example #08',
    link: 'https://dreampip.com',
  },
];

export enum ECardGridVariant {
  DEFAULT = 'default',
  FULL_WIDTH_IMAGE = 'full-width-image',
}

export interface IBackgroundImage {
  mobile?: string;
  desktop?: string;
}

export interface ICardGrid {
  id?: string;
  className?: string;
  cards?: ICard[];
  onLikeCard?: () => void;
  variant?: ECardGridVariant;
  theme?: 'light' | 'dark';
}

export const HCardGrid = function ({
  id = 'atom__CardGrid',
  className = '',
  cards = BLOG_POSTS,
  onLikeCard,
  theme = 'light',
  variant = ECardGridVariant.FULL_WIDTH_IMAGE,
}: ICardGrid) {
  const gridSx = [
    {
      [`class01
        grid
        sm:grid-cols-12
        sm:!gap-a0
        md:!gap-a4
        `]: variant === ECardGridVariant.DEFAULT,
      [`class02
        grid
        sm:grid-cols-12
        sm:!gap-a0
        md:!gap-a1
      `]: variant === ECardGridVariant.FULL_WIDTH_IMAGE,
    },
  ];

  const gridStyles = `${clsx(gridSx)} ${className}`;

  const cardSx = [
    {
      [`class01
        col-span-full 
        sm:col-span-6 
        lg:col-span-4 
        col-start-0
        `]: variant === ECardGridVariant.DEFAULT,
      [`class02
        col-span-full 
        sm:col-span-6 
        lg:col-span-6 
        col-start-0
      `]: variant === ECardGridVariant.FULL_WIDTH_IMAGE,
    },
  ];

  const cardStyles = `${clsx(cardSx)}`;

  return (
    <Grid
      theme={theme}
      id={id}
      className={gridStyles}
      variant={EGridVariant.TWELVE_COLUMNS}
      bleed={
        variant === ECardGridVariant.FULL_WIDTH_IMAGE
          ? EBleedVariant.NONE
          : EBleedVariant.RESPONSIVE
      }
    >
      {cards.map((card) => (
        <Card
          key={`molecules__cardgrid__card__element--${card.title}--${card.id}`}
          onLike={onLikeCard}
          {...card}
          theme={theme}
          variant={variant}
          className={cardStyles}
        />
      ))}
    </Grid>
  );
};

export default HCardGrid;
