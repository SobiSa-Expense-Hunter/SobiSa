import React, { ReactElement } from 'react';

import 'jest-styled-components';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import SearchProvider from '@/components/SearchProvider';
import theme from '@/styles/theme';

import type { RenderOptions } from '@testing-library/react';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => (
  <>
    <div id='modal-root' />
    <SearchProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SearchProvider>
  </>
);

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
