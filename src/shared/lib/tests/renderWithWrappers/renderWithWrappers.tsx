import { render } from '@testing-library/react';
import { DeepPartial } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { AppContextProvider } from 'app/providers/AppContextProvider';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

import i18nForTest from 'shared/config/i18/i18nForTests';

export interface renderWithWrappersOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>,
}

export function renderWithWrappers(component: ReactNode, options: renderWithWrappersOptions = {}) {
  const { route = '/', initialState } = options;

  return render(
    <StoreProvider initialState={initialState as StateSchema}>
      <MemoryRouter initialEntries={[route]}>
        <AppContextProvider>
          <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>
        </AppContextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
}
