import React, { useState } from 'react';

import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';

import * as Icon from '@/assets/Icons';
import { useSearchDispatch } from '@/components/SearchProvider';
import { BottomButton } from '@/components/common/buttons';
import * as Layout from '@/components/common/layout';
import * as Style from '@/components/keyword/style';
import * as Font from '@/styles/font';
import { Product } from '@/types/product';

function Keyword({ product, allKeyword }: { product: Product; allKeyword: string[] }) {
  const [selectedKeywords, setSelectedKeywords] = useState([allKeyword[0]]);
  const [alertMessage, setAlertMessage] = useState(`${allKeyword[0].length} 글자`);

  const dispatch = useSearchDispatch();
  const router = useRouter();

  const keywordHandler = (selectKeyword: string) => {
    const [title, titleLen] = makeTitle(selectedKeywords, selectKeyword);
    setSelectedKeywords(title);
    if (titleLen > 14) setAlertMessage(`14글자 이하로 입력해주세요.`);
    else setAlertMessage(`${titleLen} 글자`);
  };

  const titleResetHandler = () => {
    setSelectedKeywords(['']);
    setAlertMessage(`0 글자`);
  };

  const nextPageHandler = () => {
    if (String(selectedKeywords) === '') {
      setAlertMessage(`키워드를 하나 이상 선택하세요.`);
      return;
    }
    dispatch({
      type: 'ADD_PRODUCT',
      item: { ...product, title: String(selectedKeywords).replaceAll(',', ' ') },
    });
    router.push('/savingamount');
  };

  return (
    <Layout.FixButtonBottom alignItems='stretch' padding='0 0 30px 0'>
      <Layout.VStack height='100%' justifyContent='center'>
        <Style.KeywordPageFont.Main>표시할 상품 키워드를 선택해 주세요.</Style.KeywordPageFont.Main>
        <Layout.Box height='4px' />
        <Style.KeywordPageFont.Sub>
          멋진 임명장을 위해선 7~14글자 사이가 좋아요!
        </Style.KeywordPageFont.Sub>
        <Layout.Box height='24px' />

        <Layout.HStack flexWrap='wrap' gap='8px 6px'>
          {allKeyword.map(keyword => (
            <Style.KeywordButton
              key={uuidv4()}
              onClick={() => keywordHandler(keyword)}
              isSelected={selectedKeywords.includes(keyword)}
            >
              {keyword}
            </Style.KeywordButton>
          ))}
        </Layout.HStack>
        <Layout.Box height='10%' />

        <Layout.VStack alignItems='stretch' gap='16px'>
          <Style.Span>{String(selectedKeywords).replaceAll(',', ' ')}</Style.Span>
          <Layout.HStack alignItems='center'>
            <Font.SmallOrange style={{ flex: 1 }}>{alertMessage}</Font.SmallOrange>
            <Style.ResetBtn type='button' onClick={titleResetHandler}>
              <Icon.InitializationIcon />
            </Style.ResetBtn>
          </Layout.HStack>
        </Layout.VStack>
        <Layout.Box height='10%' />
      </Layout.VStack>

      <BottomButton onClick={nextPageHandler}>다음으로</BottomButton>
    </Layout.FixButtonBottom>
  );
}

function makeTitle(
  prevTitle: string[],
  inputKeyword: string,
): [newTitle: string[], newTitleLen: number] {
  const prevTitleLength = String(prevTitle).replaceAll(/[,]/g, '').length;
  const inputKeywordLength = inputKeyword.length;

  if (prevTitle.includes(inputKeyword)) {
    const newTitle = prevTitle.filter(prevKeyword => prevKeyword !== inputKeyword);
    return [newTitle, String(newTitle).replaceAll(/[,]/g, '').length];
  }

  if (prevTitleLength + inputKeywordLength <= 14) {
    const newTitle = [...prevTitle, inputKeyword];
    return [newTitle, String(newTitle).replaceAll(/[,]/g, '').length];
  }

  return [prevTitle, prevTitleLength + inputKeywordLength];
}

export default Keyword;
