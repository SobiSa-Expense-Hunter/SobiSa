import { useCallback, useRef } from 'react';

import { toPng } from 'html-to-image';
import styled from 'styled-components';

import Portal from '@/components/Portal';
import { Background, ModalContainer } from '@/components/common/Modal';
import { BottomButton, ShareButton } from '@/components/common/buttons';
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
  padding-top: 50px;
`;

const CertificateAndShareModal = ({ onClose, alternatives }: CertificateAndShareModalProps) => {
  const { show, animationAfterClose } = useModalAnimation(onClose);
  const ref = useRef<HTMLDivElement>(null);

  const certificateDownload = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then(dataUrl => {
        const link = document.createElement('a');
        link.download = 'my-image-name.png';
        link.href = dataUrl;
        link.click();
      })
      .catch(err => {
        console.log(err);
      });
  }, [ref]);

  return (
    <Portal>
      <Background show={show} />
      <CertificateAndShareContainer show={show}>
        <Certificate alternatives={alternatives} ref={ref} />
        <ShareButtons />
        <ShareButton
          onClick={animationAfterClose}
          style={{ marginTop: -12, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
        >
          다음에 할게요!
        </ShareButton>
        <BottomButton onClick={certificateDownload}>임명장 저장하기</BottomButton>
      </CertificateAndShareContainer>
    </Portal>
  );
};
export default CertificateAndShareModal;
