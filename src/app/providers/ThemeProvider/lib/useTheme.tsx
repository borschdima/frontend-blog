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
      case Theme.DARK:
        newTheme = Theme.LIGHT;

        break;
      case Theme.LIGHT:
        newTheme = Theme.DARK_BLUE;

        break;
      case Theme.DARK_BLUE:
        newTheme = Theme.LIGHT_OPAL;

        break;
      case Theme.LIGHT_OPAL:
        newTheme = Theme.DARK;

        break;
      default:
        newTheme = Theme.LIGHT;
    }

    localStorage.setItem(LOCALE_STORATE_THEME_KEY, newTheme);

    setTheme?.(newTheme);
  }, [theme, setTheme]);

  return { theme: theme || Theme.LIGHT, toggleTheme, setTheme: setTheme! };
}
