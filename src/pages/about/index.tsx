import Link from 'next/link';

import * as Button from '@/components/common/buttons';
import MarginBox from '@/components/common/marginBox';
import { Centering } from '@/components/layout/AppLayout';
import * as Font from '@/styles/font';

function about() {
  return (
    <Centering>
      <MarginBox margin='16px' />
      <Font.Medium>안녕하세요.</Font.Medium>
      <MarginBox margin='5px' />
      <Font.Large>SOBISA! 입니다.</Font.Large>
      <MarginBox margin='16px' />
      <img src='graphics/about.png' alt='about img' />
      <MarginBox margin='32px' />
      <Font.Small>팀 소비사는 사이드 프로젝트를 위해 구성된 모임입니다. </Font.Small>
      <Font.Small> 사고 싶은 물건의 가격과 내 소비를 비교하여</Font.Small>
      <Font.Small>얼마나 걸릴지 알아보는데 목적이 있습니다.</Font.Small>
      <MarginBox margin='16px' />
      <Font.Small>사용자 정보는 단순 결과를 위해서만 사용되며 </Font.Small>
      <Font.Small> 이외의 수단으로 사용되지 않는다는 것을 안내드립니다.</Font.Small>
      <MarginBox margin='128px' />
      <Link href='/'>
        <Button.BottomButton>믿을게요!</Button.BottomButton>
      </Link>
    </Centering>
  );
}

export default about;
