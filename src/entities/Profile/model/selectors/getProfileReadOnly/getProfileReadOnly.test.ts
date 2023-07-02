import { StateSchema } from 'app/providers/StoreProvider';

import { getProfileReadonly } from './getProfileReadOnly';

describe('getProfileReadonly', () => {
  test('should return profile read only', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { readonly: true },
    };

    expect(getProfileReadonly(state as StateSchema)).toBe(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileReadonly(state as StateSchema)).toBe(false);
  });
});