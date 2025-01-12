/* eslint   no-unreachable:0, react/jsx-one-expression-per-line:0, @typescript-eslint/no-unused-vars:0, no-import-assign:0, import/no-unresolved:0, import/no-webpack-loader-syntax:0, jsx-a11y/media-has-caption:0, no-nested-ternary:0, no-unused-vars:0, max-len:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, object-curly-newline:0 */
// @molecules/Nav.tsx
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import clsx from 'clsx';
import React, { useRef, useState, useEffect, useMemo } from 'react';
import { AudioPlayer } from '../02_AudioPlayer';
import { Button, ButtonVariant, EButtonTheme } from '../../atoms/01_Button';
import { Typography } from '../../atoms/02_Typography';
import { Link } from '../../atoms/03_Link';
import { Logo } from '../../atoms/04_Logo';
import {
  SystemIcon,
  ESystemIcon,
  EBrandedIcon,
  EIconCollection,
} from '../../atoms/05_SystemIcon';
import { Image } from '../../atoms/08_Image';
import {
  Grid,
  EGridVariant,
  EBleedVariant,
  EGradientVariant,
} from '../../atoms/10_Grid';
import { DreamPipColors } from '../../../dist/esm/tailwind.config.ts';

export enum ENavControlVariant {
  BREADCRUMB,
  PLAYER,
  CTA,
}

export enum ENavItemVariant {
  LINK = 'link',
  OTHER = 'other',
}

export enum ENavVariant {
  DEFAULT = 'default',
  AUTHENTICATED = 'authenticated',
}

export const NavLocale = {
  default: {
    locale: 'en-us',
    home: 'Home',
    view: 'View more',
    calendar: 'Add to calendar',
  },
  en: {
    locale: 'en-us',
    home: 'Home',
    view: 'View more',
    calendar: 'Add to calendar',
  },
  'it-it': {
    locale: 'it-it',
    home: 'Casa',
    view: 'Vedi altro',
    calendar: 'Aggiungi al calendario',
  },
  'pt-br': {
    locale: 'pt-pt',
    home: 'Casa',
    view: 'Veja mais',
    calendar: 'Adicionar ao calendário',
  },
  'es-es': {
    locale: 'es-es',
    home: 'Hogar',
    view: 'Ver más',
    calendar: 'Añadir al calendario',
  },
  'de-de': {
    locale: 'de-de',
    home: 'Haus',
    view: 'Mehr anzeigen',
    calendar: 'Zum Kalender hinzufügen',
  },
  'fr-fr': {
    locale: 'fr-fr',
    home: 'Mainson',
    view: 'Voir plus',
    calendar: 'Ajouter au calendrier',
  },
  ro: {
    locale: 'ro-ro',
    home: 'Home',
    view: 'Vezi mai mult',
    calendar: 'Adaugă în calendar',
  },
  'pl-pl': {
    locale: 'pl-pl',
    home: 'Home',
    view: 'Zobacz więcej',
    calendar: 'Dodaj do kalendarza',
  },
  'cs-cz': {
    locale: 'cs-cz',
    home: 'Home',
    view: 'Zobrazit více',
    calendar: 'Přidat do kalendáře',
  },
  'sv-se': {
    locale: 'sv-se',
    home: 'Home',
    view: 'Visa mer',
    calendar: 'Lägg till i kalendern',
  },
  'et-ee': {
    locale: 'et-ee',
    home: 'Home',
    view: 'Vaata rohkem',
    calendar: 'Lisa kalendrisse',
  },
  'ja-jp': {
    locale: 'ja-jp',
    home: 'Home',
    view: 'もっと見る',
    calendar: 'カレンダーに追加',
  },
};

export const DEFAULT_PROMO = {
  badges: [],
  message: {},
};

export const DEFAULT_PROFILE = {
  name: 'Lorinha',
  email: 'Lorenzetti@Lorenzus.zu',
  image:
    'https://avatars.steamstatic.com/776da1334bdeef44dd70be72d6892847c1e7cd0b_full.jpg',
};

export const DEFAULT_CONTROLS = {
  top: [
    {
      type: ENavControlVariant.BREADCRUMB,
      label: NavLocale.home,
    },
  ],
  center: [
    {
      type: ENavControlVariant.PLAYER,
      label: 'Rotations portal live',
      src: 'https://www.dremapip.com/api/nexus/audio',
    },
  ],
  bottom: [
    {
      type: ENavControlVariant.CTA,
      label: NavLocale.view,
      href: '/join',
    },
  ],
};

const DEFAULT_L1_NAV_ITEMS = [
  {
    name: 'Home',
    type: 'link',
    value: 'https://www.dreampip.com',
    target: '_blank',
    l2: [],
  },
  {
    name: 'Home',
    type: 'link',
    value: 'https://www.dreampip.com',
    target: '_blank',
    l2: [],
  },
  {
    name: 'Home',
    type: 'link',
    value: 'https://www.dreampip.com',
    target: '_blank',
    l2: [],
  },
  {
    name: 'Home',
    type: 'link',
    value: 'https://www.dreampip.com',
    target: '_blank',
    l2: [],
  },
];

