import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import { useAppContextStore } from 'app/providers/AppContextProvider';

import AboutSvg from 'shared/assets/icons/about.svg';
import HomeSvg from 'shared/assets/icons/home.svg';

import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const [collapsed] = useAppContextStore((store) => store.isSidebarCollapsed);

  const { className } = props;

  const { t } = useTranslation('components/sidebar');

  return (
    <div
      data-testid="sidebar"
      className={classNames(classes.sidebar, { [classes.collapsed]: collapsed }, [className])}
    >
      <div className={classes.sidebarLinks}>
        <AppLink to={RoutePath.main} className={classes.sidebarLink}>
          <HomeSvg />
          <span>{t('link.main')}</span>
        </AppLink>
        <AppLink to={RoutePath.about} className={classes.sidebarLink}>
          <AboutSvg />
          <span>{t('link.about')}</span>
        </AppLink>
      </div>
    </div>
  );
};
