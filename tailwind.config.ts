/* eslint no-unused-vars:0, @typescript-eslint/no-unused-vars:0 */
/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';

// spacing
const base = 8;

const inc00 = 0;
const inc00a = base * 0.5; // 4
const inc01a = base; // 8
const inc02a = base * 2; // 16
const inc03a = base * 3; // 24
const inc04a = base * 4; // 32
const inc05a = base * 5; // 40
const inc06a = base * 6; // 48
const inc07a = base * 7; // 56
const inc08a = base * 8; // 64
const inc09a = base * 9; // 72

const inc00b = base * 0.25; // 4
const inc01b = base * 1.5; // 12
const inc02b = base * 2.5; // 20
const inc03b = base * 3.5; // 28
const inc04b = base * 4.5; // 36
const inc05b = base * 5.5; // 44
const inc06b = base * 6.5; // 52

// colors
const transparent = '#00000000';
const bg2 = 'black';
const dp200 = '#001100';
const dp300 = '#002200';
const dp400 = '#003300';
const dp500 = '#004400';
const dp600 = '#005500';
const dp700 = '#006600';
const dp800 = '#007700';

const n100 = '#110000';
const n200 = '#220000';
const n300 = '#330000';
const n400 = '#440000';
const n500 = '#550000';
const n600 = '#660000';

const secondary = h400;
const primary = h500;
const tertiary = h600;

const light1 = h300;
const light2 = h200;

const dark1 = h700;
const dark2 = h800;

const passion = 'red';
const passionLight = '#660000';
const passionSoft = '#880000';

const white = '#ffffff';

export const DreamPipColors = {
  transparent,
  logo: {
    light: primary,
    dark: white,
  },
  card: {
    white,
    soft: bg2,
    dark: dark1,
    foggy: dark2,
  },
  icon: {
    light: {
      primary,
      secondary,
      bw: n300,
      white: white,
    },
    dark: {
      primary,
      secondary,
      bw: white,
      white: white,
    },
  },
  primary: {
    light: primary,
    contrast: secondary,
    dark: light1,
    passion,
    passionLight,
    passionSoft,
    soft: bg2,
  },
  secondary: {
    light: secondary,
    constrast: light1,
    dark: light1,
    passion,
    passionLight,
    passionSoft,
    soft: bg2,
  },
  gradient: {
    soft: {
      light: {
        from: bg2,
        to: light1,
      },
      dark: {
        from: dark1,
        to: dark2,
      },
    },
  },
  soft: {
    light: light1,
    constrast: light2,
    bg: bg2,
    dark: '#C9FFC4',
  },
  outro: {
    light: '#B473CA',
    dark: '#DEBDFF',
  },
  body: {
    primary,
    light: dark2,
    dark: white,
    passion,
  },
  inverse: {
    light: '#F2F2F2',
    dark: '#353535',
  },
  neutral: {
    light: n400,
    dark: n200,
  },
};

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  important: 'body',
  safelist: [
    'bg-inverse-light',
    'bg-inverse-dark',
    'dark:bg-inverse-dark',
    'col-span-6',
    'col-start-1',
    'md:col-span-4',
    'md:col-start-3',
    'overflow-scroll',
  ],
  theme: {
    colors: DreamPipColors,
    fontSize: {
      sm: '10px',
      md: '14px',
      base: '16px',
      xl: '18px',
      '1xl': '20px',
      '2xl': '22px',
      '3xl': '26px',
      '4xl': '32px',
      '5xl': '40px',
    },
    letterSpacing: {
      a0: `${inc00a / 100}rem`,
      a1: `${inc01a / 100}rem`,
      a2: `${inc02a / 100}rem`,
      a3: `${inc03a / 100}rem`,
      a4: `${inc04a / 100}rem`,
      a5: `${inc05a / 100}rem`,
      a6: `${inc06a / 100}rem`,
      b0: `${inc00b / 100}rem`,
      b1: `${inc01b / 100}rem`,
      b2: `${inc02b / 100}rem`,
      b3: `${inc03b / 100}rem`,
      b4: `${inc04b / 100}rem`,
      b5: `${inc05b / 100}rem`,
      b6: `${inc06b / 100}rem`,
    },
    lineHeight: {
      a0: `${inc00a}px`,
      a1: `${inc01a}px`,
      a2: `${inc02a}px`,
      a3: `${inc03a}px`,
      a4: `${inc04a}px`,
      a5: `${inc05a}px`,
      a6: `${inc06a}px`,
      b0: `${inc00b}px`,
      b1: `${inc01b}px`,
      b2: `${inc02b}px`,
      b3: `${inc03b}px`,
      b4: `${inc04b}px`,
      b5: `${inc05b}px`,
      b6: `${inc06b}px`,
    },
    spacing: {
      0: '0px',
      a0: `${inc00a}px`,
      a1: `${inc01a}px`,
      a2: `${inc02a}px`,
      a3: `${inc03a}px`,
      a4: `${inc04a}px`,
      a5: `${inc05a}px`,
      a6: `${inc06a}px`,
      a7: `${inc07a}px`,
      a8: `${inc08a}px`,
      a9: `${inc09a}px`,
      b0: `${inc00b}px`,
      b1: `${inc01b}px`,
      b2: `${inc02b}px`,
      b3: `${inc03b}px`,
      b4: `${inc04b}px`,
      b5: `${inc05b}px`,
      b6: `${inc06b}px`,
    },
    sizing: {
      0: '0px',
      a0: `${inc00a}px`,
      a1: `${inc01a}px`,
      a2: `${inc02a}px`,
      a3: `${inc03a}px`,
      a4: `${inc04a}px`,
      a5: `${inc05a}px`,
      a6: `${inc06a}px`,
      a7: `${inc07a}px`,
      a8: `${inc08a}px`,
      a9: `${inc09a}px`,
      b0: `${inc00b}px`,
      b1: `${inc01b}px`,
      b2: `${inc02b}px`,
      b3: `${inc03b}px`,
      b4: `${inc04b}px`,
      b5: `${inc05b}px`,
      b6: `${inc06b}px`,
    },
    aspectRatio: {
      square: '1 / 1',
      blog: '3 / 2',
      tv: '4 / 3',
      cinema: '16 / 9',
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  darkMode: ['variant', '.dark &:not(.dark .light *, .light .light *)'],
} satisfies Config;
