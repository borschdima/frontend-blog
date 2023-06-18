import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileData = (stage: StateSchema) => stage.profile?.data;
