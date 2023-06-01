import React from 'react';

import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: React.FC) => (
  <ThemeProvider initialTheme={theme}>
    <StoryComponent />
  </ThemeProvider>
);
