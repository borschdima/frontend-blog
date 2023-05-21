import { FC, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;

  const [collapsed, setCollapsed] = useState(false);

  const handleClickToggle = () => setCollapsed((prev) => !prev);

  return (
    <div
      data-testid="sidebar"
      className={classNames(classes.sidebar, { [classes.collapsed]: collapsed }, [className])}
    >
      <Button onClick={handleClickToggle} data-testid="sidebar-toggle">
        toggle
      </Button>
    </div>
  );
};
