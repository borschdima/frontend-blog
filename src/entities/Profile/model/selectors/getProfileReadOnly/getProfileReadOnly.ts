import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileReadonly = (stage: StateSchema) => stage.profile?.readonly || false;
