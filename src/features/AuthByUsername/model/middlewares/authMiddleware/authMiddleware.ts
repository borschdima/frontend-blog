import { Middleware, isAnyOf, isFulfilled } from '@reduxjs/toolkit';

import { userActions } from 'entities/User';
import { StateSchema } from 'app/providers/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';

import { loginByUsername } from '../../services/loginByUsername/loginByUsername';

const isLoggedIn = isFulfilled(loginByUsername);
const isLoggedOut = isAnyOf(userActions.logout);

export const authMiddleware: Middleware<{}, StateSchema> = () => (next) => (action) => {
  if (isLoggedIn(action)) {
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(action.payload));
  }

  if (isLoggedOut(action)) {
    localStorage.removeItem(USER_LOCALSTORAGE_KEY);
  }

  next(action);
};
