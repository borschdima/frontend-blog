import { StateSchema } from 'app/providers/StoreProvider';

import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

import { getProfileData } from './getProfileData';

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
describe('getProfileData', () => {
  test('should return profile data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { data },
    };

    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileData(state as StateSchema)).toBe(undefined);
  });
});
