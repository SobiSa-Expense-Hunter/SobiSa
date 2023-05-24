const SearchAction = Object.freeze({
  ADD_PRODUCT: 'ADD_PRODUCT',
  ADD_SAVINGAMOUNT: 'ADD_SAVINGAMOUNT',
});
export default SearchAction;

export const sharedMessage: ShareData = {
  title: '소비사',
  text: '소비 사냥꾼',
  url: 'https://sobisa.vercel.app/',
};

export const InputRegExp = Object.freeze({
  emptyString: /^$/,
  numberAndComma: /^[\d,]+$/,
});
