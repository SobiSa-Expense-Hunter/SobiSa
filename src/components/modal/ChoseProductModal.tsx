import styled from 'styled-components';

import Portal from '@/components/Portal';
import {
  Background,
  ButtonBox,
  ContentBox,
  Message,
  ModalBox,
  ModalContainer,
} from '@/components/common/Modal';
import { ModalButton, ModalSubButton } from '@/components/common/buttons';
import useModalAnimation from '@/hooks/useModalAnimation';
import theme from '@/styles/theme';

interface ChoseProductModalProps {
  onClose: () => void;
  onSubmit: () => void;
  title: string;
  image: string;
}

const ChoseProductModal = ({ onClose, onSubmit, title, image }: ChoseProductModalProps) => {
  const { show, animationAfterClose } = useModalAnimation(onClose);

  return (
    <Portal>
      <Background show={show} />
      <ChoseModalContainer show={show}>
        <ModalBox>
          <ContentBox>
            <Message>{title}</Message>
            <ImageBox>
              <ProductImage src={image} alt='제품사진' />
            </ImageBox>
            <Message color={theme.colors.mainColor}>선택하신 상품이 맞나요?</Message>
          </ContentBox>
          <ButtonBox>
            <ModalSubButton onClick={animationAfterClose}>아뇨?</ModalSubButton>
            <ModalButton onClick={onSubmit}>네!</ModalButton>
          </ButtonBox>
        </ModalBox>
      </ChoseModalContainer>
    </Portal>
  );
};

export default ChoseProductModal;

const ImageBox = styled.div`
  position: relative;
`;

const ProductImage = styled.img`
  width: 111px;
  height: 111px;
`;

const ChoseModalContainer = styled(ModalContainer)`
  min-height: 273px;
`;
