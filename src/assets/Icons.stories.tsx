import * as CommonStyle from '@/components/common/layout';

import * as Icons from './Icons';
import type { Meta, StoryObj } from '@storybook/react';

const IconComponent = ({ children, title, code }: IconComponentInfoProps) => {
  return (
    <CommonStyle.VStack style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
      {children}
      <span>{title}</span>
      <code
        style={{
          backgroundColor: '#eee',
          borderRadius: '5px',
          padding: '2px 5px',
          fontSize: '0.7rem',
          fontFamily: 'courier, monospace',
        }}
      >
        <pre>{code}</pre>
      </code>
    </CommonStyle.VStack>
  );
};

const IconComponentWrapper = ({ children }: IconComponentProps) => {
  return (
    <CommonStyle.Box
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        rowGap: '1rem',
        columnGap: '0.5rem',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </CommonStyle.Box>
  );
};

const meta = {
  title: 'Assets/Icons',
  component: IconComponentWrapper,
  tags: ['autodocs'],
} satisfies Meta<typeof IconComponentWrapper>;

type Story = StoryObj<typeof IconComponentWrapper>;

export default meta;

interface IconComponentProps {
  children: React.ReactElement;
}

interface IconComponentInfoProps extends IconComponentProps {
  title: string;
  code: string;
}

export const Default: Story = {
  args: {
    children: (
      <>
        <IconComponent title='LeftIcon' code='<Icons.LeftIcon />'>
          <Icons.LeftIcon />
        </IconComponent>

        <IconComponent title='LinkIcon' code='<Icons.LinkIcon />'>
          <Icons.LinkIcon />
        </IconComponent>

        <IconComponent title='LoadingIcon' code='<Icons.LoadingIcon />'>
          <Icons.LoadingIcon />
        </IconComponent>

        <IconComponent title='NoticeIcon' code='<Icons.NoticeIcon />'>
          <Icons.NoticeIcon />
        </IconComponent>

        <IconComponent title='TopIcon' code='<Icons.TopIcon />'>
          <Icons.TopIcon />
        </IconComponent>

        <IconComponent title='MagnifyingGlassIcon' code='<Icons.MagnifyingGlassIcon />'>
          <Icons.MagnifyingGlassIcon />
        </IconComponent>

        <IconComponent title='ArrowIcon' code='<Icons.ArrowIcon />'>
          <Icons.ArrowIcon />
        </IconComponent>

        <IconComponent title='DownloadIcon' code='<Icons.DownloadIcon />'>
          <Icons.DownloadIcon />
        </IconComponent>

        <IconComponent title='InitializationIcon' code='<Icons.InitializationIcon />'>
          <Icons.InitializationIcon />
        </IconComponent>

        <IconComponent title='AboutArrowIcon01' code='<Icons.AboutArrowIcon01 />'>
          <Icons.AboutArrowIcon01 />
        </IconComponent>

        <IconComponent title='AboutArrowIcon02' code='<Icons.AboutArrowIcon02 />'>
          <Icons.AboutArrowIcon02 />
        </IconComponent>

        <IconComponent title='HamburgerIcon' code='<Icons.HamburgerIcon width={50} height={50} />'>
          <Icons.HamburgerIcon width={50} height={50} />
        </IconComponent>

        <IconComponent title='Info' code='<Icons.Info width={50} height={50} />'>
          <Icons.Info width={50} height={50} />
        </IconComponent>

        <IconComponent title='Delete' code='<Icons.Delete width={50} height={50} />'>
          <Icons.Delete width={50} height={50} />
        </IconComponent>

        <IconComponent title='DeleteOrange' code='<Icons.DeleteOrange width={50} height={50} />'>
          <Icons.DeleteOrange width={50} height={50} />
        </IconComponent>

        <IconComponent title='QuestionMark' code='<Icons.QuestionMark width={50} height={50} />'>
          <Icons.QuestionMark width={50} height={50} />
        </IconComponent>
      </>
    ),
  },
};
