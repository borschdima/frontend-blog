import { classNames } from 'shared/lib/classNames/classNames';

import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';

import { BurgerBtn } from 'widgets/BurgerBtn';

import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;

  return (
    <div data-testid="navbar" className={classNames(classes.navbar, {}, [className])}>
      <div className={classes.navbarControls}>
        <BurgerBtn />
      </div>

      <div className={classes.navbarActions}>
        <div className={classes.navbarSwitchers}>
          <LangSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};
