import { FC, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

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
      className={classNames(classes.sidebar, { [classes.collapsed]: collapsed }, [className])}
    >
      <button onClick={handleClickToggle} type="button">toggle</button>
    </div>
  );
};
