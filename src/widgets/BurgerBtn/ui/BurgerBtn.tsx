import { useCallback } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import { useAppContextStore } from 'app/providers/AppContextProvider';

import classes from './BurgerBtn.module.scss';

interface BurgerBtnProps {
  className?: string;
}

export const BurgerBtn = (props: BurgerBtnProps) => {
  const { className } = props;

  const [isSidebarCollapsed, setStore] = useAppContextStore((store) => store.isSidebarCollapsed);

  const handleClickToggleSidebar = useCallback(() => {
    setStore({ isSidebarCollapsed: !isSidebarCollapsed });
  }, [isSidebarCollapsed]); // eslint-disable-line

  return (
    <Button
      data-testid="burger-toggle"
      className={classNames(classes.burgerBtn, {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={handleClickToggleSidebar}
    >
      <span />
      <span />
      <span />
    </Button>
  );
};
