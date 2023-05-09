import styled from 'styled-components';

const DefalutFont = styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  line-height: 150%;
  letter-spacing: -0.022em;
  color: ${({ theme }) => theme.colors.gray[4]};
`;

export const Small = styled(DefalutFont)`
  font-weight: 500;
  font-size: 12px;
`;

export const SmallOrange = styled(Small)`
  color: ${({ theme }) => theme.colors.mainColor};
`;

export const Medium = styled(DefalutFont)`
  font-weight: 600;
  font-size: 14px;
`;

export const MediumOrange = styled(Medium)`
  color: ${({ theme }) => theme.colors.mainColor};
`;

export const Large = styled(DefalutFont)`
  font-weight: 600;
  font-size: 16px;
`;
