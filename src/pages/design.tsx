import React from 'react';

import styled from 'styled-components';

import { ItemImage, LineImage, MainImage } from '@/assets';
import Header from '@/components/common/Header';
import {
  BottomButton,
  ModalButton,
  ModalLongButton,
  ModalSubButton,
  ShareButton,
} from '@/components/common/buttons';
import FrameName from '@/components/common/frameName';
import {
  FaceBookIcon,
  KakaoIcon,
  LinkIcon,
  LoadingIcon,
  NoticeIcon,
  TopIcon,
  TwitterIcon,
} from '@/styles/icons';

const design = () => {
  return (
    <main>
      <aside>
        <ul>
          <li>buttons</li>
          <li>image</li>
        </ul>
      </aside>
      <section>
        <Section>
          <h2> frame name</h2>
          <FrameName>소비사 프로덕트</FrameName>
          <FrameName>Apple 2022 맥북 에어</FrameName>
          <FrameName>Sobisa! some product Sobisa! some product </FrameName>
        </Section>
        <Section>
          <h2>buttons</h2>
          <ItemContent>
            <h3>모달 버튼</h3>
            <div>
              <ModalButton>STATIC</ModalButton>
              <ModalSubButton>STATIC</ModalSubButton>
            </div>
            <div>
              <Code>&lt;ModalButton&gt;STATIC&lt;/ModalButton&gt;</Code>
            </div>
          </ItemContent>
          <ItemContent>
            <ModalLongButton>STATIC</ModalLongButton>
          </ItemContent>
          <ItemContent>
            <BottomButton>STATIC</BottomButton>
          </ItemContent>
          <ItemContent>
            <ShareButton>STATIC</ShareButton>
          </ItemContent>
        </Section>
        <Section>
          <h2>Image</h2>
          <ItemContent>
            <MainImage />
          </ItemContent>
          <ItemContent>
            <LineImage />
          </ItemContent>
          <ItemContent>
            <ItemImage />
          </ItemContent>
        </Section>
        <Section>
          <h2>Icon</h2>
          <ItemContent>
            <NoticeIcon />
          </ItemContent>
          <ItemContent>
            <TopIcon />
          </ItemContent>
          <ItemContent>
            <LoadingIcon />
          </ItemContent>
          <ItemContent>
            <FaceBookIcon />
          </ItemContent>
          <ItemContent>
            <TwitterIcon />
          </ItemContent>
          <ItemContent>
            <KakaoIcon />
          </ItemContent>
          <ItemContent>
            <LinkIcon />
          </ItemContent>
        </Section>
        <Section>
          <h2>header</h2>
          <Header />
        </Section>
      </section>
    </main>
  );
};

export default design;

const Main = styled.main`
  display: grid;
  grid: 1 / 5;
  counter-reset: sec-counter;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #fefefe;
  padding: 10px;
  border: 1px solid darkgray;
  border-radius: 5px;
  margin: 10px;
  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
  h2::before {
    counter-increment: sec-counter;
    content: counter(sec-counter) '. ';
  }
`;

const ItemContent = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h3 {
    font-weight: bold;
  }
`;

const Code = styled.code`
  background-color: #eee;
  border-radius: 3px;
  font-family: courier, monospace;
  padding: 0 3px;
  font-size: 0.9rem;
`;
