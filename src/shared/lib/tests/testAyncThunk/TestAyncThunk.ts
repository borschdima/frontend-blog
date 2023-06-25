import axios, { AxiosStatic } from 'axios';
import { AsyncThunkAction } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';

type ActionCreatorType<Return, Arg, RejectValue> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectValue }>;

jest.mock('axios');

const mockedAxios = jest.mocked(axios, { shallow: false });

export class TestAsyncThunk<Return, Arg, RejectValue> {
  private getState: () => StateSchema;
  private actionCreator: ActionCreatorType<Return, Arg, RejectValue>;

  dispatch: jest.MockedFn<any>;
  api: jest.MockedFunctionDeep<AxiosStatic>;

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectValue>, state?: DeepPartial<StateSchema>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateSchema);
    this.api = mockedAxios;
  }

  async callThunk(arg: Arg) {
    const actionCreator = this.actionCreator(arg);
    const action = await actionCreator(this.dispatch, this.getState, { api: this.api });

    return action;
  }
}
