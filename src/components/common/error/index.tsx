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
    <Layout.FixButtonBottom height='auto' alignItems='center' padding='30px 0 30px'>
      <Layout.VStack justifyContent='center' margin='0 0 5vh 0'>
        <Layout.VStack alignItems='center'>
          <Image
            src='/graphics/notFound.gif'
            alt='not Found'
            height={220}
            width={220}
            unoptimized
          />
          <Layout.Box height='5vh' />
          <Font.MediumOrange>{mainTitle}</Font.MediumOrange>
          <Layout.VStack margin='16px 0 0' maxWidth='310px' alignItems='center'>
            {subTextLines.map(textLine => (
              <Font.Small key={uuid()}> {textLine} </Font.Small>
            ))}
          </Layout.VStack>
        </Layout.VStack>
      </Layout.VStack>
      <Link href='/' replace>
        <Buttons.BottomButton>{buttonText}</Buttons.BottomButton>
      </Link>
    </Layout.FixButtonBottom>
  );
}

export default CustomError;
