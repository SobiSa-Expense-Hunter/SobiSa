import ChoseProductModal from '@/components/modal/ChoseProductModal';
import searchSuggestions from '@/constant/searchSuggestions';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Modal/ChoseProductModal',
  component: ChoseProductModal,
  argTypes: {
    title: {
      type: 'string',
    },
    image: { control: { type: 'file', accept: '.jpg' } },
  },
} satisfies Meta<typeof ChoseProductModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: searchSuggestions[0].title as string,
    image: searchSuggestions[0].image as string,
    onClose: () => false,
    onSubmit: () => false,
  },
};
