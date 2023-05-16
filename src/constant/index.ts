import { Alternatives } from '@/types/result';

const SearchAction = Object.freeze({
  ADD_PRODUCT: 'ADD_PRODUCT',
  ADD_SAVINGAMOUNT: 'ADD_SAVINGAMOUNT',
});
export default SearchAction;

export const alternatives: Alternatives[] = [
  {
    title: '쿠키',
    price: 200,
    image: '🍪',
    unit: '개',
  },
  {
    title: '인형뽑기',
    price: 1000,
    image: '🧸',
    unit: '번',
  },
  {
    title: '코노 3곡',
    price: 1000,
    image: '🎤',
    unit: '번',
  },
  {
    title: '밥',
    price: 1000,
    image: '🍚',
    unit: '공기',
  },
  {
    title: '버스',
    price: 1200,
    image: '🚌',
    unit: '번',
  },
  {
    title: '챠오츄르',
    price: 1600,
    image: '🐱',
    unit: '개',
  },
  {
    title: '소주',
    price: 1800,
    image: '🍾',
    unit: '병',
  },
  {
    title: '카카오 이모티콘',
    price: 2000,
    image: '📱',
    unit: '개',
  },
  {
    title: '카네이션',
    price: 2600,
    image: '🌺',
    unit: '송이',
  },
  {
    title: '커피',
    price: 5000,
    image: '☕️',
    unit: '잔',
  },
  {
    title: '국밥',
    price: 9000,
    image: '🍲',
    unit: '개',
  },
  {
    title: '*외식',
    price: 14000,
    image: '🍽',
    unit: '번',
  },
  {
    title: '(춘식이)인형',
    price: 20000,
    image: '🧸',
    unit: '개',
  },
  {
    title: '따릉이 연간권',
    price: 30000,
    image: '🚲',
    unit: '개',
  },
  {
    title: '홀 케이크',
    price: 30000,
    image: '🎂',
    unit: '개',
  },
  {
    title: '강아지병원비',
    price: 130000,
    image: '🐕',
    unit: '번',
  },
  {
    title: '**최애 아이돌과의 만남',
    price: 540000,
    image: '🧑🏻‍🎤',
    unit: '번',
  },
];

export const sharedMessage: ShareData = {
  title: '소비사',
  text: '소비 사냥꾼',
  url: '',
};

export const InputRegExp = Object.freeze({
  emptyString: /^$/,
  numberAndComma: /^[\d,]+$/,
});
