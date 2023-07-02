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
    let newTheme: Theme;

    switch (theme) {
      case Theme.LIGHT:
        newTheme = Theme.DARK;

        break;
      case Theme.DARK:
        newTheme = Theme.LIGHT_OPAL;

        break;
      case Theme.LIGHT_OPAL:
        newTheme = Theme.DARK_BLUE;

        break;
      case Theme.DARK_BLUE:
        newTheme = Theme.LIGHT;

        break;
      default:
        newTheme = Theme.LIGHT;
    }

    localStorage.setItem(LOCALE_STORATE_THEME_KEY, newTheme);

    setTheme?.(newTheme);
  }, [theme, setTheme]);

  return { theme: theme || Theme.LIGHT, toggleTheme, setTheme: setTheme! };
}
