import type { Preview } from '@storybook/react';

import { StyleDecorator } from '../../src/shared/config/storybook/decorators/StyleDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/decorators/RouterDecorator';
import { AppContextDecorator } from '../../src/shared/config/storybook/decorators/AppContextDecorator';
import { TranslationDecorator } from '../../src/shared/config/storybook/decorators/TranslationDecorator';

import '../../src/shared/config/i18n/i18n';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    StyleDecorator,
    TranslationDecorator,
    RouterDecorator,
    AppContextDecorator({ isSidebarCollapsed: false }),
  ],
};

export default preview;
