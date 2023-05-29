import React, { useState } from 'react';

import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';

import * as Icon from '@/assets/Icons';
import { useSearchDispatch } from '@/components/SearchProvider';
import { BottomButton } from '@/components/common/buttons';
import MarginBox from '@/components/common/marginBox';
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
    <Style.Container>
      <Style.KeywordPageFont.Main>표시할 상품 키워드를 선택해 주세요.</Style.KeywordPageFont.Main>
      <MarginBox margin='4px' />
      <Style.KeywordPageFont.Sub>
        멋진 임명장을 위해선 7~14글자 사이가 좋아요!
      </Style.KeywordPageFont.Sub>
      <MarginBox margin='24px' />
      <Style.Keyword>
        {allKeyword.map(keyword => (
          <Style.KeywordWrapper
            key={uuidv4()}
            onClick={() => keywordHandler(keyword)}
            isSelected={selectedKeywords.includes(keyword)}
          >
            {keyword}
          </Style.KeywordWrapper>
        ))}
      </Style.Keyword>
      <MarginBox margin='56px' />
      <Style.FlexColWrapper>
        <Style.Span>{String(selectedKeywords).replaceAll(',', ' ')}</Style.Span>
        <Style.FlexRowWrapper>
          <Font.SmallOrange style={{ flex: 1 }}>{alertMessage}</Font.SmallOrange>
          <Style.ResetBtn type='button' onClick={titleResetHandler}>
            <Icon.InitializationIcon />
          </Style.ResetBtn>
        </Style.FlexRowWrapper>
      </Style.FlexColWrapper>

      <Style.ButtonBox>
        <BottomButton style={{ marginBottom: '20px' }} onClick={nextPageHandler}>
          다음으로
        </BottomButton>
      </Style.ButtonBox>
    </Style.Container>
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
