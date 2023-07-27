import Result from '@/components/results';
import useAlternatives, {
  AlternativeContextSelector,
} from '@/components/results/alternatives/useAlternatives';
import { UserSearchHistory } from '@/types/product';
import { isAlternativesCategoryKey } from '@/types/result';

const History = ({ history }: { history: UserSearchHistory }) => {
  const { product, savingAmount, alternativeTitles } = history;
  const userSelected = { product, savingAmount };
  const { alternatives } = useAlternatives(userSelected, false);

  const filteredByTitles = {
    ...alternatives,
    data: filterByTitles(alternativeTitles, alternatives.data),
  };

  return <Result alternatives={filteredByTitles} userSelected={userSelected} />;
};

export default History;

const filterByTitles = (alternativeTitles: string[], alternatives: AlternativeContextSelector) => {
  const initData: AlternativeContextSelector = {};
  return Object.keys(alternatives).reduce((prev, curr) => {
    if (isAlternativesCategoryKey(curr)) {
      return {
        ...prev,
        [curr]: alternatives[curr]?.filter(item => alternativeTitles.includes(item.title)),
      };
    }
    return { ...prev };
  }, initData);
};
