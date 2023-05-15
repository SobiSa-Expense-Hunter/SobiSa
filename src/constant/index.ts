import { Alternatives } from '@/types/result';

const SearchAction = Object.freeze({
  ADD_PRODUCT: 'ADD_PRODUCT',
  ADD_SAVINGAMOUNT: 'ADD_SAVINGAMOUNT',
});
export default SearchAction;

export const alternatives: Alternatives[] = [
  {
    title: '커피',
    price: 5000,
    image: '☕️',
    unit: '잔',
  },
  {
    title: '버스',
    price: 1200,
    image: '🚌',
    unit: '번',
  },
];

export const sharedMessage: ShareData = {
  title: '소비사',
  text: '소비 사냥꾼',
  url: 'http://localhost:3001',
};

export const InputRegExp = Object.freeze({
  emptyString: /^$/,
  numberAndComma: /^[\d,]+$/,
});
