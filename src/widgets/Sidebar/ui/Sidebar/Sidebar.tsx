import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { useAppContextStore } from 'app/providers/AppContextProvider';

import { sidebarItemsList } from '../../model/items';

import { SidebarItem } from '../SidebarItem/SidebarItem';

import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
  const [collapsed] = useAppContextStore((store) => store.isSidebarCollapsed);

  const { className } = props;

  return (
    <div
      data-testid="sidebar"
      className={classNames(classes.sidebar, { [classes.collapsed]: collapsed }, [className])}
    >
      <div className={classes.sidebarLinks}>
        {sidebarItemsList.map((item) => (
          <SidebarItem item={item} key={item.path} collapsed={collapsed} />
        ))}
      </div>
    </div>
  );
});
