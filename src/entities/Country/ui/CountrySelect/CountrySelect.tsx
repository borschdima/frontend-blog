import { useTranslation } from 'react-i18next';
import { memo } from 'react';

import { Select } from 'shared/ui/Select/Select';

import { classNames } from 'shared/lib/classNames/classNames';

import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: string;
  readonly?: boolean;
  onChange?: (value: Country) => void;
}

const COUNTRY_OPTIONS = [
  { value: Country.BELARUS, content: Country.BELARUS },
  { value: Country.UKRAINE, content: Country.UKRAINE },
  { value: Country.RUSSIA, content: Country.RUSSIA },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, value, readonly, onChange } = props;

  const { t } = useTranslation('components/country_select');

  const handleChangeValue = (val: string) => onChange?.(val as Country);

  return (
    <Select
      className={classNames('', {}, [className])}
      value={value}
      label={t('country')}
      options={COUNTRY_OPTIONS}
      readonly={readonly}
      onChange={handleChangeValue}
    />
  );
});
