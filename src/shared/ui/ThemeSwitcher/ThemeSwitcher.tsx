import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { Theme, useTheme } from 'app/providers/ThemeProvider';

import { Button, ButtonTheme } from '../Button/Button';

import MoonSVG from 'shared/assets/icons/moon.svg';
import SunSVG from 'shared/assets/icons/sun.svg';

import classes from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;

  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames(classes.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? (
        <SunSVG className={classes.themeSwitcherIcon} />
      ) : (
        <MoonSVG className={classes.themeSwitcherIcon} />
      )}
    </Button>
  );
};
