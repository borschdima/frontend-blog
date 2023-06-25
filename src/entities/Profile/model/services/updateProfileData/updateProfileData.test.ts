import { TestAsyncThunk } from 'shared/lib/tests/testAyncThunk/TestAyncThunk';

import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

import { updateProfileData } from './updateProfileData';
import { ValidateProfileError } from '../../types/profile';

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

describe('updateProfileData', () => {
  test('successfull fetch', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } });

    thunk.api.put.mockReturnValue(Promise.resolve({ data }));

    const action = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(action.meta.requestStatus).toBe('fulfilled');
    expect(action.payload).toEqual(data);
  });

  test('rejected server error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData);

    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const action = await thunk.callThunk();

    expect(action.meta.requestStatus).toBe('rejected');
    expect(action.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test('rejected validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: { ...data, username: '' } } });

    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const action = await thunk.callThunk();

    expect(action.meta.requestStatus).toBe('rejected');
    expect(action.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
