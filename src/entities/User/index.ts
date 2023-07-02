import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserIsInited } from './model/selectors/getUserIsInited/getUserIsInited';

import { userReducer, userActions } from './model/slice/userSlice';

import type { User, UserScheme } from './model/types/user';

export { userReducer, userActions, User, UserScheme, getUserIsInited, getUserAuthData };
