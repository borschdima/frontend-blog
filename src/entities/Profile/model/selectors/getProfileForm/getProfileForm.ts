import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileForm = (stage: StateSchema) => stage.profile?.form;
