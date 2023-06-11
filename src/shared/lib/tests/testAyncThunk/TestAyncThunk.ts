import { AsyncThunkAction } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';

type ActionCreatorType<Return, Arg, RejectValue> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectValue }>;

export class TestAsyncThunk<Return, Arg, RejectValue> {
  private getState: () => StateSchema;
  private actionCreator: ActionCreatorType<Return, Arg, RejectValue>;

  dispatch: jest.MockedFn<any>;

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(arg: Arg) {
    const actionCreator = this.actionCreator(arg);
    const action = await actionCreator(this.dispatch, this.getState, undefined);

    return action;
  }
}
