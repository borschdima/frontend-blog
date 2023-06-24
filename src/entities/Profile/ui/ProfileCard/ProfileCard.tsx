import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';

import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';

import { Profile } from '../../model/types/profile';

import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading: boolean;
  readOnly?: boolean;
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeCurrency?: (currecny: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readOnly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  const { t } = useTranslation('components/profile_card');

  if (isLoading) {
    return (
      <div className={classNames(classes.profileCard, {}, [className, classes.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(classes.profileCard, {}, [className, classes.error])}>
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t('translation:uknown_error')}
          text={t('translation:try_refresh')}
        />
      </div>
    );
  }

  return (
    <div className={classNames(classes.profileCard, {}, [className])}>
      <div className={classes.data}>
        {data?.avatar && (
          <div className={classes.avatar}>
            <Avatar src={data.avatar} alt="user avatar" />
          </div>
        )}
        <Input
          value={data?.first || ''}
          placeholder={t('input.name')}
          className={classes.input}
          readonly={readOnly}
          onChange={onChangeFirstname}
        />
        <Input
          value={data?.lastname || ''}
          placeholder={t('input.lastname')}
          className={classes.input}
          readonly={readOnly}
          onChange={onChangeLastname}
        />
        <Input
          value={data?.age || ''}
          placeholder={t('input.age')}
          className={classes.input}
          readonly={readOnly}
          onChange={onChangeAge}
        />
        <Input
          value={data?.city || ''}
          placeholder={t('input.city')}
          className={classes.input}
          readonly={readOnly}
          onChange={onChangeCity}
        />
        <Input
          value={data?.avatar || ''}
          placeholder={t('input.avatar')}
          className={classes.input}
          readonly={readOnly}
          onChange={onChangeAvatar}
        />
        <Input
          value={data?.username || ''}
          placeholder={t('input.username')}
          className={classes.input}
          readonly={readOnly}
          onChange={onChangeUsername}
        />
        <CurrencySelect
          className={classes.input}
          value={data?.currency}
          readonly={readOnly}
          onChange={onChangeCurrency}
        />
        <CountrySelect
          className={classes.input}
          value={data?.currency}
          readonly={readOnly}
          onChange={onChangeCountry}
        />
      </div>
    </div>
  );
};
