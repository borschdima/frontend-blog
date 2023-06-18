import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';

import { Text } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';

import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { className } = props;

  const { t } = useTranslation('components/profile_card');

  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={classNames(classes.profileCard, {}, [className])}>
      <div className={classes.header}>
        <Text title={t('profile')} />
        <Button theme={ButtonTheme.OUTLINE}>
          {t('edit')}
        </Button>
      </div>
      <div className={classes.data}>
        <Input
          value={data?.first || ''}
          placeholder={t('input.name')}
          className={classes.input}
        />
        <Input
          value={data?.lastname || ''}
          placeholder={t('input.lastname')}
          className={classes.input}
        />
      </div>
    </div>
  );
};
