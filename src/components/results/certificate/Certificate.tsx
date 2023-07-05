import { ForwardedRef, forwardRef } from 'react';

import { useSearchStore } from '@/components/SearchProvider';

import * as Style from './style';

type CertificateProps = unknown;

const Certificate = (_: CertificateProps, ref: ForwardedRef<HTMLDivElement>) => {
  const {
    product: { title, price = 0 },
  } = useSearchStore();

  return (
    <Style.CertificateContainer>
      <Style.ColumnFlex>
        <Style.CertificateMediumLarge>
          무려 <Style.CertificateExtraLarge>{price.toLocaleString()}원</Style.CertificateExtraLarge>{' '}
          하는
        </Style.CertificateMediumLarge>
        <Style.CertificateMediumLarge>
          <Style.CertificateExtraLarge>{title}</Style.CertificateExtraLarge> 를 사기로 결심한
        </Style.CertificateMediumLarge>
        <Style.CertificateMediumLarge>당신에게 이 임명장을 바칩니다.</Style.CertificateMediumLarge>
      </Style.ColumnFlex>
    </Style.CertificateContainer>
  );
};

export default forwardRef(Certificate);
