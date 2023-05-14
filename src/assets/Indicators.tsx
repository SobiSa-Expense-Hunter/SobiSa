import Image from 'next/image';

const INDICATOR_PATH = '/assets/Indicator';

export const Indicator01 = () => {
  return (
    <Image src={`${INDICATOR_PATH}/Indicator01.svg`} width={43} height={4} alt='소비사 캐릭터' />
  );
};

export const Indicator02 = () => {
  return (
    <Image src={`${INDICATOR_PATH}/Indicator02.svg`} width={43} height={4} alt='소비사 캐릭터' />
  );
};

export const Indicator03 = () => {
  return (
    <Image src={`${INDICATOR_PATH}/Indicator03.svg`} width={43} height={4} alt='소비사 캐릭터' />
  );
};

export const Indicator04 = () => {
  return (
    <Image src={`${INDICATOR_PATH}/Indicator04.svg`} width={43} height={4} alt='소비사 캐릭터' />
  );
};
