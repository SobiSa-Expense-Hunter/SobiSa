import AlternativeBigCard from '@/components/results/alternatives/AlternativeBigCard';
import AlternativeSmallCard from '@/components/results/alternatives/AlternativeSmallCard';
import * as Style from '@/components/results/alternatives/style';
import { AlternativeContextSelector } from '@/components/results/alternatives/useAlternatives';

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
