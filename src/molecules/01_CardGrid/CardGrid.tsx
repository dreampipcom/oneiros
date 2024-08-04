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
    rating: '4.5/5',
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

export enum ECardGridVariant {
  DEFAULT = 'default',
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
  theme?: 'light' | 'dark';
}

export const HCardGrid = function ({
  id = 'atom__CardGrid',
  className = '',
  cards = DEFAULT_CARDS,
  onLikeCard = () => {},
  theme = 'light',
}: ICardGrid) {
  const gridSx = [
    {
      [`class01
        grid
        sm:grid-cols-12
        sm:!gap-a0
        md:!gap-a4
        `]: true,
    },
  ];

  const gridStyles = `${clsx(gridSx)} ${className}`;

  return (
    <Grid
      theme={theme}
      id={id}
      className={gridStyles}
      variant={EGridVariant.TWELVE_COLUMNS}
      bleed={EBleedVariant.RESPONSIVE}
    >
      {cards.map((card) => (
        <Card
          key={`molecules__cardgrid__card__element--${card.title}`}
          onLike={onLikeCard}
          {...card}
          theme={theme}
          className="col-span-full sm:col-span-6 lg:col-span-4 col-start-0"
        />
      ))}
    </Grid>
  );
};

export default HCardGrid;
