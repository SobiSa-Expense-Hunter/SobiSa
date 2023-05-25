import { useCallback, useRef } from 'react';

import { toPng } from 'html-to-image';
import styled from 'styled-components';

import { DownloadIcon } from '@/assets/Icons';
import Portal from '@/components/Portal';
import { Background, ModalContainer } from '@/components/common/Modal';
import { ShareButton } from '@/components/common/buttons';
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

  padding-top: 10vh;
  padding-bottom: 10vh;

  justify-content: flex-start;
  overflow: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    width: 4px;
    border-radius: 2px;
    background-clip: padding-box;
    border: 10px solid transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray[2]};
  }
`;

const CertificateAndShareWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
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
      <Background show={show} />
      <CertificateAndShareContainer
        show={show}
        onClick={e => {
          if (e.target instanceof HTMLDivElement && e.target.id === 'container')
            animationAfterClose();
        }}
        id='container'
      >
        <CertificateAndShareWrapper>
          <Certificate alternatives={alternatives} ref={ref} />
          <ShareButtons shareImage={shareImage} />
          <ShareButton
            onClick={certificateDownload}
            style={{ marginTop: -12, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
          >
            이미지 저장하기! <DownloadIcon />
          </ShareButton>
        </CertificateAndShareWrapper>
      </CertificateAndShareContainer>
    </Portal>
  );
};
export default CertificateAndShareModal;
