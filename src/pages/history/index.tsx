import { useEffect, useState } from 'react';

import { useSearchDispatch } from '@/components/SearchProvider';
import CustomError from '@/components/common/error';
import History from '@/components/history';
import { UserSearchHistory, isUserSearchHistory } from '@/types/product';

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

  return history && isUserSearchHistory(history) ? (
    <History history={history} />
  ) : (
    <CustomError
      mainTitle='이전 검색 내역을 불러올 수 없습니다'
      subTextLines={['잠시 후 다시 확인해주세요.']}
      buttonText='이전으로'
    />
  );
}

export default HistoryPage;
