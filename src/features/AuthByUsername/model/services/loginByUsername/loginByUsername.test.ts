import { TestAsyncThunk } from 'shared/lib/tests/testAyncThunk/TestAyncThunk';

import { userActions } from 'entities/User';

import { loginByUsername } from './loginByUsername';

describe('loginByUsername', () => {
  test('successfull login happened', async () => {
    const userData = { username: 'test', id: 1 };

    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));

    const action = await thunk.callThunk({ username: 'test', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(action.meta.requestStatus).toBe('fulfilled');
    expect(action.payload).toEqual(userData);
  });

  test('rejected login happened', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const action = await thunk.callThunk({ username: 'test', password: '123' });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(action.meta.requestStatus).toBe('rejected');
    expect(action.payload).toBe('error');
  });
});
