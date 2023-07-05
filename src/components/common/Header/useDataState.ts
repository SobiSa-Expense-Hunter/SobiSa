import { useReducer } from 'react';

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
};

type Action = 'IS_LOADING' | 'IS_SUCCESS' | 'IS_ERROR';
type DataState = typeof initialState;

const searchHistoryReducer = (state: DataState, action: Action): DataState => {
  switch (action) {
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

const useDataState = () => useReducer(searchHistoryReducer, initialState);

export default useDataState;
