/* eslint   no-unreachable:0, consistent-return:0, function-paren-newline:0, react/no-unused-prop-types:0, react/jsx-one-expression-per-line:0, @typescript-eslint/no-unused-vars:0, no-import-assign:0, import/no-unresolved:0, import/no-webpack-loader-syntax:0, jsx-a11y/media-has-caption:0, no-nested-ternary:0, no-unused-vars:0, max-len:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, object-curly-newline:0 */
// @molecules/Nav.tsx
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import clsx from 'clsx';
import React, { useRef, useState, useEffect, useMemo } from 'react';
import { clone, times } from 'lodash';
import { AudioPlayer } from '../02_AudioPlayer';
import { Button, ButtonVariant, EButtonTheme } from '../../atoms/01_Button';
import { Typography } from '../../atoms/02_Typography';
import { Link } from '../../atoms/03_Link';
import { Logo } from '../../atoms/04_Logo';
import {
  SystemIcon,
  EIcon,
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
import { Popover } from '../../atoms/15_Popover';
import { DreamPipColors } from '../../../tailwind.config.ts';

export enum ENavControlVariant {
  BREADCRUMB,
  AUDIO_PLAYER,
  CTA,
}

export enum ESpotStatus {
  ACTIVE,
  DISMISSED,
  COMPLETED,
  DELETED,
}

export enum ESpotBadgeVariant {
  BRANDED_ICON,
  SYSTEM_ICON,
  CHIP,
  CUSTOM_IMAGE,
}

export enum ESpotMessageType {
  ANNOUNCEMENT,
  CAMPAIGN,
  OFFER,
  STATEMENT,
}

export enum ESpotVariant {
  TWO_CENTER_STACK = 'two-center-stack',
  THREE_CENTER_141424_STACK = 'three-center-stack',
  ONE_ROW_ELLIPSIS = 'one-row-ellipsis',
  IMAGE = 'image',
}

export enum ENavItemVariant {
  LINK = 'link',
  OTHER = 'other',
}

export enum ENavVariant {
  DEFAULT = 'default',
  AUTHENTICATED = 'authenticated',
}

type ILocales = 'en' | 'es-es';

export interface ILocaleString {
  [key: ILocales]: string;
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
  badges: [
    {
      type: ESpotBadgeVariant.BRANDED_ICON,
      icon: EBrandedIcon.googleplay,
      href: 'https://apps.apple.com/us/app/purizu/id1639022876',
      target: '_blank',
      alt: 'Download on Google Play.',
    },
    {
      type: ESpotBadgeVariant.BRANDED_ICON,
      icon: EBrandedIcon.appstore,
      href: '',
      target: '_blank',
      alt: 'Download on App Store.',
    },
  ],
  messages: [
    {
      cap: '50% off!',
      start: new Date(),
      end: new Date(),
      badges: [],
      content: "Don't miss this opportunity to.",
      href: '',
      target: '_blank',
      alt: 'Offer spot accessible',
      type: ESpotMessageType.OFFER,
    },
  ],
  image: 'https://www.dreampip.com/og-image.png',
  variant: ESpotVariant.THREE_CENTER_141424_STACK,
  status: ESpotStatus.ACTIVE,
};

export const DEFAULT_PROMOS = [DEFAULT_PROMO];

interface IBadge {
  type?: ESpotBadgeVariant;
  icon?: EBrandedIcon;
  href?: string;
  target?: string;
  alt?: string;
}

interface IMessage {
  cap?: string;
  start?: Date;
  end?: Date;
  badges?: IBadge[];
  content?: string;
  href?: string;
  target?: string;
  alt?: string;
  type?: ESpotMessageType;
}

export const DEFAULT_PROFILE = {
  displayName: 'Lorinha',
  handle: 'loretta',
  email: 'Lorenzetti@Lorenzus.zu',
  image:
    'https://avatars.steamstatic.com/776da1334bdeef44dd70be72d6892847c1e7cd0b_full.jpg',
};

export const DEFAULT_CONTROLS = {
  top: [
    {
      type: ENavControlVariant.BREADCRUMB,
      label: NavLocale.default.home,
    },
  ],
  center: [
    {
      type: ENavControlVariant.AUDIO_PLAYER,
      label: 'Rotations portal live',
      src: 'https://www.dremapip.com/api/nexus/audio',
    },
  ],
  bottom: [
    {
      type: ENavControlVariant.CTA,
      label: NavLocale.default.view,
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
  className?: string;
  onRefresh?: () => void;
}

export interface INavControls {
  top?: IControl[];
  center?: IControl[];
  bottom?: IControl[];
}

export interface INavControlsGenerator {
  controls?: INavControls;
  className?: string;
  onRefresh?: () => void;
}

export interface INavMenuItems {
  name?: string;
  type?: ENavItemVariant;
}

export interface INavMenu {
  items?: INavMenuItems[];
}

export interface INavProfile {
  handle?: string;
  displayName?: string;
  image?: string;
  badges?: IBadge[];
  awards?: unknown;
  ticks?: unknown;
  symbols?: unknown;
}

export interface ISpot {
  badges?: IBadge[];
  messages?: IMessage[];
}

export interface INavSpotGenerator {
  spots?: ISpot[];
  className?: string;
}

export interface INav {
  id?: string;
  className?: string;
  locale?: string;
  profile?: INavProfile;
  breadcrumb?: string;
  prefix?: string;
  menu?: INavMenu;
  spots?: ISpot[];
  controls?: INavControls;
  hideSpots?: boolean;
  hideControls?: boolean;
  hideMenu?: boolean;
  hideProfile?: boolean;
  fetchNewData?: () => void;
  theme?: 'light' | 'dark';
}

export const CBreadcrumb = function ({ type, label, className }: IControl) {
  return (
    <Typography
      controlType={type}
      className="justify-self-start self-center col-span-1 col-start-0 md:col-span-2 col-start-0"
    >
      {label}
    </Typography>
  );
};

export const CAudioPlayer = function ({
  type,
  src,
  label,
  className,
}: IControl) {
  return (
    <AudioPlayer
      controlType={type}
      src={src}
      className="w-full"
      label={label}
    />
  );
};

export const CCTA = function ({ type, href, label, className }: IControl) {
  return (
    <Button
      controlType={type}
      className="w-full justify-self-start self-center  col-span-full col-start-1"
      href={href}
    >
      {label}
    </Button>
  );
};

const CNoControlContent = function ({ className, onRefresh }: IControl) {
  return (
    <Grid full className={className}>
      <Typography>No controls loaded.</Typography>
      <Button onClick={onRefresh} icon={EIcon['rotate-clockwise']} />
    </Grid>
  );
};

export const HControls = function ({
  controls,
  onRefresh,
  className,
}: INavControlsGenerator) {
  if (!(Object.values(controls)?.length > 0)) return <CNoControlContent />;

  const generateControl = ({ control }) => {
    if (control?.type === ENavControlVariant.BREADCRUMB) {
      return <CBreadcrumb label={control?.label} />;
    }

    if (control?.type === ENavControlVariant.AUDIO_PLAYER) {
      return <CAudioPlayer label={control?.label} src={control?.src} />;
    }

    if (control?.type === ENavControlVariant.CTA) {
      return <CCTA label={control?.label} href={control?.href} />;
    }
    return <CNoControlContent onRefresh={onRefresh} />;
  };

  return (
    <Grid full className={`${className} w-full auto-rows-fr auto-cols-fr`}>
      {controls?.top.map((control) => generateControl({ control }))}
      {controls?.center.map((control) => generateControl({ control }))}
      {controls?.bottom.map((control) => generateControl({ control }))}
    </Grid>
  );
};

const PNoSpotContent = function ({ className, onRefresh }: IControl) {
  return (
    <Grid full className={className}>
      <Typography>No spot loaded.</Typography>
      <Button onClick={onRefresh} icon={EIcon['rotate-clockwise']} />
    </Grid>
  );
};

export const HSpot = function ({ spots, className }: INavSpotGenerator) {
  console.log({ spots });
  const allDismissed = spots.every(
    (spot) => spot.status !== ESpotStatus.ACTIVE,
  );
  if (allDismissed) return;
  if (!(Object.values(spots)?.length > 0)) return <PNoSpotContent />;

  const generateSpotBadge = ({ badge, columnClasses }) => {
    const classes = columnClasses.pop();
    if (badge?.type === ESpotBadgeVariant.BRANDED_ICON) {
      return [
        <Link
          className={classes}
          href={badge.href}
          target={badge.target}
          aria-label={badge.alt}
        >
          <SystemIcon collection={EIconCollection.BRANDED} icon={badge.icon} />
        </Link>,
      ];
    }

    if (badge?.type === ESpotBadgeVariant.SYSTEM_ICON) {
      return [
        <Link
          className={classes}
          href={badge.href}
          target={badge.target}
          aria-label={badge.alt}
        >
          <SystemIcon collection={EIconCollection.SYSTEM} icon={badge.icon} />
        </Link>,
      ];
    }

    return [<PNoSpotContent />];
  };

  const generateSpotMessage = ({ message, columnClasses }) => {
    const classes = columnClasses.pop();
    if (message?.type === 'lorem') console.log('ipsum');
    return [
      <Link
        truncate
        href="https://www.dreampip.com"
        className={`${classes} justify-self-center self-center !text-body-dark dark:!text-body-light`}
      >
        {message?.content}
      </Link>,
    ];
  };

  return (
    <Grid
      variant={EGridVariant.DEFAULT}
      bleed={EBleedVariant.HORIZONTAL}
      background={{
        mobile: 'https://www.dreampip.com/og-image.png',
        desktop: 'https://i.giphy.com/26DNfl7IrX8b40klW.webp',
      }}
      className={`${className} grid auto-rows-fr`}
    >
      {spots?.map((spot) => {
        const totalColumns = spots.reduce(
          (counter, spot) => spot.badges.length + spot.messages.length,
          0,
        );

        const getVariantClasses = ({ variant, column }) => {
          console.log({ variant, column });
          let classes = '';
          if (variant === ESpotVariant.IMAGE) {
            return classes;
          }
          if (variant === ESpotVariant.THREE_CENTER_141424_STACK) {
            console.log({ math: (column + 1) % 3 });
            if ((column + 1) % 3 === 0) {
              classes +=
                ' justify-start col-start-0 col-span-full md:col-span-3';
            } else {
              classes += ` justify-center col-start-${column + 1 + 2 * column} col-span-3 md:col-span-1`;
            }
            classes += ` w-full flex  align-center justify-self-center self-center md:col-start-${column + 3}`;
          }
          return classes;
        };

        const columnBuffers = [];
        times(totalColumns, () => columnBuffers.push(''));
        const columnClasses = columnBuffers.map((column, index) => {
          const classes = getVariantClasses({
            variant: spot.variant,
            column: index,
          });
          console.log({ classes });
          return classes;
        });

        columnClasses.reverse();

        console.log({ columnClasses });

        const batchedColumns = spot.badges
          ?.map((badge) =>
            generateSpotBadge({
              badge,
              columnClasses,
            }),
          )
          .concat(
            spot.messages?.map((message) =>
              generateSpotMessage({
                message,
                columnClasses,
              }),
            ),
          );

        return batchedColumns;
      })}
    </Grid>
  );
};

export const HNav = function ({
  id = 'molecule__Nav',
  className = '',
  locale = 'en',
  profile = DEFAULT_PROFILE,
  breadcrumb = 'whereami',
  menu = DEFAULT_MENU,
  controls = DEFAULT_CONTROLS,
  spots = DEFAULT_PROMOS,
  hideSpots,
  hideControls,
  hideMenu,
  hideProfile,
  prefix,
  fetchNewData,
  theme = 'light',
}: INav) {
  const [open, setOpen] = useState(false);
  const anchor = useRef(null);

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
        {!hideSpots ? (
          <HSpot
            spots={spots}
            className="grid min-h-a9 !bg-primary-dark dark:!bg-primary-soft"
          />
        ) : undefined}
        <Grid
          full
          variant={EGridVariant.DEFAULT}
          bleed={EBleedVariant.RESPONSIVE}
        >
          <div className={toolsStyles}>
            <Grid
              variant={EGridVariant.DEFAULT}
              bleed={EBleedVariant.HORIZONTAL}
              gradient={EGradientVariant.SOFT}
              className="grid !p-a2 !px-a3 auto-rows-fr"
            >
              <div className="justify-self-start self-center col-span-3 col-start-1 md:!col-span-2 md:!col-start-1">
                {!hideMenu ? (
                  <div className="block" ref={anchor}>
                    <Button
                      icon={EIcon.apps}
                      onClick={() => {
                        setOpen(true);
                      }}
                      edge="end"
                      color="inherit"
                      aria-label="menu"
                      image={profile?.image}
                    />
                    {open ? (
                      <Popover anchor={anchor} onClose={() => setOpen(false)}>
                        Hello.
                      </Popover>
                    ) : undefined}
                  </div>
                ) : undefined}
                {!hideProfile ? (
                  <Typography className="hidden md:flex m-a2">
                    @{profile?.displayName || profile?.handle || 'dear'}
                    :@dpip.cc
                  </Typography>
                ) : undefined}
              </div>
              <div className="justify-self-center self-center col-span-3 col-start-4 md:!col-span-2 md:!col-start-4">
                <Link href="/">
                  <span style={{ display: 'flex', height: 120, width: 100 }}>
                    <Logo theme={theme} />
                  </span>
                </Link>
              </div>
              {!hideControls ? (
                <HControls
                  className="grid md:justify-self-start self-end col-span-6 col-start-1 md:!col-span-3 md:!col-start-6"
                  controls={controls}
                  onRefresh={fetchNewData}
                />
              ) : undefined}
              {!hideProfile ? (
                <Typography className="flex md:hidden m-a2">
                  @{profile?.displayName || profile?.handle || 'dear'}:@dpip.cc
                </Typography>
              ) : undefined}
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
