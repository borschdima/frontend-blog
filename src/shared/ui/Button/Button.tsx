import { FC, HTMLAttributes } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import classes from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme = ButtonTheme.CLEAR, ...rest } = props;

  return (
    <button
      type="button"
      className={classNames(classes.button, {}, [className, classes[theme]])}
      {...rest}
    >
      {children}
    </button>
  );
};
