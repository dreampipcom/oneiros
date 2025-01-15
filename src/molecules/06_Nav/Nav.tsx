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
import { Logo, ELogoSize } from '../../atoms/04_Logo';
import { SystemIcon, EIcon, EIconCollection } from '../../atoms/05_SystemIcon';
import { Image } from '../../atoms/08_Image';
import {
  Grid,
  EGridVariant,
  EBleedVariant,
  EGradientVariant,
} from '../../atoms/10_Grid';
import { Popover } from '../../atoms/15_Popover';
import { DreamPipColors } from '../../../dist/esm/tailwind.config.ts';

export enum ENavControlVariant {
  BREADCRUMB,
  AUDIO_PLAYER,
  CTA,
  BUTTON,
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
  TWO_CENTER_ALWAYS = 'two-center-always',
  THREE_CENTER_141424_STACK = 'three-center-stack',
  ONE_ROW_ELLIPSIS = 'one-row-ellipsis',
  IMAGE = 'image',
}

export enum ENavItemVariant {
  LINK = 'link',
  BUTTON = 'button',
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
      icon: EIcon.googleplay,
      href: 'https://play.google.com/store/apps/details?id=com.angeloreale.purizumobile',
      target: '_blank',
      alt: 'Download on Google Play.',
    },
    {
      type: ESpotBadgeVariant.BRANDED_ICON,
      icon: EIcon.appstore,
      href: 'https://apps.apple.com/us/app/purizu/id1639022876',
      target: '_blank',
      alt: 'Download on App Store.',
    },
  ],
  messages: [
    // {
    //   cap: '50% off!',
    //   start: new Date(),
    //   end: new Date(),
    //   badges: [],
    //   content: "Don't miss this opportunity to.",
    //   href: '',
    //   target: '_blank',
    //   alt: 'Offer spot accessible',
    //   type: ESpotMessageType.OFFER,
    // },
  ],
  image: {
    mobile: '',
    desktop: 'https://i.giphy.com/26DNfl7IrX8b40klW.webp',
  },
  variant: ESpotVariant.TWO_CENTER_ALWAYS,
  status: ESpotStatus.ACTIVE,
};

export const DEFAULT_PROMOS = [DEFAULT_PROMO];

