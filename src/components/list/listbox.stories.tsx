import * as Layout from '@/components/common/layout';
import ListBox from '@/components/list/ListBox';
import searchSuggestions from '@/constant/searchSuggestions';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'List/Listbox',
  component: ListBox,
  tags: ['autodocs'],
  argTypes: {
    product: {
      control: 'select',
      options: { ...searchSuggestions },
    },
  },
  decorators: [
    Story => (
      <Layout.Box style={{ background: 'white' }}>
        <Story />
      </Layout.Box>
    ),
  ],
} satisfies Meta<typeof ListBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { product: { ...searchSuggestions[0], category1: '아이스크림' } },
};
