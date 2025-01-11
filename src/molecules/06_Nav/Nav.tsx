/* eslint   no-unreachable:0, @typescript-eslint/no-unused-vars:0, no-import-assign:0, import/no-unresolved:0, import/no-webpack-loader-syntax:0, jsx-a11y/media-has-caption:0, no-nested-ternary:0, no-unused-vars:0, max-len:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, object-curly-newline:0 */
// @molecules/Nav.tsx
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import clsx from 'clsx';
import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Button, ButtonVariant, EButtonTheme } from '../../atoms/01_Button';
import { Typography } from '../../atoms/02_Typography';
import { Link } from '../../atoms/03_Link';
import { SystemIcon, ESystemIcon } from '../../atoms/06_SystemIcon';
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
  fetchNewData?: () => void;
  theme?: 'light' | 'dark';
}

export const HNav = function ({
  id = 'molecule__Nav',
  className = '',
  locale,
  fetchNewData,
  theme = 'light',
}: INav) {
  const gridSx = [
    {
      [`class04
        flex
        col-span-full col-start-0
        content-center
        items-center
        align-center
        justify-center
        `]: true,
    },
  ];

  const gridStyles = `${clsx(gridSx)} ${className}`;
  return (
    <div id={id} className="relative">
      This is a Nav.
    </div>
  );
};

export default HNav;
