import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import classes from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  DEFAULT = 'default',
  OUTLINE = 'outline',
  LINK = 'link',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ButtonTheme.DEFAULT,
    type = 'button',
    ...rest
  } = props;

  return (
    <button
      type={type}
      className={classNames(classes.button, {}, [className, classes[theme]])}
      {...rest}
    >
      {children}
    </button>
  );
};
