import styled, { keyframes } from 'styled-components';

import { Medium } from '@/styles/font';

const FadeIn = keyframes`
0%{
    opacity:0;
}
100%{
    opacity:1;
}`;
const FadeOut = keyframes`
0%{
    opacity:1;
}
100%{
    opacity:0;
}`;

export const Background = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.3);
  animation: 0.2s ${props => (props.show ? FadeIn : FadeOut)};
`;

export const ModalContainer = styled.div<{ show: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 310px;
  min-height: 173px;
  padding: 30px 23px 20px 23px;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 16px;
  z-index: 9999;
  animation: 0.2s ${props => (props.show ? FadeIn : FadeOut)};
`;
export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 16px;
`;

export const ButtonBox = styled.div`
  display: flex;
  height: auto;
  flex-direction: row;
  gap: 8px;
`;

export const Message = styled(Medium)<{ color?: string }>`
  text-align: center;
  word-wrap: break-word;
  word-break: keep-all;
  color: ${props => (props.color ? props.color : 'black')};
`;

export const ContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;
