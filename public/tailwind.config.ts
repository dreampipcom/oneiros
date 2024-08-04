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
const n100 = '#191919';
const n200 = '#1b1b1b';
const n300 = '#aaaaaa';
const n400 = '#ffffff';
// const n500 = '#550000';
// const n600 = '#660000';

const st0 = '#F69240';
const st1 = '#F8D49A';
const st2 = '#50A2FA';
const st3 = '#65E9DD';
const st4 = '#6F32D8';
const st5 = '#83FAAF';
const st6 = '#EB5E1D';
const st7 = '#F8F8F8';
const st8 = '#f4ede1';

const dp200 = st0; // average pastel orange
const dp300 = st1; // light pastel orange
const dp400 = st2; // average pastel blue
const dp500 = st3; // light cyan
const dp600 = st4; // dark purple
const dp700 = st5; // light pastel green
const dp800 = st6; // dark orange
const dp900 = st8; // soft pastel orange

const transparent = '#00000000';
const bg2 = dp900;

const secondary = dp200;
const primary = dp800;
const tertiary = dp800;

const dark1 = n100;
const dark2 = n200;

const passion = 'pink';
const passionLight = '#660000';
const passionSoft = '#880000';

const white = '#ffffff';

const light1 = dp300;
const light2 = dp200;

export const DreamPipColors = {
  transparent,
  logo: {
    light: {
      st0,
      st1,
      st2,
      st3,
      st4,
      st5,
      st6,
      st7: dark1,
    },
    dark: {
      st0,
      st1,
      st2,
      st3,
      st4,
      st5,
      st6,
      st7,
    },
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
    dark: light2,
    passion,
    passionLight,
    passionSoft,
    soft: bg2,
    green: dp700,
    white,
  },
  secondary: {
    light: secondary,
    constrast: light1,
    dark: light2,
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
    light: white,
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
    light: n200,
    dark: n400,
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
