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
