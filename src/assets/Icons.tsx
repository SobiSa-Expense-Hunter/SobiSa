import Image from 'next/image';

export const HamburgerIcon = () => {
  return <Image src='/assets/icons/hamburger.svg' width={50} height={50} alt='메뉴' />;
};

export const LeftIcon = () => {
  return <Image src='/assets/icons/left.svg' width={50} height={50} alt='이전 페이지로 이동' />;
};

export const LinkIcon = () => {
  return <Image src='/assets/icons/link.svg' width={50} height={50} alt='공유' />;
};

export const LoadingIcon = () => {
  return <Image src='/assets/icons/loading.svg' width={50} height={50} alt='로딩 중' />;
};

export const NoticeIcon = () => {
  return <Image src='/assets/icons/notice.svg' width={50} height={50} alt='알림' />;
};

export const TopIcon = () => {
  return <Image src='/assets/icons/top.svg' width={50} height={50} alt='맨 위로' />;
};

export const MagnifyingGlassIcon = () => {
  return (
    <Image src='/assets/icons/magnifyingGlass.svg' width={12} height={13} alt='소비사 캐릭터' />
  );
};

export const ArrowIcon = () => {
  return <Image src='/assets/icons/arrow.svg' width={8} height={8} alt='메뉴' />;
};
