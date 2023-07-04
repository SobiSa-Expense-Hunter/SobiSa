import styled from 'styled-components';

import { ModalContainer } from '@/components/common/Modal';
import { ShareButton } from '@/components/common/buttons';

export const Container = styled(ModalContainer)`
  background-color: transparent;
  width: 100%;
  max-width: 100%;
  max-height: 100%;

  padding: 0;
  padding-top: 10vh;
  padding-bottom: 10vh;

  justify-content: flex-start;
  overflow: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    width: 4px;
    border-radius: 2px;
    background-clip: padding-box;
    border: 10px solid transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray[2]};
  }
`;

export const ResultShareWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vh;
`;

export const ModalButton = styled(ShareButton)`
  margin-top: -12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const ModalGrayButton = styled(ModalButton)`
  color: ${props => props.theme.colors.gray[4]};
  background: ${props => props.theme.colors.gray[1]};
`;

export const ShareButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));
`;
