import { Dispatch, ReactNode, createContext, useContext, useReducer } from 'react';

import { UserSelected } from '@/types/product';
import { Action } from '@/types/search';

const SearchStateContext = createContext<UserSelected | null>(null);
const SearchDispatchContext = createContext<Dispatch<Action> | null>(null);

const reducer = (state: UserSelected, action: Action) => {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      const productUpdated = { ...state, product: action.item, savingAmount: 0 };
      return productUpdated;
    }
    case 'ADD_SAVINGAMOUNT': {
      const amoutUpdated = { ...state, savingAmount: action.item };
      return amoutUpdated;
    }
    default:
      throw new Error('Unhandled Action');
  }
};
const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [store, dispatch] = useReducer(reducer, { product: {}, savingAmount: 0 });

  return (
    <SearchStateContext.Provider value={store}>
      <SearchDispatchContext.Provider value={dispatch}>{children}</SearchDispatchContext.Provider>
    </SearchStateContext.Provider>
  );
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
