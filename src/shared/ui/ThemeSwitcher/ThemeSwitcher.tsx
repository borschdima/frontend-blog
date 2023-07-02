import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { Theme, useTheme } from 'app/providers/ThemeProvider';

import MoonSVG from 'shared/assets/icons/moon.svg';
import SunSVG from 'shared/assets/icons/sun.svg';

import { Button, ButtonTheme } from '../Button/Button';

import classes from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className } = props;

  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames(classes.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK && (
        <div className={classNames(classes.themeSwitcherSphere, {}, [classes.themeSwitcherSphereLightOpal])} />
      )}

      {theme === Theme.LIGHT && (
        <MoonSVG
          className={classNames(classes.themeSwitcherIcon, {}, [classes.themeSwitcherIconMoon])}
        />
      )}

      {theme === Theme.DARK_BLUE && (
        <SunSVG
          className={classNames(classes.themeSwitcherIcon, {}, [classes.themeSwitcherIconSun])}
        />
      )}

      {theme === Theme.LIGHT_OPAL && (
        <div className={classNames(classes.themeSwitcherSphere, {}, [classes.themeSwitcherSphereDarkBlue])} />
      )}
    </Button>
  );
});
