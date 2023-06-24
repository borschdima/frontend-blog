import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import classes from './Text.module.scss';

export enum TextTheme {
  DEFAULT = 'default',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  CENTER = 'center',
  LEFT = 'left',
}

interface TextProps {
  align?: TextAlign;
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text = memo((props: TextProps) => {
  const { className, text, title, theme = TextTheme.DEFAULT, align = TextAlign.LEFT } = props;

  return (
    <div className={classNames(classes.text, {}, [className, classes[theme], classes[align]])}>
      {title && <p className={classes.textTitle}>{title}</p>}
      {text && <p className={classes.textParagraph}>{text}</p>}
    </div>
  );
});
