import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

import { profileActions, profileReducer } from './profileSlice';

import { ProfileScheme, ValidateProfileError } from '../types/profile';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
  username: 'admin',
  first: 'dima',
  lastname: 'tester',
  age: 23,
  city: 'New York',
  currency: Currency.RUB,
  country: Country.BELARUS,
  avatar:
    'https://gorodprizrak.com/wp-content/uploads/2023/03/13b5a372655fc489f4a29217d43c235d.jpg',
};

describe('profileSlice test', () => {
  test('test setReadonly', () => {
    const state: DeepPartial<ProfileScheme> = { readonly: false };

    expect(profileReducer(state as ProfileScheme, profileActions.setReadOnly(true))).toEqual({
      readonly: true,
    });
  });
  test('test cancelEdit', () => {
    const state: DeepPartial<ProfileScheme> = { readonly: false, data, form: data, validateErrors: [] };

    expect(profileReducer(state as ProfileScheme, profileActions.cancelEdit())).toEqual({
      readonly: true,
      data,
      form: data,
      validateErrors: undefined,
    });
  });

  test('test updateProfile', () => {
    const state: DeepPartial<ProfileScheme> = { form: data, data };

    expect(profileReducer(state as ProfileScheme, profileActions.updateProfile({ username: 'dima' }))).toEqual({
      data,
      form: { ...data, username: 'dima' },
    });
  });

  test('test updateProfile service pending state', () => {
    const state: DeepPartial<ProfileScheme> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.INCORRECT_AGE],
    };

    expect(profileReducer(state as ProfileScheme, updateProfileData.pending)).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test updateProfile service pending fulfilled', () => {
    const state: DeepPartial<ProfileScheme> = {
      isLoading: true,
    };

    expect(profileReducer(state as ProfileScheme, updateProfileData.fulfilled(data, ''))).toEqual({
      isLoading: false,
      data,
      form: data,
      readonly: true,
      validateErrors: undefined,
    });
  });
});
