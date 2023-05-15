import Image from 'next/image';

const INDICATOR_PATH = '/assets/indicator';

export const Indicator01 = () => {
  return (
    <Image src={`${INDICATOR_PATH}/indicator01.svg`} width={43} height={4} alt='인디케이터 1' />
  );
};

export const Indicator02 = () => {
  return (
    <Image src={`${INDICATOR_PATH}/indicator02.svg`} width={43} height={4} alt='인디케이터 2' />
  );
};

export const Indicator03 = () => {
  return (
    <Image src={`${INDICATOR_PATH}/indicator03.svg`} width={43} height={4} alt='인디케이터 3' />
  );
};

export const Indicator04 = () => {
  return (
    <Image src={`${INDICATOR_PATH}/indicator04.svg`} width={43} height={4} alt='인디케이터 4' />
  );
};
