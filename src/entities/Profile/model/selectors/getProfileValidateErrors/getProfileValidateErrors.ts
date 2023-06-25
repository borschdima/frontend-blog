import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileValidateErrors = (stage: StateSchema) => stage.profile?.validateErrors || [];
