// Replace your-framework with the name of your framework
import AlternativeBigCard from '@/components/results/alternatives/big-card/AlternativeBigCard';
import * as Style from '@/components/results/alternatives/style';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/AlternativeBigCard',
  component: AlternativeBigCard,
  tags: ['autodocs'],
  argTypes: {
    alternative: {
      title: {
        control: 'string',
        defaultValue: undefined,
      },
      image: {
        control: 'string',
        defaultValue: undefined,
      },
      price: {
        control: 'number',
        defaultValue: 0,
      },
      unit: {
        control: 'string',
        defaultValue: undefined,
      },
    },
    savingAmount: {
      control: 'number',
      defaultValue: 0,
    },
  },
  decorators: [
    Story => (
      <Style.AlternativeWrapper style={{ width: '310px' }}>
        <Story />
      </Style.AlternativeWrapper>
    ),
  ],
} satisfies Meta<typeof AlternativeBigCard>;

export default meta;
type Story = StoryObj<typeof AlternativeBigCard>;

export const Default: Story = {
  args: {
    alternative: {
      title: '티볼리',
      image: '/assets/emoji/티볼리.png',
      price: 100000,
      unit: '대',
    },
    savingAmount: 100000,
  },
};
