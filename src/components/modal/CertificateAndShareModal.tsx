import styled from 'styled-components';

import Portal from '@/components/Portal';
import { Background, ModalContainer } from '@/components/common/Modal';
import { ShareButton } from '@/components/common/buttons';
import Certificate from '@/components/results/Certificate';
import ShareButtons from '@/components/results/ShareButtons';
import useModalAnimation from '@/hooks/useModalAnimation';
import { Alternatives } from '@/types/result';

interface CertificateAndShareModalProps {
  onClose: () => void;
  alternatives: Alternatives[];
}

const CertificateAndShareContainer = styled(ModalContainer)`
  background-color: transparent;
  max-width: fit-content;
  max-height: fit-content;
  gap: 32px;
`;

const CertificateAndShareModal = ({ onClose, alternatives }: CertificateAndShareModalProps) => {
  const { show, animationAfterClose } = useModalAnimation(onClose);

  return (
    <Portal>
      <Background show={show} />
      <CertificateAndShareContainer show={show}>
        <Certificate alternatives={alternatives} />
        <ShareButtons />
        <ShareButton
          onClick={animationAfterClose}
          style={{ marginTop: -12, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
        >
          다음에 할게요!
        </ShareButton>
      </CertificateAndShareContainer>
    </Portal>
  );
};
export default CertificateAndShareModal;
