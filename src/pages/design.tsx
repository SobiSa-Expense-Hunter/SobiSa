import React from 'react';

import styled from 'styled-components';

import { LinkIcon, LoadingIcon, NoticeIcon, TopIcon } from '@/assets/Icons';
import { ItemImage, LineImage, MainImage } from '@/assets/Images';
import Indicator from '@/assets/Indicators';
import { FaceBookIcon, KakaoIcon, TwitterIcon } from '@/assets/SocialIcons';
import FrameName from '@/components/common/FrameName';
import SearchInput from '@/components/common/SearchInput';
import {
  BottomButton,
  ModalButton,
  ModalLongButton,
  ModalSubButton,
  ShareButton,
} from '@/components/common/buttons';
import Card from '@/components/event/Card';
import * as Font from '@/styles/font';
import theme from '@/styles/theme';
import { GrayRange } from '@root/style';

const design = () => {
  return (
    <Main>
      <Aside>
        <h1>스타일 가이드</h1>
        <ul>
          <li>
            <a href='#frame-name-container'>Frame Name</a>
          </li>
          <li>
            <a href='#buttons-container'>Buttons</a>
          </li>
          <li>
            <a href='#image-container'>Images</a>
          </li>
          <li>
            <a href='#icons-container'>Icons</a>
          </li>
          <li>
            <a href='#colors-container'>Colors</a>
          </li>
          <li>
            <a href='#input-container'>Input</a>
          </li>
          <li>
            <a href='#indicator-container'>Indicator</a>
          </li>
          <li>
            <a href='#font-container'>Font</a>
          </li>
        </ul>
      </Aside>

      <Section>
        <Article id='frame-name-container'>
          <h2>frame name</h2>
          <ItemContent>
            <ItemViewContainer style={{ flexDirection: 'column' }}>
              <FrameName>소비사 프로덕트</FrameName>
              <FrameName>Apple 2022 맥북 에어</FrameName>
              <FrameName>Sobisa! some product Sobisa! some product </FrameName>
            </ItemViewContainer>
            <CodeRows>
              <Code>&lt;FrameName&gt;소비사 프로덕트&lt;/FrameName&gt;</Code>
            </CodeRows>
          </ItemContent>
        </Article>

        <Article id='buttons-container'>
          <h2>buttons</h2>
          <MiniItemContentsWrapper>
            <ItemContent>
              <h3>ModalButton</h3>
              <ItemViewContainer>
                <ModalButton>STATIC</ModalButton>
                <ModalSubButton>STATIC</ModalSubButton>
              </ItemViewContainer>
              <CodeRows>
                <Code>
                  &lt;ModalButton&gt;STATIC&lt;/ModalButton&gt;
                  &lt;ModalSubButton&gt;STATIC&lt;/ModalSubButton&gt;
                </Code>
              </CodeRows>
            </ItemContent>
            <ItemContent>
              <h3>ModalLongButton</h3>
              <ItemViewContainer>
                <ModalLongButton>STATIC</ModalLongButton>
              </ItemViewContainer>
              <CodeRows>
                <Code>&lt;ModalLongButton&gt;STATIC&lt;/ModalLongButton&gt;</Code>
              </CodeRows>
            </ItemContent>
            <ItemContent>
              <h3>BottomButton</h3>
              <ItemViewContainer>
                <BottomButton>STATIC</BottomButton>
              </ItemViewContainer>
              <CodeRows>
                <Code>&lt;BottomButton&gt;STATIC&lt;/BottomButton&gt;</Code>
              </CodeRows>
            </ItemContent>
            <ItemContent>
              <h3>ShareButton</h3>
              <ItemViewContainer>
                <ShareButton>STATIC</ShareButton>
              </ItemViewContainer>
              <CodeRows>
                <Code>&lt;ShareButton&gt;STATIC&lt;/ShareButton&gt;</Code>
              </CodeRows>
            </ItemContent>
          </MiniItemContentsWrapper>
        </Article>

        <Article id='image-container'>
          <h2>Image</h2>
          <MiniItemContentsWrapper>
            <ItemContent>
              <h3>MainImage</h3>
              <ItemViewContainer>
                <MainImage />
              </ItemViewContainer>
              <CodeRows>
                <Code>&lt;MainImage /&gt;</Code>
              </CodeRows>
            </ItemContent>
            <ItemContent>
              <h3>LineImage</h3>
              <ItemViewContainer>
                <LineImage />
              </ItemViewContainer>
              <CodeRows>
                <Code>&lt;LineImage /&gt;</Code>
              </CodeRows>
            </ItemContent>
            <ItemContent>
              <h3>ItemImage</h3>
              <ItemViewContainer>
                <ItemImage />
              </ItemViewContainer>
              <CodeRows>
                <Code>&lt;ItemImage /&gt;</Code>
              </CodeRows>
            </ItemContent>
          </MiniItemContentsWrapper>
        </Article>

        <Article id='icons-container'>
          <h2>Icon</h2>
          <MiniItemContentsWrapper>
            <ItemContent>
              <h3>NoticeIcon</h3>
              <ItemViewContainer>
                <NoticeIcon />
              </ItemViewContainer>
              <CodeRows>
                <Code>&lt;NoticeIcon /&gt;</Code>
              </CodeRows>
            </ItemContent>
            <ItemContent>
              <h3>TopIcon</h3>
              <ItemViewContainer>
                <TopIcon />
              </ItemViewContainer>
              <CodeRows>
                <Code>&lt;TopIcon /&gt;</Code>
              </CodeRows>
            </ItemContent>
            <ItemContent>
              <h3>LoadingIcon</h3>
              <ItemViewContainer>
                <LoadingIcon />
              </ItemViewContainer>
              <CodeRows>
                <Code>&lt;LoadingIcon /&gt;</Code>
              </CodeRows>
            </ItemContent>
            <ItemContent>
              <h3>FaceBookIcon</h3>
              <ItemViewContainer>
                <FaceBookIcon />
              </ItemViewContainer>
              <CodeRows>
                <Code>&lt;FaceBookIcon /&gt;</Code>
              </CodeRows>
            </ItemContent>
            <ItemContent>
              <h3>TopIcon</h3>
              <ItemViewContainer>
                <TwitterIcon />
              </ItemViewContainer>
              <CodeRows>
                <Code>&lt;TopIcon /&gt;</Code>
              </CodeRows>
            </ItemContent>
            <ItemContent>
              <h3>KakaoIcon</h3>
              <ItemViewContainer>
                <KakaoIcon />
              </ItemViewContainer>
              <CodeRows>
                <Code>&lt;KakaoIcon /&gt;</Code>
              </CodeRows>
            </ItemContent>
            <ItemContent>
              <h3>LinkIcon</h3>
              <ItemViewContainer>
                <LinkIcon />
              </ItemViewContainer>
              <CodeRows>
                <Code>&lt;LinkIcon /&gt;</Code>
              </CodeRows>
            </ItemContent>
          </MiniItemContentsWrapper>
        </Article>

        <Article id='colors-container'>
          <h2>Colors</h2>
          <MiniItemContentsWrapper>
            <ItemContent>
              <ColorContainer color={theme.colors.mainColor}>
                {theme.colors.mainColor}
              </ColorContainer>
              <h3>theme.colors.mainColor</h3>
            </ItemContent>
            <ItemContent>
              <ColorContainer color={theme.colors.subColor}>{theme.colors.subColor}</ColorContainer>
              <h3>theme.colors.subColor</h3>
            </ItemContent>
            {Object.keys(theme.colors.gray).map(value => {
              return (
                <ItemContent key={`gray_${value}`}>
                  <ColorContainer color={theme.colors.gray[Number(value) as GrayRange]}>
                    {theme.colors.gray[Number(value) as GrayRange]}
                  </ColorContainer>
                  <h3>theme.colors.gray[{value}]</h3>
                </ItemContent>
              );
            })}
          </MiniItemContentsWrapper>
        </Article>

        <Article id='input-container'>
          <h2>Input</h2>
          <SearchInput />
        </Article>

        <Article id='indicator-container'>
          <h2>Indicator</h2>
          <Indicator length={4} order={0} />
          <Indicator length={4} order={1} />
          <Indicator length={4} order={2} />
          <Indicator length={4} order={3} />
        </Article>

        <Article id='font-container'>
          <h2>Font</h2>
          <MiniItemContentsWrapper>
            <ItemContent>
              <h3>Pretendard</h3>
              <Font.Small>Small</Font.Small>
              <Font.SmallOrange>SmallOrange</Font.SmallOrange>
              <Font.Medium>Medium</Font.Medium>
              <Font.MediumOrange>MediumOrange</Font.MediumOrange>
              <Font.Large>Large</Font.Large>
              <Font.ExtraLarge>ResultCost</Font.ExtraLarge>
            </ItemContent>
            <ItemContent>
              <h3>NeoDunggeunmo</h3>
              <Font.AwardXXSmall>AwardSmall</Font.AwardXXSmall>
              <Font.AwardXSmall>AwardMedium</Font.AwardXSmall>
              <Font.AwardSmall>AwardLarge</Font.AwardSmall>
              <Font.AwardXXLarge>AwardResultCost</Font.AwardXXLarge>
            </ItemContent>
          </MiniItemContentsWrapper>
        </Article>
        <Article>
          <h2>Card</h2>
          <Card />
        </Article>
      </Section>
    </Main>
  );
};

