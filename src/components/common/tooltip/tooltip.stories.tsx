import * as Layout from '@/components/common/layout';
import ToolTip from '@/components/common/tooltip';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/ToolTip',
  component: ToolTip,
  tags: ['autodocs'],
  argTypes: {
    arrowAlign: {
      control: 'select',
      options: ['left', 'right', undefined],
      defaultValue: undefined,
    },
    arrowPosition: {
      control: 'select',
      options: ['top', 'bottom', undefined],
      defaultValue: undefined,
    },
  },
  decorators: [
    Story => (
      <Layout.Flex position='relative' justifyContent='center' alignItems='center'>
        <Story />
      </Layout.Flex>
    ),
  ],
} satisfies Meta<typeof ToolTip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Tooltip',
  },
};

export const ArrowTopLeft: Story = {
  args: {
    children: 'Tooltip',
    arrowPosition: 'top',
    arrowAlign: 'left',
  },
};

export const ArrowTopRight: Story = {
  args: {
    children: 'Tooltip',
    arrowPosition: 'top',
    arrowAlign: 'right',
  },
};

export const ArrowBottomRight: Story = {
  args: {
    children: 'Tooltip',
    arrowPosition: 'bottom',
    arrowAlign: 'right',
  },
};

export const ArrowBottomLeft: Story = {
  args: {
    children: 'Tooltip',
    arrowPosition: 'bottom',
    arrowAlign: 'left',
  },
};
