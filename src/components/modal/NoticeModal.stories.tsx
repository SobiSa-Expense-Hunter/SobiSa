import NoticeModal from '@/components/modal/NoticeModal';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Modal/NoticeModal',
  component: NoticeModal,
} satisfies Meta<typeof NoticeModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: '오류가 발생했어요',
    onClose: () => false,
  },
};
