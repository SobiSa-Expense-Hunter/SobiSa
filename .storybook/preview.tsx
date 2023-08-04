import React from 'react';

import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import GlobalStyles from '../src/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';
import { Title, Subtitle, Primary, Controls, Stories } from '@storybook/blocks';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: { mainTheme: theme },
    defaultTheme: 'mainTheme',
    Provider: ThemeProvider,
    GlobalStyles,
  }),
];

export default preview;
