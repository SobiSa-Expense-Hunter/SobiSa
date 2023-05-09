import styled from 'styled-components';

import Portal from '../Portal';
import {
  Background,
  ButtonBox,
  ContentBox,
  Message,
  ModalBox,
  ModalContainer,
} from '../common/Modal';
import { ModalButton, ModalSubButton } from '../common/buttons';
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
          <ContentBox height='169px'>
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
  width: 100%;
  height: 100%;
  max-width: 111px;
  max-height: 111px;
  position: relative;
`;

const ProductImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const ChoseModalContainer = styled(ModalContainer)`
  max-height: 273px;
`;
