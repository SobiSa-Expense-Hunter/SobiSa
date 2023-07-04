import { AlternativeContextSelector } from '@/components/results/alternatives/useAlternatives';
import * as Style from '@/components/results/style';
import AlternativeBigCard from '@/components/results/ui/AlternativeBigCard';
import AlternativeSmallCard from '@/components/results/ui/AlternativeSmallCard';

interface AlternativeCardListProps {
  alternatives: AlternativeContextSelector;
  productPrice: number;
  savingAmount: number;
}

const AlternativeCardList = ({
  alternatives,
  productPrice,
  savingAmount,
}: AlternativeCardListProps) => {
  return (
    <Style.AlternativeCardList>
      {alternatives.necessary?.map(alternative => (
        <Style.AlternativeWrapper key={alternative.title}>
          <AlternativeSmallCard alternative={alternative} productPrice={productPrice} />
        </Style.AlternativeWrapper>
      ))}
      {alternatives.funny?.map(alternative => (
        <Style.AlternativeWrapper key={alternative.title}>
          <AlternativeSmallCard alternative={alternative} productPrice={productPrice} />
        </Style.AlternativeWrapper>
      ))}
      {alternatives.stable?.map(alternative => (
        <Style.AlternativeWrapper key={alternative.title}>
          <AlternativeBigCard alternative={alternative} savingAmount={savingAmount} />
        </Style.AlternativeWrapper>
      ))}
    </Style.AlternativeCardList>
  );
};

export default AlternativeCardList;
