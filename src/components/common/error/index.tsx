import Image from 'next/image';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';

import * as Buttons from '@/components/common/buttons';
import * as Layout from '@/components/common/layout';
import * as Font from '@/styles/font';

interface ErrorProps {
  mainTitle: string;
  subTextLines: string[];
  buttonText: '이전으로' | '홈으로 돌아가기';
}

function CustomError({ mainTitle, subTextLines, buttonText }: ErrorProps) {
  return (
    <Layout.VStack alignItems='center' height='100%' justifyContent='space-around'>
      <Layout.VStack alignItems='center'>
        <Image src='/graphics/notFound.gif' alt='not Found' height={220} width={220} unoptimized />
        <Layout.Box height='32px' />
        <Font.MediumOrange>{mainTitle}</Font.MediumOrange>
        <Layout.VStack margin='16px 0 0' maxWidth='310px' alignItems='center'>
          {subTextLines.map(textLine => (
            <Font.Small key={uuid()}> {textLine} </Font.Small>
          ))}
        </Layout.VStack>
        <Layout.Box height='87px' />
      </Layout.VStack>
      <Link href='/' replace>
        <Buttons.BottomButton>{buttonText}</Buttons.BottomButton>
      </Link>
    </Layout.VStack>
  );
}

export default CustomError;