export const DEFAULT_MENU = {
  items: DEFAULT_L1_NAV_ITEMS,
};

export interface IControl {
  type: ENavControlVariant;
  label?: string;
  src?: string;
  href?: string;
}

export interface INavControls {
  top?: IControl[];
  center?: IControl[];
  bottom?: IControl[];
}

export interface INavMenuItems {
  name?: string;
  type?: ENavItemVariant;
}

export interface INavMenu {
  items?: INavMenuItems[];
}

export interface INavProfile {
  name?: string;
  image?: string;
  badges?: unknown;
  awards?: unknown;
  ticks?: unknown;
  symbols?: unknown;
}

export interface INav {
  id?: string;
  className?: string;
  locale?: string;
  profile?: INavProfile;
  breadcrumb?: string;
  prefix?: string;
  menu?: INavMenu;
  controls?: INavControls;
  fetchNewData?: () => void;
  theme?: 'light' | 'dark';
}

export const HNav = function ({
  id = 'molecule__Nav',
  className = '',
  locale = 'en',
  profile = DEFAULT_PROFILE,
  breadcrumb = 'whereami',
  menu = DEFAULT_MENU,
  controls = DEFAULT_CONTROLS,
  prefix,
  fetchNewData,
  theme = 'light',
}: INav) {
  const [open, setOpen] = useState(false);

  const navSx = [
    {
      [`class01
        sticky
        top-a0
        z-50
        `]: true,
    },
  ];

  const navStyles = `${clsx(navSx)} ${className}`;

  const appSx = [
    {
      [`class02
        `]: true,
    },
  ];
  const appStyles = `${clsx(appSx)}`;

  const toolsSx = [
    {
      [`class03
        h-min-a10
        dark:bg-primary-dark2
        bg-primary-light
        justify-between
        `]: true,
    },
  ];
  const toolsStyles = `${clsx(toolsSx)}`;

  return (
    <div id={id}>
      <nav className={navStyles}>
        <Grid
          variant={EGridVariant.DEFAULT}
          bleed={EBleedVariant.ZERO}
          className="grid min-h-a9 !bg-primary-dark dark:!bg-primary-soft"
        >
          <a
            className={`${appStyles} flex w-full h-full justify-center items-center md:col-start-4 md:col-span-1 col-span-3 col-start-0"`}
            href="https://play.google.com/store/apps/details?id=com.angeloreale.purizumobile"
            aria-label="Download on App Store."
          >
            <SystemIcon
              collection={EIconCollection.BRANDED}
              icon={EBrandedIcon.googleplay}
            />
          </a>
          <a
            className={`${appStyles} flex w-full h-full justify-center items-center md:col-start-5 md:col-span-1 col-span-3 col-start-3"`}
            href="https://apps.apple.com/us/app/purizu/id1639022876"
            aria-label="Download on Google Play."
          >
            <SystemIcon
              collection={EIconCollection.BRANDED}
              icon={EBrandedIcon.appstore}
            />
          </a>
        </Grid>
        <Grid
          full
          variant={EGridVariant.DEFAULT}
          bleed={EBleedVariant.RESPONSIVE}
        >
          <div className={toolsStyles}>
            <Grid
              variant={EGridVariant.DEFAULT}
              bleed={EBleedVariant.ZERO}
              gradient={EGradientVariant.SOFT}
              className="grid !p-a2 !px-a3"
            >
              <div className="justify-self-start self-center col-span-2 col-start-0 md:!col-span-1 md:!col-start-0">
                <Button
                  icon={ESystemIcon.apps}
                  onClick={() => {
                    setOpen(true);
                  }}
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  image={profile?.image}
                />
                <Typography className="m-a2">
                  @{profile?.name}@:dpip.cc
                </Typography>
              </div>
              <div className="justify-self-center self-center col-span-2 col-start-2 md:!col-span-2 md:!col-start-4">
                <Link href="/">
                  <span style={{ display: 'flex', height: 120, width: 100 }}>
                    <Logo theme={theme} />
                  </span>
                </Link>
              </div>
              <Grid
                full
                className="grid md:justify-self-end self-center col-span-6 col-start-0 md:!col-span-3 md:!col-start-6"
              >
                <Typography className="justify-self-start self-center col-span-1 col-start-0 md:col-span-2 col-start-0">
                  {breadcrumb}
                </Typography>
                <AudioPlayer className="w-full" />
                <Button
                  className="w-full justify-self-start self-center col-span-1 col-start-1 md:col-span-2 col-start-3"
                  href="/join"
                >
                  {NavLocale[locale].view}
                </Button>
              </Grid>
            </Grid>
          </div>
        </Grid>
        {/* {interacted ? (
          <Drawer
            listItems={menuItems}
            classes={{
              drawer: classes.drawer,
              listwrapper: classes.listwrapper,
              link: classes.link,
            }}
            open={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            onOpen={() => setIsMenuOpen(true)}
          />
        ) : undefined}
        */}
      </nav>
    </div>
  );
};

export default HNav;
