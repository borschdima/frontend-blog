import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileIsLoading = (stage: StateSchema) => stage.profile?.isLoading || false;
