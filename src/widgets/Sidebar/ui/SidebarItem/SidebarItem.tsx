import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';

import { SidebarItemType } from '../../model/items';

import classes from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed?: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const { item, collapsed } = props;

  const { t } = useTranslation('components/sidebar');

  return (
    <AppLink to={item.path} className={classNames(classes.sidebarLink, { [classes.collapsed]: collapsed })}>
      <item.Icon />
      <span>{t(`link.${item.text}`)}</span>
    </AppLink>
  );
});
