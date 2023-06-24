import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';

import classes from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { className } = props;

  const { t } = useTranslation('pages/profile');

  const dispatch = useAppDispatch();

  const readonly = useSelector(getProfileReadonly);

  const handleClickEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const handleClickCancel = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const handleClickSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(classes.profilePageHeader, {}, [className])}>
      <Text title={t('title')} />
      {readonly ? (
        <Button className={classes.actionBtn} theme={ButtonTheme.OUTLINE} onClick={handleClickEdit}>
          {t('translation:btn.edit')}
        </Button>
      ) : (
        <>
          <Button className={classes.actionBtn} theme={ButtonTheme.OUTLINE_SUCCESS} onClick={handleClickSave}>
            {t('translation:btn.save')}
          </Button>
          <Button className={classes.actionBtn} theme={ButtonTheme.OUTLINE} onClick={handleClickCancel}>
            {t('translation:btn.cancel')}
          </Button>
        </>
      )}
    </div>
  );
};

export default ProfilePageHeader;
