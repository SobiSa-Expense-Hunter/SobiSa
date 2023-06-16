import { useReducer } from 'react';

export const initialState = {
  show: false,
  message: '',
};

type ModalState = typeof initialState;

const modalReducer = (
  state: ModalState,
  action: {
    type: 'SHOW' | 'HIDE';
    payload?: string;
  },
): ModalState => {
  switch (action.type) {
    case 'SHOW':
      return {
        ...state,
        show: true,
        message: action.payload || '',
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

const useModal = () => {
  const [modalState, dispatchModalState] = useReducer(modalReducer, initialState);
  return { modalState, dispatchModalState };
};

export default useModal;
