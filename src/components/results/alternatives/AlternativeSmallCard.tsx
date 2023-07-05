import * as Style from '@/components/results/alternatives/style';
import { ExtraLarge } from '@/styles/font';

interface AlternativeSmallCardProps {
  alternative: {
    title: string;
    image?: string;
    price: number;
    unit: string;
  };
  productPrice: number;
}

const slideVariants = {
  visible: {
    x: 0,
  },
  hidden: {
    translateX: '-100%',
  },
};

const AlternativeSmallCard = ({ alternative, productPrice }: AlternativeSmallCardProps) => {
  const amounts = Math.floor(productPrice / alternative.price);
  if (amounts <= 0) return null;
  const amountsLoop = Array.from({ length: Math.min(amounts, 100) }, (_, i) => i + 1);
  return (
    <>
      <Style.AlternativeTextWrapper>
        <Style.AlternativeInfo>
          {alternative.title} {`(${Number(alternative.price).toLocaleString()}원)`}
        </Style.AlternativeInfo>
        <ExtraLarge style={{ textAlign: 'right', fontSize: '17pt' }}>
          {amounts.toLocaleString()}&nbsp;
          {alternative.unit}
        </ExtraLarge>
      </Style.AlternativeTextWrapper>
      <Style.AlternativeIconsWrapper>
        {amounts > 8 ? (
          <Style.AlternativeIcons
            variants={slideVariants}
            initial='visible'
            animate='hidden'
            transition={{
              ease: 'linear',
              duration: amountsLoop.length / 2,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            {amountsLoop.map(v => (
              <Style.AlternativeIcon
                url={alternative.image || ''}
                key={`${alternative.title}_${v}`}
              />
            ))}
          </Style.AlternativeIcons>
        ) : (
          <Style.AlternativeIcons>
            {amountsLoop.map(v => (
              <Style.AlternativeIcon
                url={alternative.image || ''}
                key={`${alternative.title}_${v}`}
              />
            ))}
          </Style.AlternativeIcons>
        )}
      </Style.AlternativeIconsWrapper>
    </>
  );
};

export default AlternativeSmallCard;
