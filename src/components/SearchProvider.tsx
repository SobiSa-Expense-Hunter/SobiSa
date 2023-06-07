import { Dispatch, ReactNode, createContext, useContext, useEffect, useReducer } from 'react';

import { UserSelected } from '@/types/product';
import { Action } from '@/types/search';
import isUserSelectedType from '@/utils/typeChecks';

const STORAGE_KEY = 'UserSet';
const SearchStateContext = createContext<UserSelected | null>(null);
const SearchDispatchContext = createContext<Dispatch<Action> | null>(null);

const reducer = (state: UserSelected, action: Action) => {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      const productUpdated = { ...state, product: action.item, savingAmount: 0 };
      return setDefaultState(productUpdated);
    }
    case 'ADD_SAVINGAMOUNT': {
      const amountUpdated = { ...state, savingAmount: action.item };
      return setDefaultState(amountUpdated);
    }
    case 'SET_DEFAULT': {
      return action.item;
    }
    default:
      throw new Error('Unhandled Action');
  }
};

const initState = { product: {}, savingAmount: 0 };
const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [store, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    dispatch({ item: getDefaultState() ?? initState, type: 'SET_DEFAULT' });
  }, []);

  return (
    <SearchStateContext.Provider value={store}>
      <SearchDispatchContext.Provider value={dispatch}>{children}</SearchDispatchContext.Provider>
    </SearchStateContext.Provider>
  );
};

const getDefaultState = (): UserSelected => {
  const item = sessionStorage.getItem(STORAGE_KEY);
  return item && isUserSelectedType(JSON.parse(item)) ? JSON.parse(item) : null;
};

const setDefaultState = (currentState: UserSelected) => {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(currentState));
  return currentState;
};

export const useSearchStore = () => {
  const state = useContext(SearchStateContext);
  if (!state) throw new Error('cannot found store');
  return state;
};

export const useSearchDispatch = () => {
  const dispatch = useContext(SearchDispatchContext);
  if (!dispatch) throw new Error('cannot found dispatch');
  return dispatch;
};

export default SearchProvider;
