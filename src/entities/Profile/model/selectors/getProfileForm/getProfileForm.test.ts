import { StateSchema } from 'app/providers/StoreProvider';

import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

import { getProfileForm } from './getProfileForm';

const data = {
  username: 'admin',
  first: 'dima',
  lastname: 'tester',
  age: 23,
  city: 'New York',
  currency: Currency.RUB,
  country: Country.BELARUS,
  avatar: 'https://gorodprizrak.com/wp-content/uploads/2023/03/13b5a372655fc489f4a29217d43c235d.jpg',
};

describe('getProfileForm', () => {
  test('should return profile form', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { form: data },
    };

    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileForm(state as StateSchema)).toBe(undefined);
  });
});
