import { useTranslation } from 'react-i18next';
import {
  ProfileCard,
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  profileReducer,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';

import classes from './ProfilePage.module.scss';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  useDynamicModuleLoader(reducers);

  const { t } = useTranslation('pages/profile');

  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const dispatch = useAppDispatch();

  const handleChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ first: value }));
  }, [dispatch]);

  const handleChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value }));
  }, [dispatch]);

  const handleChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: parseInt((value || '').replace(/\D/g, ''), 10) }));
  }, [dispatch]);

  const handleChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value }));
  }, [dispatch]);

  const handleChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value }));
  }, [dispatch]);

  const handleChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value }));
  }, [dispatch]);

  const handleChangeCurrency = useCallback((currency?: Currency) => {
    dispatch(profileActions.updateProfile({ currency }));
  }, [dispatch]);

  const handleChangeCountry = useCallback((country?: Country) => {
    dispatch(profileActions.updateProfile({ country }));
  }, [dispatch]);

  useEffect(() => {
    if (PROJECT !== 'storybook') dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <div>
      <ProfilePageHeader />

      {validateErrors.length > 0 && (
        <div className={classes.profileErrors}>
          {validateErrors.map((err) => (
            <Text key={err} text={t(`error.${err}`)} theme={TextTheme.ERROR} />
          ))}
        </div>
      )}

      <ProfileCard
        data={formData}
        error={error}
        isLoading={isLoading}
        readOnly={readonly}
        onChangeFirstname={handleChangeFirstname}
        onChangeLastname={handleChangeLastname}
        onChangeCity={handleChangeCity}
        onChangeAge={handleChangeAge}
        onChangeAvatar={handleChangeAvatar}
        onChangeUsername={handleChangeUsername}
        onChangeCurrency={handleChangeCurrency}
        onChangeCountry={handleChangeCountry}
      />
    </div>
  );
};

export default ProfilePage;
