import styled, { keyframes } from 'styled-components';

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
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.3);
  animation: 0.3s ${props => (props.show ? FadeIn : FadeOut)};
`;

export const ModalContainer = styled.div<{ show: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 310px;
  max-height: 173px;
  height: 100%;
  width: 100%;
  padding: 30px 23px 20px 23px;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 16px;
  z-index: 9999;
  animation: 0.3s ${props => (props.show ? FadeIn : FadeOut)};
`;
export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const ButtonBox = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: row;
  gap: 8px;
`;

export const Message = styled.p<{ color?: string }>`
  text-align: center;
  width: 100%;
  max-width: 244px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: ${props => (props.color ? props.color : 'black')};
`;

export const ContentBox = styled.div<{ height: string }>`
  height: ${props => props.height};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
