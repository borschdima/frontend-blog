import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { AppContextProvider } from 'app/providers/AppContextProvider';
import { StoreProvider } from 'app/providers/StoreProvider';

import App from './app/App';

import './shared/config/i18n/i18n';

render(
  <StoreProvider>
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider>
          <AppContextProvider>
            <App />
          </AppContextProvider>
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StoreProvider>,
  document.getElementById('root'),
);
