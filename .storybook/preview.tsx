/** @jsxImportSource @emotion/react */
import type { Preview } from '@storybook/react';
import { Global } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeByClassName } from '@storybook/addon-themes';
import { lightTheme, darkTheme } from '../src/styles/themes';
import 'tailwindcss/tailwind.css';
import { StyledEngineProvider } from '@mui/material/styles';

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
  (Story) => (
    <body
      className="bg-inverse-light dark:bg-inverse-dark"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 32px)',
        margin: '0',
        padding: '0',
      }}
    >
      {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
      <Story />
    </body>
  ),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: { method: 'alphabetical' },
    },
  },
};

export default preview;
