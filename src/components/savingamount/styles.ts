import styled from 'styled-components';

import { DefaultInput } from '@/components/common/input';

export const Span = styled.span`
  ${DefaultInput}
  display: flex;
  align-items: center;
  min-height: 50px;
`;

export const Input = styled.input`
  ${DefaultInput}

  height: 50px;
`;