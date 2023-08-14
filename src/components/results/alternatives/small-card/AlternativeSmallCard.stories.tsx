// Replace your-framework with the name of your framework
import AlternativeSmallCard from '@/components/results/alternatives/small-card/AlternativeSmallCard';
import * as Style from '@/components/results/alternatives/style';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Alternatives/AlternativeSmallCard',
  component: AlternativeSmallCard,
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
    productPrice: {
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
} satisfies Meta<typeof AlternativeSmallCard>;

export default meta;
type Story = StoryObj<typeof AlternativeSmallCard>;

export const Default: Story = {
  args: {
    alternative: {
      title: '밥',
      image: '/assets/emoji/밥.png',
      price: 1000,
      unit: '공기',
    },
    productPrice: 1000,
  },
};

export const Animation: Story = {
  args: {
    alternative: {
      title: '밥',
      image: '/assets/emoji/밥.png',
      price: 1000,
      unit: '공기',
    },
    productPrice: 100000,
  },
};
