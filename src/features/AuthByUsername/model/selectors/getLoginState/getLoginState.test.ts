import { StateSchema } from 'app/providers/StoreProvider';

import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
  test('should return loginForm state', () => {
    const loginFormState = {
      username: 'name',
      password: '123',
      isLoading: false,
      error: '',
    };

    const state: DeepPartial<StateSchema> = {
      loginForm: loginFormState,
    };

    expect(getLoginState(state as StateSchema)).toEqual(loginFormState);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginState(state as StateSchema)).toBe(undefined);
  });
});
