/* eslint   no-unreachable:0, @typescript-eslint/no-unused-vars:0, no-import-assign:0, import/no-unresolved:0, import/no-webpack-loader-syntax:0, jsx-a11y/media-has-caption:0, no-nested-ternary:0, no-unused-vars:0, max-len:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, object-curly-newline:0 */
// @molecules/Nav.tsx
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import clsx from 'clsx';
import React, { useRef, useState, useEffect, useMemo } from 'react';
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
import { Grid, EGridVariant, EBleedVariant } from '../../atoms/10_Grid';
import { DreamPipColors } from '../../../dist/esm/tailwind.config.ts';

export const NavLocale = {
  default: {
    locale: 'en-us',
    view: 'View more',
    calendar: 'Add to calendar',
  },
  'it-it': {
    locale: 'it-it',
    view: 'Vedi altro',
    calendar: 'Aggiungi al calendario',
  },
  'pt-br': {
    locale: 'pt-pt',
    view: 'Veja mais',
    calendar: 'Adicionar ao calendário',
  },
  'es-es': {
    locale: 'es-es',
    view: 'Ver más',
    calendar: 'Añadir al calendario',
  },
  'de-de': {
    locale: 'de-de',
    view: 'Mehr anzeigen',
    calendar: 'Zum Kalender hinzufügen',
  },
  'fr-fr': {
    locale: 'fr-fr',
    view: 'Voir plus',
    calendar: 'Ajouter au calendrier',
  },
  ro: {
    locale: 'ro-ro',
    view: 'Vezi mai mult',
    calendar: 'Adaugă în calendar',
  },
  'pl-pl': {
    locale: 'pl-pl',
    view: 'Zobacz więcej',
    calendar: 'Dodaj do kalendarza',
  },
  'cs-cz': {
    locale: 'cs-cz',
    view: 'Zobrazit více',
    calendar: 'Přidat do kalendáře',
  },
  'sv-se': {
    locale: 'sv-se',
    view: 'Visa mer',
    calendar: 'Lägg till i kalendern',
  },
  'et-ee': {
    locale: 'et-ee',
    view: 'Vaata rohkem',
    calendar: 'Lisa kalendrisse',
  },
  'ja-jp': {
    locale: 'ja-jp',
    view: 'もっと見る',
    calendar: 'カレンダーに追加',
  },
};

export const DEFAULT_USER = {
  name: 'Lorinho',
  email: 'Lorenzetti@Lorenzus.zu',
  avatar: 'https://placeholder.com',
};

export const DEFAULT_NAV_ITEMS = {
  drawer: [
    {
      name: 'Home',
      type: 'link',
      value: 'https://www.dreampip.com',
      target: '_blank',
    },
  ],
};

export enum ENavVariant {
  DEFAULT = 'default',
}

export interface INav {
  id?: string;
  className?: string;
  locale?: string;
  breadcrumb?: string;
  prefix?: string;
  fetchNewData?: () => void;
  theme?: 'light' | 'dark';
}

export const HNav = function ({
  id = 'molecule__Nav',
  className = '',
  locale,
  breadcrumb = 'whereami',
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
        mr-a2
        relative
        block
        h-a4
        w-a8
        col-span-1
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
    <div id={id} className="relative">
      <nav className={navStyles}>
        <Grid
          variant={EGridVariant.DEFAULT}
          bleed={EBleedVariant.ZERO}
          className="grid bg-primary-dark place-items-center items-center"
        >
          <a
            className={appStyles}
            href="https://play.google.com/store/apps/details?id=com.angeloreale.purizumobile"
            aria-label="Download on App Store."
          >
            <SystemIcon
              collection={EIconCollection.BRANDED}
              icon={EBrandedIcon.googleplay}
            />
          </a>
          <a
            className={appStyles}
            href="https://apps.apple.com/us/app/purizu/id1639022876"
            aria-label="Download on Google Play."
          >
            <SystemIcon
              collection={EIconCollection.BRANDED}
              icon={EBrandedIcon.appstore}
            />
          </a>
        </Grid>
        <div className="relative">
          <div className={toolsStyles}>
            <Grid variant={EGridVariant.DEFAULT} bleed={EBleedVariant.ZERO}>
              <div className="justify-self-start self-center col-span-2 col-start-0 md:!col-span-1 md:!col-start-0">
                <Button
                  icon={ESystemIcon.apps}
                  onClick={() => {
                    setOpen(true);
                  }}
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                />
              </div>
              <div className="justify-self-center self-center col-span-2 col-start-2 md:!col-span-2 md:!col-start-4">
                <Link href="/">
                  <span style={{ display: 'flex', height: 120, width: 100 }}>
                    <Logo theme={theme} />
                  </span>
                </Link>
              </div>
              <Grid className="grid md:justify-self-end self-center col-span-6 col-start-0 md:!col-span-3 md:!col-start-6">
                <Typography className="justify-self-start self-center col-span-1 col-start-0 md:col-span-2 col-start-0">
                  {breadcrumb}
                </Typography>
              </Grid>
            </Grid>
          </div>
        </div>
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
