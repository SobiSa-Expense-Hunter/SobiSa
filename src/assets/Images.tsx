import Image from 'next/image';

const IMG_PATH = '/assets';

export const MainImage = () => {
  return <Image src={`${IMG_PATH}/image.svg`} width={220} height={220} alt='소비사 캐릭터' />;
};
export const LineImage = () => {
  return <Image src={`${IMG_PATH}/image_line.svg`} width={220} height={220} alt='소비사 캐릭터' />;
};

export const ItemImage = () => {
  return <Image src={`${IMG_PATH}/image_item.svg`} width={110} height={110} alt='소비사 캐릭터' />;
};
