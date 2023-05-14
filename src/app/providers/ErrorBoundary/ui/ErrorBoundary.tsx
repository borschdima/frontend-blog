import { FC, Suspense } from 'react';
import { ErrorBoundary as ErrorBoundaryLib } from 'react-error-boundary';

import { PageError } from 'widgets/PageError';

export const ErrorBoundary: FC = ({ children }) => {
  const handleError = (err: Error) => {
    console.log('An error has occured:', err);
  };

  return (
    <Suspense fallback="">
      <ErrorBoundaryLib FallbackComponent={PageError} onError={handleError}>
        {children}
      </ErrorBoundaryLib>
    </Suspense>
  );
};
