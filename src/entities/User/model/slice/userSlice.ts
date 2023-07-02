import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';

import { User, UserScheme } from '../types/user';

const initialState: UserScheme = { isInited: false };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

      if (user) state.authData = JSON.parse(user);

      state.isInited = true;
    },
    logout: (state) => {
      state.authData = undefined;
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
