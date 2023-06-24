import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import classes from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  DEFAULT = 'default',
  OUTLINE = 'outline',
  OUTLINE_SUCCESS = 'outline_success',
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
    disabled,
    theme = ButtonTheme.DEFAULT,
    type = 'button',
    ...rest
  } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      className={classNames(classes.button, { [classes.disabled]: disabled }, [className, classes[theme]])}
      {...rest}
    >
      {children}
    </button>
  );
};
