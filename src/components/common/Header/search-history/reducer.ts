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

export const initHistoryToastState = {
  isShow: false,
  msg: '',
};

/**
 * @description: 데이터 패칭 상태를 관리하는 리듀서
 */

export const dataStateReducer = (
  state: typeof initDataState,
  action: {
    type: 'IS_LOADING' | 'IS_SUCCESS' | 'IS_ERROR';
  },
): typeof initDataState => {
  switch (action.type) {
    case 'IS_SUCCESS': {
      return { isSuccess: true, isLoading: false, isError: false };
    }
    case 'IS_LOADING': {
      return { isSuccess: false, isLoading: true, isError: false };
    }
    case 'IS_ERROR': {
      return { isSuccess: false, isLoading: false, isError: true };
    }
    default:
      throw new Error('Unhandled Action');
  }
};

export const initDataState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
};
