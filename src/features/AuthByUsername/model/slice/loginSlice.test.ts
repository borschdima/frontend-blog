import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

describe('loginSlice test', () => {
  test('test setUsername', () => {
    const state: DeepPartial<LoginSchema> = { username: '123' };

    expect(loginReducer(state as LoginSchema, loginActions.setUsername('test'))).toEqual({ username: 'test' });
  });

  test('test setPassword', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' };

    expect(loginReducer(state as LoginSchema, loginActions.setPassword('password'))).toEqual({ password: 'password' });
  });

  test('test extra reducer pending', () => {
    const state: DeepPartial<LoginSchema> = {};

    expect(loginReducer(state as LoginSchema, loginByUsername.pending)).toEqual({ isLoading: true });
  });
});
