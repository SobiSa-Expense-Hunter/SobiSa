import { useCallback, useRef } from 'react';

import { toPng } from 'html-to-image';
import styled from 'styled-components';

import { DownloadIcon } from '@/assets/Icons';
import Portal from '@/components/Portal';
import { Background, ModalContainer } from '@/components/common/Modal';
import { BottomButton, ShareButton } from '@/components/common/buttons';
import Certificate from '@/components/results/Certificate';
import ShareButtons from '@/components/results/ShareButtons';
import useModalAnimation from '@/hooks/useModalAnimation';
import { Alternatives } from '@/types/result';
import uploadImage from '@/utils/api/uploadImageApi';

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
        console.error(err);
      });
  }, [ref]);

  const shareImage = async (callback: (imgUrl: string) => void) => {
    if (ref.current === null) {
      return;
    }
    try {
      const dataUrl = await toPng(ref.current, { cacheBust: true });
      const { data } = await uploadImage(dataUrl);

      callback(data.display_url);
    } catch (e) {
      callback('');
    }
  };

  return (
    <Portal>
      <Background show={show} onClick={animationAfterClose} />
      <CertificateAndShareContainer show={show}>
        <Certificate alternatives={alternatives} ref={ref} />
        <ShareButtons shareImage={shareImage} />
        <ShareButton
          onClick={certificateDownload}
          style={{ marginTop: -12, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
        >
          이미지 저장하기! <DownloadIcon />
        </ShareButton>
      </CertificateAndShareContainer>
    </Portal>
  );
};
export default CertificateAndShareModal;
