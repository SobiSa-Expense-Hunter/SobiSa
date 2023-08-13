import * as Style from '@/components/results/alternatives/style';
import * as Font from '@/styles/font';

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
  const alternativeCounts = Math.floor(productPrice / alternative.price);
  if (alternativeCounts <= 0) return null;
  const alternativeCountsLoop = Array.from(
    { length: Math.min(alternativeCounts, 100) },
    (_, i) => i + 1,
  );
  return (
    <>
      <Style.AlternativeTextWrapper>
        <Style.AlternativeInfo>
          {alternative.title} {`(${Number(alternative.price).toLocaleString()}원)`}
        </Style.AlternativeInfo>
        <Font.ExtraLarge style={{ textAlign: 'right', fontSize: '17pt' }}>
          {alternativeCounts.toLocaleString()}&nbsp;
          {alternative.unit}
        </Font.ExtraLarge>
      </Style.AlternativeTextWrapper>
      <Style.AlternativeIconsWrapper>
        {alternativeCounts > 8 ? (
          <Style.AlternativeIcons
            variants={slideVariants}
            initial='visible'
            animate='hidden'
            transition={{
              ease: 'linear',
              duration: alternativeCountsLoop.length / 2,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            {alternativeCountsLoop.map(v => (
              <Style.AlternativeIcon
                url={alternative.image || ''}
                key={`${alternative.title}_${v}`}
              />
            ))}
          </Style.AlternativeIcons>
        ) : (
          <Style.AlternativeIcons>
            {alternativeCountsLoop.map(v => (
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
