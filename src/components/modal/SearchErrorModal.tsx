import { useEffect, useRef, useState } from 'react';

import styled, { keyframes } from 'styled-components';

import Portal from '../Portal';

interface SearchErrorModalProps {
  onClose: () => void;
}

const SearchErrorModal = ({ onClose }: SearchErrorModalProps) => {
  const [show, setShow] = useState(true);
  const animationTimer = useRef<NodeJS.Timer>();

  useEffect(() => {
    return () => clearTimeout(animationTimer.current);
  }, []);

  const animationAfterClose = () => {
    setShow(false);
    animationTimer.current = setTimeout(() => {
      onClose();
    }, 200);
  };

  return (
    <Portal>
      <Background show={show} />
      <ModalContainer show={show}>
        <ModalBox>
          <Message>검색어를 입력해주세요!</Message>
          <ButtonBox>
            <ResponseButton onClick={animationAfterClose}>넵</ResponseButton>
            <ResponseButton onClick={animationAfterClose}>알겠어요.</ResponseButton>
          </ButtonBox>
        </ModalBox>
      </ModalContainer>
    </Portal>
  );
};

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
const Message = styled.p`
  color: #ff9d02;
`;
const ModalContainer = styled.div<{ show: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 310px;
  max-height: 200px;
  height: 100%;
  width: 100%;
  padding: 30px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 16px;
  animation: 0.3s ${props => (props.show ? FadeIn : FadeOut)};
`;
const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction:row
  align-items:flex-start;
//   justify-content: space-between;
    gap:8px;
`;
const ResponseButton = styled.button`
  color: white;
  padding: 10px;
  width: 100%;
  height: 38px;
  background-color: #ff9d02;
  border-radius: 8px;
  outline: none;
  border: none;
  cursor: pointer;
`;
const Background = styled.div<{ show: boolean }>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  animation: 0.3s ${props => (props.show ? FadeIn : FadeOut)};
`;
export default SearchErrorModal;