export default design;

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 5fr;
  counter-reset: sec-counter;
  scroll-behavior: smooth;
`;

const Section = styled.section``;

const Aside = styled.div`
  position: sticky;
  height: 100vh;
  font-size: 20px;
  border-right: 1px solid #949494;
  top: 0;
  color: #949494;

  h1 {
    color: black;
    font-size: 24px;
    margin: 20px 0px;
    padding: 20px;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-items: center;
    position: -webkit-sticky;
    position: sticky;

    li {
      line-height: 40px;
      padding-left: 20px;
      cursor: pointer;
    }
    li:hover {
      background-color: rgba(0, 0, 0, 0.02);
    }

    a,
    a:link,
    a:hover,
    a:active,
    a:visited {
      display: block;
      text-decoration: none;
      outline: none;
      color: #949494;
      text-decoration: none;
    }
  }
`;

const Article = styled.article`
  width: 70vw;
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border: 1px solid darkgray;
  border-radius: 5px;
  margin: 10px;
  background-color: #ffffe8;
  h2 {
    font-size: 20px;
    font-weight: bold;
  }
  h2::before {
    counter-increment: sec-counter;
    content: counter(sec-counter) '. ';
  }
`;

const ItemContent = styled.article`
  background-color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 25px;
  border: 1px solid darkgray;
  padding: 10px;
  border-radius: 5px;
  h3 {
    font-weight: bold;
  }
  overflow: auto;
`;

const MiniItemContentsWrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  gap: 10px;
  ${ItemContent} {
    align-items: center;
    justify-items: center;
  }
`;

const ItemViewContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Code = styled.code`
  box-sizing: border-box;
  background-color: #eee;
  border-radius: 3px;
  font-family: courier, monospace;
  font-size: 0.9rem;
`;

const CodeRows = styled.pre`
  background-color: #eee;
  padding: 15px;
  border-radius: 8px;
  gap: 25px;
  overflow: auto;
  width: 100%;
  code: {
    background-color: #eee;
  }
`;

const ColorContainer = styled.div`
  display: inline-block;
  width: 100%;
  line-height: 100px;
  vertical-align: center;
  text-align: center;
  background-color: ${props => props.color};
  color: white;
`;
