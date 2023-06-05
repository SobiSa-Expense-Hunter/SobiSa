import Image from 'next/image';
import Link from 'next/link';

import * as Buttons from '@/components/common/buttons';
import * as Layout from '@/components/common/layout';
import * as Font from '@/styles/font';

function NotFound() {
  return (
    <Layout.VStack alignItems='center'>
      <Image src='/graphics/notFound.gif' alt='not Found' height={220} width={220} unoptimized />
      <Layout.Box height='32px' />
      <Font.MediumOrange>정말 그걸 검색하신 게 맞나요? </Font.MediumOrange>
      <Layout.Box height='16px' />
      <Font.Small>검색하신 물건과 관련된 결과가 하나도 없습니다! </Font.Small>
      <Font.Small>오타를 내신 건 아닌가요?</Font.Small>
      <Layout.Box height='87px' />
      <Link href='/' replace>
        <Buttons.BottomButton>이전으로</Buttons.BottomButton>
      </Link>
      <Layout.Box margin='66px' />
    </Layout.VStack>
  );
}

export default NotFound;
