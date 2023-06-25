import { ProfileCard } from './ui/ProfileCard/ProfileCard';

import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { updateProfileData } from './model/services/updateProfileData/updateProfileData';

import { profileActions, profileReducer } from './model/slice/profileSlice';

import type { ProfileScheme, Profile } from './model/types/profile';

import { getProfileData } from './model/selectors/getProfileData/getProfileData';
import { getProfileError } from './model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from './model/selectors/getProfileReadOnly/getProfileReadOnly';
import { getProfileForm } from './model/selectors/getProfileForm/getProfileForm';
import { getProfileValidateErrors } from './model/selectors/getProfileValidateErrors/getProfileValidateErrors';

export {
  ProfileScheme,
  Profile,
  profileActions,
  profileReducer,
  fetchProfileData,
  ProfileCard,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileForm,
  getProfileValidateErrors,
  updateProfileData,
};
