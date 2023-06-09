import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { Button } from '@/components/common/buttons';
import * as Layout from '@/components/common/layout';
import MarginBox from '@/components/common/marginBox';
import * as Font from '@/styles/font';

const Card = () => {
  const [show, setShow] = useState(true);
  return show ? (
    <CardContainer>
      <Layout.VStack
        style={{
          gap: 8,
        }}
      >
        <Tag>설문조사</Tag>
        <Title>소비사 이용후기를 들려주세요!</Title>
        <Description>
          설문에 참여하시면 추첨을 통하여
          <br />두 분께 커피 기프티콘을 드립니다!
        </Description>

        <Period>2023.06.08~2023.06.18</Period>
      </Layout.VStack>
      <Layout.VStack
        style={{
          alignItems: 'flex-end',
          gap: 16,
          paddingRight: 8,
          position: 'relative',
        }}
      >
        <CloseButton type='button' onClick={() => setShow(prev => !prev)}>
          <Image src='/assets/icons/small_close.svg' width={10} height={10} alt='카드 닫기' />
        </CloseButton>

        <Image
          src='/assets/event/event-img.svg'
          width='133'
          height='99'
          alt='캐릭터가 커피를 든 모습'
        />
        <Link href='https://forms.gle/RTppjyxjAJr4NAGSA' passHref target='_blank'>
          <EventButton>바로가기</EventButton>
        </Link>
      </Layout.VStack>
    </CardContainer>
  ) : (
    <MarginBox margin='5vh' />
  );
};

export default Card;

const CardContainer = styled(Layout.HStack)`
  padding: 30px 30px 40px;
  gap: 10px;
  min-height: 20vh;
  background-color: #faf5e9;
  width: 375px;
  min-width: max-content;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Tag = styled(Font.SmallOrange)`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 2px 8px;

  width: max-content;
  height: 22px;

  border: 1px solid #ff9d02;
  border-radius: 24px;
`;

const Title = styled(Font.Medium)`
  margin-left: 4px;
`;
const Description = styled(Font.Small)`
  color: ${props => props.theme.colors.gray[4]};
  margin-top: 4px;
  margin-left: 4px;
`;

const Period = styled.span`
  font-weight: 600;
  font-size: 13px;
  margin-top: 11px;
  background: linear-gradient(360deg, transparent 0 10%, #ffc467 0 70%, transparent 0 10%);
  width: max-content;

  margin-left: 4px;
`;

const EventButton = styled(Button)`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;

  width: max-content;
  height: 26px;

  background: #fcfcfe;
  border: 1px solid #f0f0f0;
  border-radius: 4px;

  font-size: ${props => props.theme.fontSize.xxs};
  color: ${props => props.theme.colors.gray[3]};
`;

const CloseButton = styled(Button)`
  padding: 0;
  background: transparent;
  top: -16px;
  position: absolute;
  right: -5px;
`;
