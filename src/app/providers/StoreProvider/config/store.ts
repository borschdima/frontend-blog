import { CombinedState, Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { authMiddleware } from 'features/AuthByUsername/model/middlewares/authMiddleware/authMiddleware';

import { api } from 'shared/api/api';

import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    preloadedState: initialState,
    devTools: IS_DEV,
    middleware: (getDefaultMiddleware) => (
      getDefaultMiddleware({
        thunk: { extraArgument: { api } },
      }).concat(authMiddleware)
    ),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
