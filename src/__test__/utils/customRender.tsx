import React, { ReactElement } from 'react';

import 'jest-styled-components';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from '@/styles/theme';

import type { RenderOptions } from '@testing-library/react';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
