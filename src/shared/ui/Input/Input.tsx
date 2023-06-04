import { ChangeEvent, InputHTMLAttributes, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import classes from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value: string;
  onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    type = 'text',
    value,
    onChange,
    ...rest
  } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: val } = e.target;

    onChange?.(val);
  };

  return (
    <div className={classNames(classes.inputWrapper, {}, [className])}>
      <input
        className={classes.input}
        type={type}
        value={value}
        onChange={handleChange}
        {...rest}
      />
    </div>
  );
});
