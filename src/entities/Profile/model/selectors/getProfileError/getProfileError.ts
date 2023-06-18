import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileError = (stage: StateSchema) => stage.profile?.error;
