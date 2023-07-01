import { createContext } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
  DARK_BLUE = 'dark-blue',
  LIGHT_OPAL = 'light-opal',
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCALE_STORATE_THEME_KEY = 'theme';
