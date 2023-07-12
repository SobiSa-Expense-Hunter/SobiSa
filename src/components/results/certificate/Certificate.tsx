import { ForwardedRef, forwardRef } from 'react';

import { useSearchStore } from '@/components/SearchProvider';
import * as Layout from '@/components/common/layout';

import * as Style from './style';

type CertificateProps = unknown;

const Certificate = (_: CertificateProps, ref: ForwardedRef<HTMLDivElement>) => {
  const {
    product: { title, price = 0 },
  } = useSearchStore();

  return (
    <Style.CertificateContainer ref={ref}>
      <Layout.VStack gap='16px' justifyContent='center' alignItems='center'>
        <Style.CertificateMediumLargeText>
          무려{' '}
          <Style.CertificateExtraLargeText>
            {price.toLocaleString()}원
          </Style.CertificateExtraLargeText>{' '}
          하는
        </Style.CertificateMediumLargeText>
        <Style.CertificateMediumLargeText>
          <Style.CertificateExtraLargeText>{title}</Style.CertificateExtraLargeText> 를 안 사기로
          결심한
        </Style.CertificateMediumLargeText>
        <Style.CertificateMediumLargeText>
          당신에게 이 임명장을 바칩니다.
        </Style.CertificateMediumLargeText>
      </Layout.VStack>
    </Style.CertificateContainer>
  );
};

export default forwardRef(Certificate);
