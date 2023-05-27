import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { AppContextProvider } from 'app/providers/AppContextProvider';

import App from './app/App';

import './shared/config/i18/i18';

render(
  <ErrorBoundary>
    <BrowserRouter>
      <ThemeProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </ErrorBoundary>,
  document.getElementById('root'),
);
