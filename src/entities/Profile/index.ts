import { ProfileCard } from './ui/ProfileCard/ProfileCard';

import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';

import { profileActions, profileReducer } from './model/slice/profileSlice';

import type { ProfileScheme, Profile } from './model/types/profile';

export { ProfileScheme, Profile, profileActions, profileReducer, fetchProfileData, ProfileCard };
