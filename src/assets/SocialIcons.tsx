import Image from 'next/image';

const SOCIAL_PATH = `/assets/social`;

export const FaceBookIcon = () => {
  return <Image src={`${SOCIAL_PATH}/facebook.svg`} width={50} height={50} alt='소비사 캐릭터' />;
};

export const KakaoIcon = () => {
  return <Image src={`${SOCIAL_PATH}/kakao.svg`} width={50} height={50} alt='소비사 캐릭터' />;
};

export const TwitterIcon = () => {
  return <Image src={`${SOCIAL_PATH}/twitter.svg`} width={50} height={50} alt='소비사 캐릭터' />;
};

export const FaceBookIconImg = () => {
  return (
    <Image
      src={`${SOCIAL_PATH}/facebook.png`}
      alt='페이스북'
      width={34}
      height={34}
      style={{ objectFit: 'contain' }}
    />
  );
};
export const KakaoIconImg = () => {
  return (
    <Image
      src={`${SOCIAL_PATH}/kakao.png`}
      alt='카카오톡'
      width={34}
      height={34}
      style={{ objectFit: 'contain' }}
    />
  );
};
export const TwitterIconImg = () => {
  return (
    <Image
      src={`${SOCIAL_PATH}/twitter.png`}
      alt='트위터'
      width={34}
      height={34}
      style={{ objectFit: 'contain' }}
    />
  );
};

export const NavigatorShareIcon = () => {
  return <Image src={`${SOCIAL_PATH}/navigator_share.svg`} width={16} height={16} alt='공유' />;
};
