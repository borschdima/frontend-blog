import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';

import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;

  const { t } = useTranslation('components/navbar');

  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <div className={classes.navbarActions}>
        <div className={classes.navbarSwitchers}>
          <LangSwitcher />
          <ThemeSwitcher />
        </div>

        <div className={classes.navbarLinks}>
          <AppLink to="/">{t('link.main')}</AppLink>
          <AppLink to="/about">{t('link.about')}</AppLink>
        </div>
      </div>
    </div>
  );
};