interface IBadge {
  type?: ESpotBadgeVariant;
  icon?: EIcon;
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

const DEFAULT_L1_NAV_ITEMS = [
  {
    name: 'Home',
    id: 'home',
    title: 'Home',
    type: ENavItemVariant.BUTTON,
    icon: EIcon['home-thatched'],
    href: '/',
    target: '_blank',
    l2: [],
  },
  {
    name: 'Join',
    id: 'join',
    title: 'join',
    type: ENavItemVariant.BUTTON,
    icon: EIcon.login,
    href: '/join',
    target: '_blank',
    l2: [],
  },
  {
    name: 'Episodes',
    id: 'episodes',
    title: 'Episodes',
    type: ENavItemVariant.BUTTON,
    icon: EIcon['music-note'],
    href: '/episodes',
    target: '_blank',
    l2: [],
  },
  {
    name: 'Agenda',
    id: 'agenda',
    title: 'agenda',
    type: ENavItemVariant.BUTTON,
    icon: EIcon.calendar,
    href: '/agenda',
    target: '_blank',
    l2: [],
  },
  {
    name: 'About',
    id: 'about',
    title: 'about',
    type: ENavItemVariant.BUTTON,
    icon: EIcon['alert-circle'],
    href: '/who',
    target: '_blank',
    l2: [],
  },
];

const AUTHENTICATED_L1_NAV_ITEMS = [
  {
    name: 'Home',
    id: 'home',
    title: 'Home',
    type: ENavItemVariant.BUTTON,
    icon: EIcon['home-thatched'],
    href: '/',
    target: '_blank',
    l2: [],
  },
  {
    name: 'Join',
    id: 'join',
    title: 'join',
    type: ENavItemVariant.BUTTON,
    icon: EIcon.login,
    href: '/join',
    target: '_blank',
    l2: [],
  },
  {
    name: 'Episodes',
    id: 'episodes',
    title: 'Episodes',
    type: ENavItemVariant.BUTTON,
    icon: EIcon['music-note'],
    href: '/episodes',
    target: '_blank',
    l2: [],
  },
  {
    name: 'Agenda',
    id: 'agenda',
    title: 'agenda',
    type: ENavItemVariant.BUTTON,
    icon: EIcon.calendar,
    href: '/agenda',
    target: '_blank',
    l2: [],
  },
  {
    name: 'About',
    id: 'about',
    title: 'about',
    type: ENavItemVariant.BUTTON,
    icon: EIcon['alert-circle'],
    href: '/who',
    target: '_blank',
    l2: [],
  },
];

export interface INavMenuItems {
  name?: string;
  type?: ENavItemVariant;
  id?: string;
  href?: string;
  target?: string;
  l2?: INavMenuItems[];
  icon?: EIcon;
}

export interface IControl {
  type: ENavControlVariant;
  label?: string;
  src?: string;
  href?: string;
  icon?: string;
  image?: string;
  className?: string;
  ariaLabel?: string;
  mods?: string;
  onRefresh?: () => void;
  onClick?: () => void;
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

export interface INavControls {
  top?: IControl[];
  center?: IControl[];
  bottom?: IControl[];
}

export interface INavControlsGenerator {
  controls?: INavControls;
  items?: INavMenuItems[];
  profile?: INavProfile;
  className?: string;
  onRefresh?: () => void;
}
export interface INavMenu {
  items?: INavMenuItems[];
}

export interface ISpotImage {
  mobile: string;
  desktop?: string;
}

export interface ISpot {
  badges?: IBadge[];
  messages?: IMessage[];
  image?: ISpotImage;
  status?: ESpotStatus;
  variant?: ESpotVariant;
}

export interface INavSpotGenerator {
  spots?: ISpot[];
  className?: string;
}

const PNoSpotContent = function ({ className, onRefresh }: IControl) {
  return (
    <Grid full className={className}>
      <Typography>No spot loaded.</Typography>
      <Button onClick={onRefresh} icon={EIcon['rotate-clockwise']} />
    </Grid>
  );
};

export const HSpot = function ({ spots, className }: INavSpotGenerator) {
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

  const parsedSpots = spots?.map((spot) => {
    const totalColumns = spots.reduce(
      (counter, spot) => spot.badges.length + spot.messages.length,
      0,
    );

    const getVariantClasses = ({ variant, column }) => {
      let classes = '';
      if (variant === ESpotVariant.IMAGE) {
        return classes;
      }
      if (variant === ESpotVariant.THREE_CENTER_141424_STACK) {
        if ((column + 1) % 3 === 0) {
          classes += ' justify-start col-start-1 col-span-full md:col-span-3';
        } else {
          classes += ` justify-center col-start-${column + 1 + 2 * column} col-span-3 md:col-span-1`;
        }
        classes += ` w-full flex align-center justify-self-center self-center md:col-start-${column + 3}`;
      }

      if (variant === ESpotVariant.TWO_CENTER_STACK) {
        if (column % 2 === 0) {
          classes +=
            ' justify-start col-start-1 col-span-full md:col-span-2 md:col-start-3';
        } else {
          classes += ' col-start-1 col-span-full md:col-span-2 md:col-start-5';
        }
        classes +=
          ' w-full flex align-center justify-center justify-self-center self-center';
      }

      if (variant === ESpotVariant.TWO_CENTER_ALWAYS) {
        if (column % 2 === 0) {
          classes += ' justify-start col-start-1 md:col-start-3';
        } else {
          classes += ' col-start-4 md:col-start-5';
        }
        classes +=
          ' w-full flex align-center justify-center justify-self-center self-center col-span-3 md:col-span-2';
        return classes;
      }
    };

    const columnBuffers = [];
    times(totalColumns, () => columnBuffers.push(''));
    const columnClasses = columnBuffers.map((column, index) => {
      const classes = getVariantClasses({
        variant: spot.variant,
        column: index,
      });
      return classes;
    });

    columnClasses.reverse();

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
  });

  return (
    <Grid full bleed={EBleedVariant.ZERO}>
      {spots.map((spot, i) => (
        <Grid
          variant={EGridVariant.DEFAULT}
          bleed={EBleedVariant.HORIZONTAL}
          background={{
            mobile: spot?.image?.mobile,
            desktop: spot?.image?.desktop,
          }}
          className={`${className} grid auto-rows-fr`}
        >
          {parsedSpots[i]}
        </Grid>
      ))}
    </Grid>
  );
};

export const CBreadcrumb = function ({ type, label, className }: IControl) {
  return (
    <Typography
      truncate
      controlType={type}
      className="justify-self-start self-center md:min-w-full md:!text-right col-span-full col-start-0 md:col-span-full col-start-0"
    >
      {label}
    </Typography>
  );
};

export const CAudioPlayer = function ({
  type,
  mods,
  src,
  label,
  className,
}: IControl) {
  const flip = mods?.includes('$flip');

  return (
    <AudioPlayer
      controlType={type}
      src={src}
      flip={flip}
      className="w-full"
      label={label}
    />
  );
};

export const CCTA = function ({ type, href, label, className }: IControl) {
  return (
    <Button
      controlType={type}
      className="w-full justify-self-start self-center col-span-full col-start-1"
      href={href}
    >
      {label}
    </Button>
  );
};

export const CButton = function ({
  type,
  className,
  onClick,
  icon,
  href,
  label,
  image,
  ariaLabel,
}: IControl) {
  return (
    <Button
      controlType={type}
      className={className}
      onClick={onClick}
      ariaLabel={ariaLabel}
      image={image}
      icon={icon}
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
  profile,
  items,
  onRefresh,
  className,
}: INavControlsGenerator) {
  const anchor = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (e, { control }) => {
    if (control?.onClick) control.onClick(e);
    setAnchorEl(anchor.current);
    if (control?.mods?.includes('$popover')) setOpen(true);
  };

  if (!(Object.values(controls)?.length > 0)) return <CNoControlContent />;

  const generateControl = ({ control, open, anchor, anchorEl, profile }) => {
    if (control?.type === ENavControlVariant.BREADCRUMB) {
      return <CBreadcrumb label={control?.label} />;
    }

    if (control?.type === ENavControlVariant.AUDIO_PLAYER) {
      return (
        <CAudioPlayer
          label={control?.label}
          src={control?.src}
          mods={control?.mods}
        />
      );
    }

    if (control?.type === ENavControlVariant.CTA) {
      return <CCTA label={control?.label} href={control?.href} />;
    }

    if (control?.type === ENavControlVariant.BUTTON) {
      const image =
        control?.image === '$userProfile' ? profile?.image : control?.image;
      const skip = control?.mods?.includes('$skip');

      const buttonClasses = `w-full justify-self-start self-center col-span-full ${!skip ? 'col-start-1' : ''} `;
      if (skip) return;
      return (
        <div ref={anchor}>
          <CButton
            onClick={(e) => {
              handleClick(e, { control });
            }}
            image={image}
            icon={control?.icon}
            label={control?.label}
            href={control?.href}
          />
          {open ? (
            <Popover float anchor={anchorEl} onClose={() => setOpen(false)}>
              <Typography inherit className="flex md:hidden m-a2">
                @{profile?.displayName || profile?.handle || 'dear'}
                :@dpip.cc
              </Typography>
              {items?.map((item) => {
                if (item?.type === ENavItemVariant.BUTTON) {
                  return (
                    <Button
                      buttonTheme="secondary"
                      className="m-a1"
                      href={item?.href}
                      icon={item?.icon}
                    />
                  );
                }
                return (
                  <Link className="m-a1" inverse href={item?.href}>
                    {item?.title}
                  </Link>
                );
              })}
            </Popover>
          ) : undefined}
        </div>
      );
    }
    return <CNoControlContent onRefresh={onRefresh} />;
  };

  return (
    <Grid
      bleed={EBleedVariant.ZERO}
      variant={EGridVariant.THREE_COLUMNS}
      className={`${className} md:rtl-grid gap-b1 md:gap-b1 w-full auto-rows-fr auto-cols-fr`}
    >
      {controls?.top.map((control) =>
        generateControl({ control, profile, open, anchor, anchorEl }),
      )}
      {controls?.center
        .map((control) =>
          generateControl({ control, profile, open, anchor, anchorEl }),
        )
        .filter((e) => e)}
      {controls?.bottom.map((control) =>
        generateControl({ control, profile, open, anchor, anchorEl }),
      )}
    </Grid>
  );
};

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
  hideBg?: boolean;
  hideTheme?: boolean;
  onThemeChange?: () => void;
  fetchNewData?: () => void;
  theme?: 'light' | 'dark';
}

export const HNav = function ({
  id = 'molecule__Nav',
  className = '',
  locale = 'en',
  profile,
  breadcrumb = 'whereami',
  menu,
  controls,
  spots = DEFAULT_PROMOS,
  hideSpots,
  hideControls,
  hideMenu,
  hideProfile,
  hideTheme = false,
  hideBg = false,
  prefix,
  onThemeChange = () => {},
  fetchNewData,
  theme = 'light',
}: INav) {
  const DEFAULT_CONTROLS = {
    top: [
      {
        type: ENavControlVariant.BREADCRUMB,
        label: NavLocale.default.home,
      },
    ],
    center: [
      {
        type: ENavControlVariant.BUTTON,
        icon: EIcon.lightbulb,
        mods: hideTheme ? '$skip' : '',
        onClick: onThemeChange,
      },
      {
        type: ENavControlVariant.BUTTON,
        icon: EIcon['music-note'],
        href: '/episodes',
      },
      {
        type: ENavControlVariant.BUTTON,
        icon: EIcon.login,
        href: '/join',
      },
    ],
    bottom: [
      {
        type: ENavControlVariant.AUDIO_PLAYER,
        mods: '',
        label: 'Rotations portal live',
        src: 'https://www.dremapip.com/api/nexus/audio',
      },
    ],
  };

  const DEFAULT_PROFILE = {
    displayName: 'Lorinha',
    handle: 'loretta',
    email: 'Lorenzetti@Lorenzus.zu',
    image:
      'https://avatars.steamstatic.com/776da1334bdeef44dd70be72d6892847c1e7cd0b_full.jpg',
  };

  const MOBILE_MENU_CONTROLS = {
    top: [
      {
        type: ENavControlVariant.BUTTON,
        icon: EIcon.apps,
        image: '$userProfile',
        mods: '$popover',
        ariaLabel: 'menu',
      },
      {
        type: ENavControlVariant.BUTTON,
        icon: EIcon.login,
        href: '/join',
      },
      {
        type: ENavControlVariant.BUTTON,
        icon: EIcon['music-note'],
        href: '/episodes',
      },
    ],
    center: [
      {
        type: ENavControlVariant.AUDIO_PLAYER,
        label: 'Rotations portal live',
        src: 'https://www.dremapip.com/api/nexus/audio',
        mods: '$flip',
      },
    ],
    bottom: [],
  };

  const MOBILE_PRESUB_CONTROLS = {
    top: [],
    center: [],
    bottom: [
      {
        type: ENavControlVariant.BREADCRUMB,
        label: NavLocale.default.home,
      },
    ],
  };

  const DESKTOP_MENU_CONTROLS = {
    top: [
      {
        type: ENavControlVariant.BUTTON,
        icon: EIcon.apps,
        image: '$userProfile',
        mods: '$popover',
        ariaLabel: 'menu',
      },
    ],
    center: [],
    bottom: [],
  };

  const DEFAULT_MENU = {
    items: DEFAULT_L1_NAV_ITEMS,
    controls: MOBILE_MENU_CONTROLS,
    controlsDesktop: DESKTOP_MENU_CONTROLS,
    presub: MOBILE_PRESUB_CONTROLS,
  };

  const AUTHENTICATED_MENU = {
    items: AUTHENTICATED_L1_NAV_ITEMS,
    controls: MOBILE_MENU_CONTROLS,
  };

  /* user not logged, so no DEFAULT */
  const castProfile = profile;

  const castMenu = menu || DEFAULT_MENU;
  const castControls = controls || DEFAULT_CONTROLS;

  const [anchorEl, setAnchorEl] = useState(null);
  const anchor = useRef(null);

  const navSx = [
    {
      [`class01
        sticky
        top-0
        z-[999]
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
        min-h-a10
        dark:bg-transparent
        bg-transparent
        justify-between
        m-auto
        w-full
        max-w-[1280px]
        `]: true,
      [`class04
        dark:bg-primary-dark2
        bg-primary-soft
        `]: !!hideBg,
    },
  ];
  const toolsStyles = `${clsx(toolsSx)}`;

  return (
    <>
      {!hideSpots ? (
        <HSpot
          id={`${id}__spot`}
          spots={spots}
          className="grid min-h-a9 !bg-primary-dark dark:!bg-primary-soft"
        />
      ) : undefined}
      <nav className={navStyles}>
        <Grid
          id={id}
          full
          variant={EGridVariant.DEFAULT}
          gradient={hideBg ? undefined : EGradientVariant.SOFT}
        >
          <div className={toolsStyles}>
            <Grid
              variant={EGridVariant.DEFAULT}
              bleed={EBleedVariant.DEFAULT}
              className="grid px-a2"
            >
              <div className="justify-self-start self-start col-span-4 col-start-1 md:!col-span-2 md:!col-start-1">
                {!hideMenu ? (
                  <div className="flex" ref={anchor}>
                    {!hideControls ? (
                      <div>
                        <HControls
                          className="md:hidden grid md:justify-self-start self-end col-span-6 col-start-1 md:!col-span-3 md:!col-start-6"
                          items={castMenu.items}
                          controls={castMenu.controls}
                          profile={hideProfile ? undefined : profile}
                          onRefresh={fetchNewData}
                        />
                        <HControls
                          className="hidden md:grid md:justify-self-start self-end col-span-6 col-start-1 md:!col-span-3 md:!col-start-6"
                          items={castMenu.items}
                          profile={hideProfile ? undefined : profile}
                          controls={castMenu.controlsDesktop}
                          onRefresh={fetchNewData}
                          onThemeChange={onThemeChange}
                        />
                      </div>
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
              <div className="animate-pulse justify-self-end md:justify-self-center self-start md:self-center col-span-3 col-start-5 md:!col-span-2 md:!col-start-4">
                <Logo size={ELogoSize.RESPONSIVE} theme={theme} />
              </div>
              <div className="col-span-6 col-start-1 md:col-span-2 md:col-start-7  md:justify-self-end self-end md:self-start">
                {!hideControls ? (
                  <div>
                    <HControls
                      className="hidden md:grid"
                      controls={castControls}
                      profile={hideProfile ? undefined : profile}
                      onRefresh={fetchNewData}
                    />
                    <HControls
                      className="md:hidden grid"
                      controls={castMenu.presub}
                      profile={hideProfile ? undefined : profile}
                      onRefresh={fetchNewData}
                      onThemeChange={onThemeChange}
                    />
                  </div>
                ) : undefined}
              </div>
            </Grid>
          </div>
        </Grid>
      </nav>
    </>
  );
};

export default HNav;
