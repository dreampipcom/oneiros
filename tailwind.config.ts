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

const slyPink = '#f1cfff';
const purpleHaze = '#563769';
const royalWhite = '#e9eeff';
const navyWise = '#002972';
const karunaNara = '#f7bfa5';

const pinkDive = '#C476CB';
const pinkSurf = '#F4AFFF';
const pinkSand = '#FFE5FC';
const pinkCloud = '#F8EEFF';
const pinkFacade = '#FACEFB';

const functionOne = '#c4abef';
const functionTwo = '#c4acf1';
const functionThree = '#c3a9ef';

const shadesBlu1 = '#b7d9fd';
const shadesBlu2 = '#b9d8fc';
const shadesBlu3 = '#b6d8fd';

const shadesCyan1 = '#c0f6f1';
const shadesCyan2 = '#bef6f1';
const shadesCyan3 = '#c4f6f1';

const shadesGreen1 = '#ccfdde';
const shadesGreen2 = '#cbfddd';
const shadesGreen3 = '#cffcdf';

const shadesAmar1 = '#fcedd5';

const shadesNara1 = '#fbd2b0';
const shadesNara2 = '#fbd1af';
const shadesNara3 = '#fcd3b3';
const shadesNara4 = '#f8bea7';

const st0 = shadesNara1;
const st1 = shadesAmar1;
const st2 = shadesBlu1;
const st3 = shadesCyan1;
const st4 = functionOne;
const st5 = shadesGreen1;
const st6 = karunaNara;
const st7 = royalWhite;
const st8 = royalWhite;

const transparent = '#00000000';

const bgLight = slyPink;
const bgDark = navyWise;

const secondary = slyPink;
const primary = functionOne;
const tertiary = purpleHaze;

const dark1 = navyWise;
const dark2 = purpleHaze;
const light1 = royalWhite;
const light2 = slyPink;

const passion = pinkDive;
const passionLight = pinkSurf;
const passionSoft = pinkSand;

const white = royalWhite;
const black = purpleHaze;
const dark = dark2;
const light = light2;

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
      st7: navyWise,
    },
    dark: {
      st0,
      st1,
      st2,
      st3,
      st4,
      st5,
      st6,
      st7: pinkCloud,
    },
    darker: {
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
    soft: bgLight,
    dark: black,
    foggy: black,
  },
  icon: {
    light: {
      primary,
      secondary,
      bw: n300,
      white: white,
      bg: black,
    },
    dark: {
      primary,
      secondary,
      bw: white,
      white: white,
      bg: light1,
    },
  },
  primary: {
    light: primary,
    contrast: secondary,
    dark,
    dark2: dark1,
    passion,
    passionLight,
    passionSoft,
    soft: slyPink,
    green: shadesGreen1,
    purpleHaze,
    white,
  },
  secondary: {
    light: secondary,
    constrast: light1,
    dark,
    passion,
    passionLight,
    passionSoft,
    soft: slyPink,
    green: shadesGreen1,
    purpleHaze,
    white,
  },
  gradient: {
    soft: {
      light: {
        from: bgLight,
        to: light1,
      },
      dark: {
        from: dark1,
        to: dark2,
      },
    },
  },
  soft: {
    light: slyPink,
    constrast: pinkSand,
    bg: pinkSand,
    dark: purpleHaze,
  },
  outro: {
    light: slyPink,
    dark: purpleHaze,
  },
  body: {
    primary,
    light: black,
    dark: light1,
    soft: slyPink,
    passion,
  },
  inverse: {
    light: slyPink,
    dark: dark1,
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
    'md:col-start-1',
    'md:col-start-2',
    'md:col-start-3',
    'md:col-start-4',
    'md:col-start-5',
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
