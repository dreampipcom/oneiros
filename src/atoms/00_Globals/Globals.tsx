// @atoms/Globals.tsx
import type { ReactNode as ChildrenType } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import '../../input.css';

type Theme = 'light' | 'dark';

export interface IGlobals {
  theme: Theme;
  children: ChildrenType;
}

export const HGlobals = function ({ theme, children }: IGlobals) {
  return (
    <div className={`${theme} bg-inverse-${theme}`}>
      <CssBaseline />
      {children}
      <div className="hidden" id="globals-loaded" />
    </div>
  );
};

export default HGlobals;
