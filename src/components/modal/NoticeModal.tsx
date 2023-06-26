import { NoticeIcon } from '@/assets/Icons';
import Portal from '@/components/Portal';
import {
  Background,
  ButtonBox,
  ContentBox,
  Message,
  ModalBox,
  ModalContainer,
} from '@/components/common/Modal';
import { ModalLongButton } from '@/components/common/buttons';
import useModalAnimation from '@/hooks/useModalAnimation';

interface SearchErrorModalProps {
  onClose: () => void;
  message: string;
}

const NoticeModal = ({ onClose, message }: SearchErrorModalProps) => {
  const { show, animationAfterClose } = useModalAnimation(onClose);

  return (
    <Portal>
      <Background show={show} onClick={animationAfterClose} />
      <ModalContainer show={show}>
        <ModalBox>
          <ContentBox>
            <NoticeIcon />
            <Message>{message}</Message>
          </ContentBox>
          <ButtonBox>
            <ModalLongButton onClick={animationAfterClose}>네!</ModalLongButton>
          </ButtonBox>
        </ModalBox>
      </ModalContainer>
    </Portal>
  );
};
export default NoticeModal;
