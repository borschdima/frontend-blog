import { FC, useEffect, useMemo, useState } from 'react';

import { LOCALE_STORATE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

type ThemeProviderProps = {
  initialTheme?: Theme;
}

const defaultTheme = (localStorage.getItem(LOCALE_STORATE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme);

  const defaultProps = useMemo(() => ({ setTheme, theme }), [theme]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
