import React from 'react';

import { KakaoIconImg } from '@/assets/SocialIcons';
import { ImageButton } from '@/components/common/buttons';

interface KakaoButtonProps {
  webUrl: string;
}

const KakaoButton = ({ webUrl }: KakaoButtonProps) => {
  const onClick = () => {
    sendScrap();
  };

  const sendScrap = () => {
    if (!window.Kakao) return;

    window.Kakao.Share.sendScrap({
      requestUrl: webUrl,
    });
  };

  return (
    <ImageButton type='button' onClick={onClick} style={{ background: '#FFE812' }}>
      <KakaoIconImg />
    </ImageButton>
  );
};

export default KakaoButton;
