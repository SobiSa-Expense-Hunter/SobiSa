/* eslint-disable react/jsx-no-useless-fragment */
import { useState, useRef } from 'react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { BottomButton } from '@/components/common/buttons';

const AboutInit = dynamic(() => import('@/components/about/AboutInit'));
const AboutLayout = dynamic(() => import('@/components/about/AboutLayout'));

function About() {
  const [pageNum, setPageNum] = useState(0);
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  let scrollClickCount = 1;

  const scrollHandler = () => {
    if (scrollClickCount < 1) {
      setPageNum(prev => prev + 1);
      return;
    }
    if (pageNum === 0) {
      scrollRef?.current?.scrollIntoView({ behavior: 'smooth' });
      scrollClickCount = 0;
    }
  };

  const nextPageHandler = () => {
    if (pageNum < AboutContents.length) setPageNum(prev => prev + 1);
    else router.push('/');
  };

  return (
    <>
      {pageNum === 0 ? (
        <>
          <AboutInit scrollRef={scrollRef} />
          <BottomButton onClick={scrollHandler}>다음으로</BottomButton>
        </>
      ) : (
        <>
          <AboutLayout
            pageNum={pageNum}
            mainTexts={AboutContents[pageNum - 1].mainTexts}
            subTexts={AboutContents[pageNum - 1].subTexts}
          />
          <BottomButton onClick={nextPageHandler}>다음으로</BottomButton>
        </>
      )}
    </>
  );
}

export default About;

const AboutContents = [
  {
    mainTexts: ['Search for Stuff', '물건 탐색하기'],
    subTexts: ['살 예정이 있었던, 혹은 사고 싶었던', '물건을 검색해보세요!'],
  },
  {
    mainTexts: ['Enter Information', '정보 입력하기'],
    subTexts: ['사고 싶었던 물건의 가격과', '나의 여유 금액을 입력해 보세요!'],
  },
  {
    mainTexts: ['Input Result', '기회비용 확인 하기'],
    subTexts: ['내가 물건을 사기 위해 걸리는 기간과', '기회비용을 알 수 있어요!'],
  },
  {
    mainTexts: ['Share with Friend', '공유하기'],
    subTexts: ['소비사가 발행해준 영수증을', '친구들과 공유해보세요!'],
  },
];
