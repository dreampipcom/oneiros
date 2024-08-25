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
var st0 = '#F69240';
var st1 = '#F8D49A';
var st2 = '#50A2FA';
var st3 = '#65E9DD';
var st4 = '#6F32D8';
var st5 = '#83FAAF';
var st6 = '#EB5E1D';
var st7 = '#F8F8F8';
var st8 = '#f4ede1';
var dp200 = st0; // average pastel orange
var dp300 = st1; // light pastel orange
var dp400 = st2; // average pastel blue
var dp500 = st3; // light cyan
var dp600 = st4; // dark purple
var dp700 = st5; // light pastel green
var dp800 = st6; // dark orange
var dp900 = st8; // soft pastel orange
var transparent = '#00000000';
var bg2 = dp900;
var secondary = dp200;
var primary = dp800;
var tertiary = dp800;
var dark1 = n100;
var dark2 = n200;
var passion = 'pink';
var passionLight = '#660000';
var passionSoft = '#880000';
var white = '#ffffff';
var light1 = dp300;
var light2 = dp200;
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
            st7: dark1,
        },
        dark: {
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
        soft: bg2,
        dark: dark1,
        foggy: dark2,
    },
    icon: {
        light: {
            primary: primary,
            secondary: secondary,
            bw: n300,
            white: white,
            bg: dark1,
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
        dark: light2,
        passion: passion,
        passionLight: passionLight,
        passionSoft: passionSoft,
        soft: bg2,
        green: dp700,
        white: white,
    },
    secondary: {
        light: secondary,
        constrast: light1,
        dark: light2,
        passion: passion,
        passionLight: passionLight,
        passionSoft: passionSoft,
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
        primary: primary,
        light: dark2,
        dark: white,
        passion: passion,
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
        'md:col-start-3',
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
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
    darkMode: ['variant', '.dark &:not(.dark .light *, .light .light *)'],
};
