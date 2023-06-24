import { ChangeEvent, InputHTMLAttributes, memo } from 'react';

import { Mods, classNames } from 'shared/lib/classNames/classNames';

import classes from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value: string | number;
  readonly?: boolean;
  onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    type = 'text',
    readonly,
    value,
    onChange,
    ...rest
  } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: val } = e.target;

    onChange?.(val);
  };

  const mods: Mods = {
    [classes.readonly]: readonly,
  };

  return (
    <div className={classNames(classes.inputWrapper, mods, [className])}>
      <input
        className={classes.input}
        type={type}
        readOnly={readonly}
        value={value}
        onChange={handleChange}
        {...rest}
      />
    </div>
  );
});
