import Image from 'next/image';

const ICON_PATH = '/assets/icons';

export const HamburgerIcon = () => {
  return <Image src={`${ICON_PATH}/hamburger.svg`} width={50} height={50} alt='메뉴' />;
};

export const LeftIcon = () => {
  return <Image src={`${ICON_PATH}/left.svg`} width={40} height={40} alt='이전 페이지로 이동' />;
};

export const LinkIcon = () => {
  return <Image src={`${ICON_PATH}/link.svg`} width={50} height={50} alt='공유' />;
};

export const LoadingIcon = () => {
  return <Image src={`${ICON_PATH}/loading.svg`} width={50} height={50} alt='로딩 중' />;
};

export const NoticeIcon = () => {
  return <Image src={`${ICON_PATH}/notice.svg`} width={50} height={50} alt='알림' />;
};

export const TopIcon = () => {
  return <Image src={`${ICON_PATH}/top.svg`} width={50} height={50} alt='맨 위로' />;
};

export const MagnifyingGlassIcon = () => {
  return (
    <Image src={`${ICON_PATH}/magnifyingGlass.svg`} width={12} height={13} alt='소비사 캐릭터' />
  );
};

export const ArrowIcon = () => {
  return <Image src={`${ICON_PATH}/arrow.svg`} width={8} height={8} alt='메뉴' />;
};

export const DownloadIcon = () => {
  return <Image src={`${ICON_PATH}/download.svg`} width={12} height={13} alt='다운로드' />;
};
