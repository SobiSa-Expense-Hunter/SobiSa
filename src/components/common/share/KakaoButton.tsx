import React from 'react';

import { KakaoIconImg } from '@/assets/SocialIcons';
import { ImageButton } from '@/components/common/buttons';

interface KakaoButtonProps {
  title: string;
  description: string;
  webUrl: string;
  shareImage: (callback: (imgUrl: string) => void) => Promise<void>;
}

const KakaoButton = ({ title, description, webUrl, shareImage }: KakaoButtonProps) => {
  const shareOnKakao = (imgUrl: string) => {
    if (!window.Kakao) return;

    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title,
        description,
        imageUrl: imgUrl,
        link: {
          webUrl,
        },
      },
    });
  };

  return (
    <ImageButton
      type='button'
      onClick={() => shareImage(shareOnKakao)}
      style={{ background: '#FFE812' }}
    >
      <KakaoIconImg />
    </ImageButton>
  );
};

export default KakaoButton;
