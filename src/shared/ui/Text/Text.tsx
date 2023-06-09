import { classNames } from 'shared/lib/classNames/classNames';

import classes from './Text.module.scss';

export enum TextTheme {
  DEFAULT = 'default',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text = (props: TextProps) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.DEFAULT,
  } = props;

  return (
    <div className={classNames(classes.text, {}, [className, classes[theme]])}>
      {title && <p className={classes.textTitle}>{title}</p>}
      {text && <p className={classes.textParagraph}>{text}</p>}
    </div>
  );
};
