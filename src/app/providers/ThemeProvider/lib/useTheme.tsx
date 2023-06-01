import { useCallback, useContext } from 'react';
import { LOCALE_STORATE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    localStorage.setItem(LOCALE_STORATE_THEME_KEY, newTheme);

    setTheme(newTheme);
  }, [theme, setTheme]);

  return { theme, toggleTheme, setTheme };
}
