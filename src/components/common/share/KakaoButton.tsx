import React from 'react';

import { KakaoIcon } from '@/assets/SocialIcons';
import { ImageButton } from '@/components/common/buttons';

interface KakaoButtonProps {
  title: string;
  description: string;
  mobileWebUrl: string;
  webUrl: string;
}

const KakaoButton = ({ title, description, mobileWebUrl, webUrl }: KakaoButtonProps) => {
  const shareOnKakao = () => {
    if (!window.Kakao) return;

    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title,
        description,
        imageUrl:
          'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl,
          webUrl,
        },
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl,
            webUrl,
          },
        },
        {
          title: '앱으로 보기',
          link: {
            mobileWebUrl,
            webUrl,
          },
        },
      ],
    });
  };

  return (
    <ImageButton type='button' onClick={shareOnKakao}>
      <KakaoIcon />
    </ImageButton>
  );
};

export default KakaoButton;
