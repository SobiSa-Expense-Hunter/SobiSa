import { useReducer } from 'react';

/**
 * @info NoticeModal의 상태를 관리하는 hook
 */
export default function useNoticeModal() {
  const [modalState, dispatchModalState] = useReducer(modalReducer, initialState);
  return { modalState, dispatchModalState };
}

export const initialState = {
  show: false,
  message: '',
};

type ModalState = typeof initialState;

const modalReducer = (
  state: ModalState,
  action: {
    type: 'SHOW' | 'HIDE';
    message?: string;
  },
): ModalState => {
  switch (action.type) {
    case 'SHOW':
      return {
        ...state,
        show: true,
        message: action.message || '',
      };
    case 'HIDE':
      return {
        ...state,
        show: false,
        message: '',
      };
    default:
      return state;
  }
};
