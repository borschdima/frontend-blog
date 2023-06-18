import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

// type ReducersListEntry = [StateSchemaKey, Reducer];

export const useDynamicModuleLoader = (reducers: ReducersList, removeOnUnmount: boolean = true): void => {
  const dispatch = useDispatch();

  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer);

      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeOnUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey);

          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
  }, []); // eslint-disable-line
};
