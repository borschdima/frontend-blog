import React from 'react';
import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: React.FC) => (
  <StoreProvider initialState={state as StateSchema}>
    <StoryComponent />
  </StoreProvider>
);
