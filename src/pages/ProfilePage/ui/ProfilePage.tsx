import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  useDynamicModuleLoader(reducers);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <div>
      <ProfileCard />
    </div>
  );
};

export default ProfilePage;
