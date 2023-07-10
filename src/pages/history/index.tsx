import { useEffect, useState } from 'react';

import { useSearchDispatch } from '@/components/SearchProvider';
import History from '@/components/history';
import { UserSearchHistory } from '@/types/product';

function HistoryPage() {
  const [history, setHistory] = useState<UserSearchHistory | null>();
  const dispatch = useSearchDispatch();

  useEffect(() => {
    const { state } = window.history;
    setHistory(state);
    // useSearchStore를 이용해 하단의 컴포넌트들이 데이터를 가져오는 부분이 있어 이를 처리
    dispatch({
      type: 'SET_DEFAULT',
      item: { product: state.product, savingAmount: state.savingAmount },
    });
  }, [dispatch]);

  return history ? <History history={history} /> : null;
}

export default HistoryPage;
