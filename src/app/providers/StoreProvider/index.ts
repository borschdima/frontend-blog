import { createReduxStore } from './config/store';
import type { AppDispatch } from './config/store';

import { StoreProvider } from './ui/StoreProvider';

import type { StateSchema, ReduxStoreWithManager, ThunkConfig } from './config/StateSchema';

export {
  StateSchema,
  ReduxStoreWithManager,
  ThunkConfig,
  StoreProvider,
  createReduxStore,
  AppDispatch,
};
