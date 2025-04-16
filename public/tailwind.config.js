"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DreamPipColors = void 0;
// spacing
var base = 8;
var inc00 = 0;
var inc00a = base * 0.5; // 4
var inc01a = base; // 8
var inc02a = base * 2; // 16
var inc03a = base * 3; // 24
var inc04a = base * 4; // 32
var inc05a = base * 5; // 40
var inc06a = base * 6; // 48
var inc07a = base * 7; // 56
var inc08a = base * 8; // 64
var inc09a = base * 9; // 72
var inc10a = base * 10; // 80
var inc00b = base * 0.25; // 4
var inc01b = base * 1.5; // 12
var inc02b = base * 2.5; // 20
var inc03b = base * 3.5; // 28
var inc04b = base * 4.5; // 36
var inc05b = base * 5.5; // 44
var inc06b = base * 6.5; // 52
// colors
var n100 = '#191919';
var n200 = '#1b1b1b';
var n300 = '#aaaaaa';
var n400 = '#ffffff';
// const n500 = '#550000';
// const n600 = '#660000';
var slyPink = '#f1cfff';
var purpleHaze = '#563769';
var royalWhite = '#e9eeff';
var navyWise = '#002972';
var karunaNara = '#f7bfa5';
var pinkDive = '#C476CB';
var pinkSurf = '#F4AFFF';
var pinkSand = '#FFE5FC';
var pinkCloud = '#F8EEFF';
var pinkFacade = '#FACEFB';
var functionOne = '#c4abef';
var functionTwo = '#c4acf1';
var functionThree = '#c3a9ef';
var shadesBlu1 = '#b7d9fd';
var shadesBlu2 = '#b9d8fc';
var shadesBlu3 = '#b6d8fd';
var shadesCyan1 = '#c0f6f1';
var shadesCyan2 = '#bef6f1';
var shadesCyan3 = '#c4f6f1';
var shadesGreen1 = '#ccfdde';
var shadesGreen2 = '#cbfddd';
var shadesGreen3 = '#cffcdf';
var shadesAmar1 = '#fcedd5';
var shadesNara1 = '#fbd2b0';
var shadesNara2 = '#fbd1af';
var shadesNara3 = '#fcd3b3';
var shadesNara4 = '#f8bea7';
var st0 = shadesNara1;
var st1 = shadesAmar1;
var st2 = shadesBlu1;
var st3 = shadesCyan1;
var st4 = functionOne;
var st5 = shadesGreen1;
var st6 = karunaNara;
var st7 = royalWhite;
var st8 = royalWhite;
var transparent = '#00000000';
var bgLight = slyPink;
var bgDark = navyWise;
var secondary = slyPink;
var primary = functionOne;
var tertiary = purpleHaze;
var dark1 = navyWise;
var dark2 = purpleHaze;
var light1 = royalWhite;
var light2 = slyPink;
var darkTrans1 = dark2 + 'aa';
var darkTrans2 = dark1 + 'cc';
var lightTrans1 = light1 + 'cc';
var lightTrans2 = light2 + 'cc';
var passion = pinkDive;
var passionLight = pinkSurf;
var passionSoft = pinkSand;
var white = royalWhite;
var black = purpleHaze;
var dark = dark2;
var light = light2;
exports.DreamPipColors = {
    transparent: transparent,
    logo: {
        light: {
            st0: st0,
            st1: st1,
            st2: st2,
            st3: st3,
            st4: st4,
            st5: st5,
            st6: st6,
            st7: navyWise,
        },
        dark: {
            st0: st0,
            st1: st1,
            st2: st2,
            st3: st3,
            st4: st4,
            st5: st5,
            st6: st6,
            st7: pinkCloud,
        },
        darker: {
            st0: st0,
            st1: st1,
            st2: st2,
            st3: st3,
            st4: st4,
            st5: st5,
            st6: st6,
            st7: st7,
        },
    },
    card: {
        white: white,
        soft: bgLight,
        dark: black,
        foggy: black,
    },
    icon: {
        light: {
            primary: primary,
            secondary: secondary,
            bw: n300,
            white: white,
            bg: black,
        },
        dark: {
            primary: primary,
            secondary: secondary,
            bw: white,
            white: white,
            bg: light1,
        },
    },
    primary: {
        light: primary,
        contrast: secondary,
        dark: dark,
        dark2: dark1,
        passion: passion,
        passionLight: passionLight,
        passionSoft: passionSoft,
        soft: slyPink,
        green: shadesGreen1,
        purpleHaze: purpleHaze,
        white: white,
    },
    secondary: {
        light: secondary,
        constrast: light1,
        dark: dark,
        passion: passion,
        passionLight: passionLight,
        passionSoft: passionSoft,
        soft: slyPink,
        green: shadesGreen1,
        purpleHaze: purpleHaze,
        white: white,
    },
    gradient: {
        soft: {
            light: {
                from: lightTrans1,
                to: lightTrans2,
            },
            dark: {
                from: darkTrans1,
                to: darkTrans2,
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
        primary: primary,
        light: black,
        dark: light1,
        soft: slyPink,
        passion: passion,
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
exports.default = {
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
        colors: exports.DreamPipColors,
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
            a0: "".concat(inc00a / 100, "rem"),
            a1: "".concat(inc01a / 100, "rem"),
            a2: "".concat(inc02a / 100, "rem"),
            a3: "".concat(inc03a / 100, "rem"),
            a4: "".concat(inc04a / 100, "rem"),
            a5: "".concat(inc05a / 100, "rem"),
            a6: "".concat(inc06a / 100, "rem"),
            b0: "".concat(inc00b / 100, "rem"),
            b1: "".concat(inc01b / 100, "rem"),
            b2: "".concat(inc02b / 100, "rem"),
            b3: "".concat(inc03b / 100, "rem"),
            b4: "".concat(inc04b / 100, "rem"),
            b5: "".concat(inc05b / 100, "rem"),
            b6: "".concat(inc06b / 100, "rem"),
        },
        lineHeight: {
            a0: "".concat(inc00a, "px"),
            a1: "".concat(inc01a, "px"),
            a2: "".concat(inc02a, "px"),
            a3: "".concat(inc03a, "px"),
            a4: "".concat(inc04a, "px"),
            a5: "".concat(inc05a, "px"),
            a6: "".concat(inc06a, "px"),
            b0: "".concat(inc00b, "px"),
            b1: "".concat(inc01b, "px"),
            b2: "".concat(inc02b, "px"),
            b3: "".concat(inc03b, "px"),
            b4: "".concat(inc04b, "px"),
            b5: "".concat(inc05b, "px"),
            b6: "".concat(inc06b, "px"),
        },
        spacing: {
            0: '0px',
            a0: "".concat(inc00a, "px"),
            a1: "".concat(inc01a, "px"),
            a2: "".concat(inc02a, "px"),
            a3: "".concat(inc03a, "px"),
            a4: "".concat(inc04a, "px"),
            a5: "".concat(inc05a, "px"),
            a6: "".concat(inc06a, "px"),
            a7: "".concat(inc07a, "px"),
            a8: "".concat(inc08a, "px"),
            a9: "".concat(inc09a, "px"),
            a10: "".concat(inc10a, "px"),
            b0: "".concat(inc00b, "px"),
            b1: "".concat(inc01b, "px"),
            b2: "".concat(inc02b, "px"),
            b3: "".concat(inc03b, "px"),
            b4: "".concat(inc04b, "px"),
            b5: "".concat(inc05b, "px"),
            b6: "".concat(inc06b, "px"),
        },
        sizing: {
            0: '0px',
            a0: "".concat(inc00a, "px"),
            a1: "".concat(inc01a, "px"),
            a2: "".concat(inc02a, "px"),
            a3: "".concat(inc03a, "px"),
            a4: "".concat(inc04a, "px"),
            a5: "".concat(inc05a, "px"),
            a6: "".concat(inc06a, "px"),
            a7: "".concat(inc07a, "px"),
            a8: "".concat(inc08a, "px"),
            a9: "".concat(inc09a, "px"),
            a10: "".concat(inc10a, "px"),
            b0: "".concat(inc00b, "px"),
            b1: "".concat(inc01b, "px"),
            b2: "".concat(inc02b, "px"),
            b3: "".concat(inc03b, "px"),
            b4: "".concat(inc04b, "px"),
            b5: "".concat(inc05b, "px"),
            b6: "".concat(inc06b, "px"),
        },
        aspectRatio: {
            square: '1 / 1',
            blog: '3 / 2',
            tv: '4 / 3',
            cinema: '16 / 9',
        },
        extend: {
            keyframes: {
                ltr: {
                    '0%': { transform: 'translateX(-100%)', opacity: '0%' },
                    '49%': { transform: 'translateX(-50%)', opacity: '100%' },
                    '98%': { transform: 'translateX(0%)', opacity: '0%' },
                    '99%': { transform: 'translateX(-50%)', opacity: '0%' },
                    '100%': { transform: 'translateX(-100%)', opacity: '0%' },
                },
                rtl: {
                    '0%': { transform: 'translateX(0%)', opacity: '0%' },
                    '49%': { transform: 'translateX(-50%)', opacity: '100%' },
                    '98%': { transform: 'translateX(-100%)', opacity: '0%' },
                    '99%': { transform: 'translateX(-50%)', opacity: '0%' },
                    '100%': { transform: 'translateX(0%)', opacity: '0%' },
                },
                fadeOut: {
                    '100%': { opacity: '100%' },
                    '0%': { opacity: '0%' },
                },
                fadeIn: {
                    '0%': { opacity: '0%' },
                    '100%': { opacity: '100%' },
                },
            },
            animation: {
                lprompter: 'ltr linear 12s infinite',
                rprompter: 'rtl linear 12s infinite',
            },
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
    darkMode: ['variant', '.dark &:not(.dark .light *, .light .light *)'],
};
