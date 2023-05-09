import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';

import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;

  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <div className={classes.navbarActions}>
        <div className={classes.navbarSwitchers}>
          <ThemeSwitcher className="clear" />
        </div>

        <div className={classes.navbarLinks}>
          <AppLink to="/">Главная</AppLink>
          <AppLink to="/about">О Сайте</AppLink>
        </div>
      </div>
    </div>
  );
};
