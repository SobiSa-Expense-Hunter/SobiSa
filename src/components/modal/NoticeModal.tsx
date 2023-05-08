import { useEffect, useRef, useState } from 'react';

import styled, { keyframes } from 'styled-components';

import Portal from '../Portal';
import { NoticeIcon } from '@/assets/icons';
import { ModalLongButton } from '@/components/common/buttons';

interface SearchErrorModalProps {
  onClose: () => void;
  message: string;
}

const NoticeModal = ({ onClose, message }: SearchErrorModalProps) => {
  const [show, setShow] = useState(true);
  const animationTimer = useRef<NodeJS.Timer>();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
      clearTimeout(animationTimer.current);
    };
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
          <NoticeIcon />
          <Message>{message}</Message>
          <ButtonBox>
            <ModalLongButton onClick={animationAfterClose}>네!</ModalLongButton>
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
  max-width: 244px;
  text-overflow: ellipsis;
  margin-top: 25px;
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
  padding: 30px 23px 20px 23px;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 16px;
  animation: 0.3s ${props => (props.show ? FadeIn : FadeOut)};
`;
const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
`;
const ButtonBox = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: row;
  gap: 8px;
`;
const Background = styled.div<{ show: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  animation: 0.3s ${props => (props.show ? FadeIn : FadeOut)};
`;
export default NoticeModal;
