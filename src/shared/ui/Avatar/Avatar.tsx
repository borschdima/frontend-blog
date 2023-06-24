import { classNames } from 'shared/lib/classNames/classNames';

import classes from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
}

export const Avatar = (props: AvatarProps) => {
  const { className, src, alt } = props;

  return (
    <div className={classNames(classes.avatar, {}, [className])}>
      <img src={src} alt={alt} />
    </div>
  );
};
