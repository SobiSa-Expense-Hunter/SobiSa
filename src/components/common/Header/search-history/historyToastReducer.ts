/**
 * @description: 이전 검색 내역 토스트의 상태를 관리하는 리듀서
 */
export const historyToastReducer = (
  state: typeof initHistoryToastState,
  action: {
    type: 'DeleteOne' | 'DeleteAll' | 'NothingToDelete' | 'Hide';
    productName?: string;
  },
): typeof initHistoryToastState => {
  switch (action.type) {
    case 'DeleteOne':
      return {
        isShow: true,
        msg: `${action?.productName} 이(가) 삭제 되었어요.`,
      };
    case 'DeleteAll':
      return {
        isShow: true,
        msg: `이전 검색 내역이 전체 삭제 되었어요.`,
      };
    case 'NothingToDelete':
      return {
        isShow: true,
        msg: `삭제할 항목이 없어요.`,
      };
    default:
      return { isShow: false, msg: '' };
  }
};

/**
 * @description: 이전 검색 내역 토스트의 초기 상태
 */
export const initHistoryToastState = {
  isShow: false,
  msg: '',
};
