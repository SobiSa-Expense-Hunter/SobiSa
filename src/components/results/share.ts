import { sharedMessage } from '@/constant';

export const shareOnTwitter = () => {
  const sendText = sharedMessage.title;
  const pageUrl = sharedMessage.url;
  window.open(`https://twitter.com/intent/tweet?text=${sendText}&url=${pageUrl}`);
};

export const shareOnFacebook = () => {
  const pageUrl = sharedMessage.url;
  window.open(`http://www.facebook.com/sharer/sharer.php?u=${pageUrl}`);
};

export const shareOnKakao = () => {
  if (!window.Kakao) return;

  window.Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: sharedMessage.title ? sharedMessage.title : '',
      description: sharedMessage.text,
      imageUrl:
        'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
      link: {
        // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
        mobileWebUrl: sharedMessage.url,
        webUrl: sharedMessage.url,
      },
    },
    buttons: [
      {
        title: '웹으로 보기',
        link: {
          mobileWebUrl: sharedMessage.url,
          webUrl: sharedMessage.url,
        },
      },
      {
        title: '앱으로 보기',
        link: {
          mobileWebUrl: sharedMessage.url,
          webUrl: sharedMessage.url,
        },
      },
    ],
  });
};
