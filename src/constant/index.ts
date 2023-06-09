export const SearchAction = Object.freeze({
  ADD_PRODUCT: 'ADD_PRODUCT',
  ADD_SAVINGAMOUNT: 'ADD_SAVINGAMOUNT',
});

export const sharedMessage: ShareData = {
  title: '소비사!: 소비사냥꾼',
  text: '그 물건을 사는 대신 뭘 할 수 있을까요?',
  url: 'https://sobisa.vercel.app/',
};

export const InputRegExp = Object.freeze({
  emptyString: /^$/,
  numberAndComma: /^[\d,]+$/,
});

export const PATHS_ORDER = ['/', '/list', '/keyword', '/savingamount', '/result'];
