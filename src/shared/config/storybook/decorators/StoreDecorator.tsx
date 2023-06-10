import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import React from 'react';

import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
};

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducersMapObject<StateSchema>) => (
  (StoryComponent: React.FC) => (
    <StoreProvider
      initialState={state as StateSchema}
      asyncReducers={{ ...defaultAyncReducers as ReducersMapObject<StateSchema>, ...asyncReducers }}
    >
      <StoryComponent />
    </StoreProvider>
  )
);
