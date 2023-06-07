/* eslint-disable react/require-default-props */
import Image from 'next/image';

const IMG_PATH = '/assets';

interface ImageSizeProps {
  width?: number;
  height?: number;
}

export const MainImage = ({ width = 220, height = 220 }: ImageSizeProps) => {
  return (
    <Image
      src={`${IMG_PATH}/image/main.png`}
      width={width}
      height={height}
      alt='소비사 main img'
      quality={100}
      loading='lazy'
    />
  );
};

export const LineImage = () => {
  return <Image src={`${IMG_PATH}/image_line.svg`} width={220} height={220} alt='소비사 캐릭터' />;
};

export const ItemImage = () => {
  return <Image src={`${IMG_PATH}/image_item.svg`} width={110} height={110} alt='소비사 캐릭터' />;
};
