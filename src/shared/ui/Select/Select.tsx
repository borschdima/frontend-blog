import { ChangeEvent, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import classes from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options: SelectOption[];
  value?: string;
  readonly?: boolean;
  onChange: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
  const { className, label, options, value, readonly, onChange } = props;

  const handleChangeValue = (e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value);

  return (
    <div className={classNames(classes.wrapper, {}, [className])}>
      {label && <span className={classes.label}>{label}</span>}
      <select
        className={classes.select}
        value={value}
        disabled={readonly}
        onChange={handleChangeValue}
      >
        {options.map((opt) => (
          <option value={opt.value} key={opt.value}>
            {opt.content}
          </option>
        ))}
      </select>
    </div>
  );
});
