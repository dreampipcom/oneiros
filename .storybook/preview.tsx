/** @jsxImportSource @emotion/react */
import type { Preview } from '@storybook/react';
import { Global } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeByClassName } from '@storybook/addon-themes';
import { lightTheme, darkTheme } from '../src/styles/themes';
import { StyledEngineProvider } from '@mui/material/styles';
import { Globals } from '../src/atoms/00_Globals';
import { Grid } from '../src/atoms/10_Grid';
import '../src/input.css';

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
      className="bg-inverse-light dark:bg-inverse-dark overflow-scroll"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 32px)',
        padding: '0',
        overflow: 'scroll',
        position: 'relative',
      }}
    >
      <div
        style={{
          minWidth: '180px',
          width: '100%',
        }}
      >
        <Globals>
          {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
          <Grid full>
            <div className="col-span-full col-start-0 md:col-span-full md:col-start-0">
              <Story />
            </div>
          </Grid>
        </Globals>
      </div>
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
