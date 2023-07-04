import * as Style from '@/components/results/style';
import { ExtraLarge } from '@/styles/font';
import getSavingsPeriod from '@/utils/alternatives';

interface AlternativeCardUIProps {
  alternative: {
    title: string;
    image?: string;
    price: number;
    unit: string;
  };
  savingAmount: number;
}

const AlternativeBigCard = ({ alternative, savingAmount }: AlternativeCardUIProps) => {
  const savingsPeriod = getSavingsPeriod(alternative.price, savingAmount);

  return (
    <Style.AlternativeBigCard>
      <Style.AlternativeBigIcon url={alternative.image || ''} />
      <Style.AlternativeTextWrapper style={{ alignItems: 'center' }}>
        <Style.AlternativeInfo>
          <ExtraLarge>{savingAmount.toLocaleString()}원</ExtraLarge> 씩 저축하면
        </Style.AlternativeInfo>
        <Style.AlternativeInfo>{alternative.title}까지</Style.AlternativeInfo>
        <Style.AlternativeInfo>
          <ExtraLarge>{savingsPeriod.toLocaleString()}개월</ExtraLarge> 걸립니다!
        </Style.AlternativeInfo>
      </Style.AlternativeTextWrapper>
    </Style.AlternativeBigCard>
  );
};

export default AlternativeBigCard;
