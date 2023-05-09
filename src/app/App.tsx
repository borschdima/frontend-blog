import { Suspense } from 'react';

import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';

import { classNames } from 'shared/lib/classNames/classNames';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      {/* Suspense is used for i18next */}
      <Suspense fallback="">
        <Navbar />

        <div className="page-content">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
