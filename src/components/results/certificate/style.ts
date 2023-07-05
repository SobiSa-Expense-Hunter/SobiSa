import styled from 'styled-components';

import { CertificateExtraLarge, CertificateMediumLarge } from '@/styles/font';

export const CertificateContainer = styled.div`
  position: relative;
  width: 350px;
  min-height: 335px;
  padding: 30px 20px 40px 20px;
  background: center center url('./assets/image/certificate.png') #ffffff;
  background-size: cover;
  background-blend-mode: multiply, normal;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  & > div:not(div:last-of-type) {
    border-bottom: 1px solid ${props => props.theme.colors.gray[4]};
  }
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const CertificateMediumLargeText = styled(CertificateMediumLarge)`
  background-color: #f3b1b2;
  border-radius: 16px;
`;
export const CertificateExtraLargeText = styled(CertificateExtraLarge)``;
