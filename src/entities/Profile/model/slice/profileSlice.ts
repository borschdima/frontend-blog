import { createSlice } from '@reduxjs/toolkit';

import { ProfileScheme } from '../types/profile';

const initialState: ProfileScheme = {
  readonly: true,
  isLoading: false,
  error: null,
  data: null,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
