import React, { useState } from 'react';

import { useRouter } from 'next/router';
import styled, { keyframes } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import * as Icon from '@/assets/Icons';
import { useSearchDispatch, useSearchStore } from '@/components/SearchProvider';
import { BottomButton } from '@/components/common/buttons';
import MarginBox from '@/components/common/marginBox';
import { Centering } from '@/components/layout/AppLayout';
import * as Font from '@/styles/font';

const KeywordPage = () => {
  const devTitle = `내셔널지오그래픽 코어 오리지날 슬링백 N235ACR890`;
  const store = useSearchStore();
  const dispatch = useSearchDispatch();
  const router = useRouter();

  return (
    <Container>
      <div>
        <KeywordPageFont.Main>표시할 상품 키워드를 선택해 주세요.</KeywordPageFont.Main>
        <MarginBox margin='4px' />
        <KeywordPageFont.Sub>멋진 임명장을 위해선 7~14글자 사이가 좋아요!</KeywordPageFont.Sub>
        <MarginBox margin='24px' />
        <Keyword>
          {devTitle.split(' ').map(v => (
            <KeywordWrapper key={uuidv4()}>
              <KeywordFont>{v}</KeywordFont>
            </KeywordWrapper>
          ))}
        </Keyword>
        <MarginBox margin='56px' />
        <FlexColWrapper>
          <GrayInput disabled value={devTitle} />
          <FlexRowWrapper>
            <Font.SmallOrange style={{ flex: 1 }}>
              입력은 14글자보다 짧게 해주세요.
            </Font.SmallOrange>
            <Icon.InitializationIcon />
          </FlexRowWrapper>
        </FlexColWrapper>

        <ButtonBox>
          {/* todo : /savingamount 이동 */}
          <BottomButton>다음으로</BottomButton>
        </ButtonBox>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 36px;
`;

const KeywordPageFont = {
  Main: styled(Font.Large)``,
  Sub: styled(Font.Medium)`
    color: ${({ theme }) => theme.colors.gray[3]};
    font-weight: 600;
  `,
};

const FlexRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ButtonBox = styled.div`
  margin-top: 321px;
  display: flex;
  justify-content: center;
`;

const FlexColWrapper = styled.div`
  display: flex;
  max-width: 310px;
  align-items: center;
  gap: 16px;
  flex-direction: column;
  align-items: stretch;
`;

const Keyword = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  gap: 8px 6px;
`;

const KeywordWrapper = styled.button`
  padding: 10px 15px;
  background: ${({ theme }) => theme.colors.mainColor};

  border-radius: 10px;
  border-style: none;
`;

const KeywordFont = styled(Font.Medium)`
  font-weight: 600;
  color: white;
`;

const GrayInput = styled.input`
  width: 100%;
  height: 38px;

  outline: none;
  border: 1px solid #cbcbcb;
  padding: 10px 20px;
  border-radius: 6px;
  text-overflow: ellipsis;
  &:disabled {
    background-color: white;
    cursor: not-allowed;
  }

  /*INPUT-FONT */
  font-family: 'Pretendard Variable';
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.022em;

  color: ${({ theme }) => theme.colors.gray[3]};
`;

export default KeywordPage;
