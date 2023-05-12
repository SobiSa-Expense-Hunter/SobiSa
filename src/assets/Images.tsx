import Image from 'next/image';

export const MainImage = () => {
  return <Image src='/assets/image.svg' width={220} height={220} alt='소비사 캐릭터' />;
};
export const LineImage = () => {
  return <Image src='/assets/image_line.svg' width={220} height={220} alt='소비사 캐릭터' />;
};

export const ItemImage = () => {
  return <Image src='/assets/image_item.svg' width={110} height={110} alt='소비사 캐릭터' />;
};
