import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppRouter } from 'app/providers/router';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { getUserIsInited, userActions } from 'entities/User';

import './styles/index.scss';

const App = () => {
  const dispatch = useDispatch();

  const isAuthInited = useSelector(getUserIsInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className="app">
      {/* Suspense is used for i18next */}
      <Suspense fallback="">
        <Navbar />

        <div className="page-content">
          <Sidebar />
          {isAuthInited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
