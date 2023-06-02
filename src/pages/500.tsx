import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import * as Buttons from '@/components/common/buttons';
import MarginBox from '@/components/common/marginBox';
import * as Font from '@/styles/font';

function Custom500() {
  // 지금은 @/components/list/NotFound.tsx 레이아웃을 가져옴
  return (
    <NotFoundWrapper>
      <Image src='/graphics/notFound.gif' alt='not Found' height={220} width={220} unoptimized />
      <MarginBox margin='32px' />
      <Font.MediumOrange>505 ERROR..</Font.MediumOrange>
      <MarginBox margin='16px' />
      <Font.Small>서버 문제에요. </Font.Small>
      <MarginBox margin='87px' />
      <Link href='/' replace>
        <Buttons.BottomButton>홈으로 돌아가기</Buttons.BottomButton>
      </Link>
      <MarginBox margin='66px' />
    </NotFoundWrapper>
  );
}

export default Custom500;

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
