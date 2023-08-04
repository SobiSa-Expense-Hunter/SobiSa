import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    {
      directory: '../src',
      files: '**/*.stories.@(js|jsx|mjs|ts|tsx)',
      titlePrefix: 'Design System',
    },
  ],
  addons: ['@storybook/addon-essentials', '@storybook/addon-styling', '@storybook/addon-viewport'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async config => {
    if (config?.resolve?.alias === undefined) return config;
    config.resolve.alias['@'] = path.resolve(__dirname, '../src/');
    return config;
  },
};
export default config;
