import axios from 'axios';

import { TestAsyncThunk } from 'shared/lib/tests/testAyncThunk/testAyncThunk';

import { userActions } from 'entities/User';

import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, { shallow: false });

describe('loginByUsername', () => {
  test('successfull login happened', async () => {
    const userData = { username: 'test', id: 1 };

    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));

    const thunk = new TestAsyncThunk(loginByUsername);

    const action = await thunk.callThunk({ username: 'test', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(action.meta.requestStatus).toBe('fulfilled');
    expect(action.payload).toEqual(userData);
  });

  test('rejected login happened', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = new TestAsyncThunk(loginByUsername);

    const action = await thunk.callThunk({ username: 'test', password: '123' });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(action.meta.requestStatus).toBe('rejected');
    expect(action.payload).toBe('error');
  });
});
