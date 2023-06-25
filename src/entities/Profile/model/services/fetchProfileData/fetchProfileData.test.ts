import { TestAsyncThunk } from 'shared/lib/tests/testAyncThunk/TestAyncThunk';

import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

import { fetchProfileData } from './fetchProfileData';

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

describe('fetchProfileData', () => {
  test('successfull fetch', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const action = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(action.meta.requestStatus).toBe('fulfilled');
    expect(action.payload).toEqual(data);
  });

  test('rejected', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const action = await thunk.callThunk();

    expect(action.meta.requestStatus).toBe('rejected');
  });
});
