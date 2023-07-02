import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';

import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import { BurgerBtn } from 'widgets/BurgerBtn';

import { LoginModal } from 'features/AuthByUsername';

import { getUserAuthData, userActions } from 'entities/User';

import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props;

  const [isAuthModalOpened, setIsAuthModalOpened] = useState(false);

  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const { t } = useTranslation('components/navbar');

  const handleCloseAuthModal = useCallback(() => setIsAuthModalOpened(false), []);

  const handleShowAuthModal = useCallback(() => setIsAuthModalOpened(true), []);

  const handleLogout = useCallback(() => dispatch(userActions.logout()), [dispatch]);

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

        {
        authData
          ? <Button theme={ButtonTheme.LINK} onClick={handleLogout}>{t('logout')}</Button>
          : <Button theme={ButtonTheme.LINK} onClick={handleShowAuthModal}>{t('login')}</Button>
        }

        <LoginModal isOpen={isAuthModalOpened} onClose={handleCloseAuthModal} />
      </div>
    </div>
  );
});
