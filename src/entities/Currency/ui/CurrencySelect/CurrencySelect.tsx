import { useTranslation } from 'react-i18next';
import { memo } from 'react';

import { Select } from 'shared/ui/Select/Select';

import { classNames } from 'shared/lib/classNames/classNames';

import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: string;
  readonly?: boolean;
  onChange?: (value: Currency) => void;
}

const CURRENCY_OPTIONS = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { className, value, readonly, onChange } = props;

  const { t } = useTranslation('components/currency_select');

  const handleChangeValue = (val: string) => onChange?.(val as Currency);

  return (
    <Select
      className={classNames('', {}, [className])}
      value={value}
      label={t('currency')}
      options={CURRENCY_OPTIONS}
      readonly={readonly}
      onChange={handleChangeValue}
    />
  );
});
