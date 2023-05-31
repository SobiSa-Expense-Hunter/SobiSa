export const SearchAction = Object.freeze({
  ADD_PRODUCT: 'ADD_PRODUCT',
  ADD_SAVINGAMOUNT: 'ADD_SAVINGAMOUNT',
});

export const sharedMessage: ShareData = {
  title: '소비사',
  text: '소비 사냥꾼',
  url: 'https://sobisa.vercel.app/',
};

export const InputRegExp = Object.freeze({
  emptyString: /^$/,
  numberAndComma: /^[\d,]+$/,
});

export const PATHS_ORDER = ['/', '/list', '/keyword', '/savingamount', '/result'];
