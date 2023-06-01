import { Suspense } from 'react';

import { AppRouter } from 'app/providers/router';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import './styles/index.scss';

const App = () => (
  <div className="app">
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

export default App;
