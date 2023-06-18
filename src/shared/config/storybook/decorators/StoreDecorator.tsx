import { ReducersMapObject } from '@reduxjs/toolkit';
import React from 'react';

import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

import { profileReducer } from 'entities/Profile';

import { ReducersList } from 'shared/lib/hooks/useDynamicModuleLoader';

const defaultAyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (
  (StoryComponent: React.FC) => (
    <StoreProvider
      initialState={state as StateSchema}
      asyncReducers={{ ...defaultAyncReducers as ReducersMapObject<StateSchema>, ...asyncReducers }}
    >
      <StoryComponent />
    </StoreProvider>
  )
);
