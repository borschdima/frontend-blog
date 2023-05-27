import createFastContext from 'scripts/createFastContext';

const { Provider: AppContextProvider, useStore: useAppContextStore } = createFastContext({
  isSidebarCollapsed: true,
});

export { AppContextProvider, useAppContextStore };
