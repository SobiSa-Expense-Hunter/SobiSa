import React from 'react';

import styled from 'styled-components';

import FacebookButton from '@/components/common/share/FacebookButton';
import KakaoButton from '@/components/common/share/KakaoButton';
import LinkButton from '@/components/common/share/LinkButton';
import NativeShareButton from '@/components/common/share/NativeShareButton';
import TwitterButton from '@/components/common/share/TwitterButton';
import { sharedMessage } from '@/constant';

const ShareButtons = () => {
  const { title = '', text = '', url = '' } = sharedMessage;
  return (
    <ShareButtonsContainer>
      <FacebookButton pageUrl={url} />
      <TwitterButton sendText={title} pageUrl={url} />
      <KakaoButton webUrl={url} />
      <LinkButton pageUrl={url} />
      <NativeShareButton sharedMessage={sharedMessage} />
    </ShareButtonsContainer>
  );
};

export default ShareButtons;

const ShareButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));
`;
