import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledListContainer = styled.div<{ select?: boolean }>`
  cursor: pointer;
  &:hover {
    background: #fff5e6;
  }
  display: flex;
  align-items: center;
  padding: 20px 0px;
  gap: 16px;
  margin: 0;

  width: 310px;
  height: 151px;

  border-width: 1px 0px 0px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.mainColor};
`;
