import { useRouter } from 'next/router';

import Header from '@/components/common/Header';
import LeftButton from '@/components/common/Header/buttons/LeftButton';
import RightButton from '@/components/common/Header/buttons/RightButton';
import TextLogo from '@/components/common/Header/buttons/TextLogo';
import * as Style from '@/components/common/Header/style';
import * as Layout from '@/components/common/layout';

import type { Meta } from '@storybook/react';

const meta = {
  title: 'Common/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;

export function DefaultHome() {
  const router = useRouter();
  const isHome = true;
  return (
    <Layout.Flex width='310px'>
      <Style.HeaderWrapper>
        <LeftButton isHome={isHome} router={router} />
        <TextLogo />
        <RightButton isHome={isHome} isOpen={false} toggleIsOpen={() => false} />
      </Style.HeaderWrapper>
    </Layout.Flex>
  );
}

export function NotHome() {
  const router = useRouter();
  const isHome = false;
  return (
    <Layout.Flex width='310px'>
      <Style.HeaderWrapper>
        <LeftButton isHome={isHome} router={router} />
        <TextLogo />
        <RightButton isHome={isHome} isOpen={false} toggleIsOpen={() => false} />
      </Style.HeaderWrapper>
    </Layout.Flex>
  );
}
