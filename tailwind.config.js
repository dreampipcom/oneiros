/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  important: 'body',
  safelist: ['bg-inverse-light', 'bg-inverse-dark', 'dark:bg-inverse-dark'],
  theme: {
    colors: {
      primary: {
        light: '#2962FF',
        dark: '#82B1FF',
      },
      secondary: {
        light: '#558B2F',
        dark: '#AED581',
      },
      outro: {
        light: '#FF7043',
        dark: '#FFAB91',
      },
      body: {
        light: '#2A2A2A',
        dark: '#D5D5D5',
      },
      inverse: {
        light: '#F2F2F2',
        dark: '#353535',
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  darkMode: ['variant', '.dark &:not(.dark .light *, .light .light *)', ''],
}