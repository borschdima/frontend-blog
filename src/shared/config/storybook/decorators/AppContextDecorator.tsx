import React, { ReactElement } from 'react';

import { AppContextProvider, useAppContextStore } from 'app/providers/AppContextProvider';

type WrapperProps = {
  value: { [key: string]: any };
  children: ReactElement,
}

const Wrapper = ({ children, value }: WrapperProps) => {
  const [, setStore] = useAppContextStore((store) => store);

  React.useEffect(() => {
    setStore(value);
  }, []);

  return children;
};

export const AppContextDecorator = (value: { [key: string]: any }) => (StoryComponent: React.FC) => (
  <AppContextProvider>
    <Wrapper value={value}>
      <StoryComponent />
    </Wrapper>
  </AppContextProvider>
);
