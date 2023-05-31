import { useRef } from 'react';

import { toSvg } from 'html-to-image';
import styled from 'styled-components';

import { DownloadIcon } from '@/assets/Icons';
import Portal from '@/components/Portal';
import { Background, ModalContainer } from '@/components/common/Modal';
import { CloseButton, ShareButton } from '@/components/common/buttons';
import Certificate from '@/components/results/Certificate';
import ShareButtons from '@/components/results/ShareButtons';
import useModalAnimation from '@/hooks/useModalAnimation';
import uploadImage from '@/utils/api/uploadImageApi';

interface CertificateAndShareModalProps {
  onClose: () => void;
}

const CertificateAndShareContainer = styled(ModalContainer)`
  background-color: transparent;
  width: 100%;
  max-width: 100%;
  max-height: 100%;

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

const createImage = async (url: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () =>
      setTimeout(() => {
        resolve(img);
      }, 200);
    img.decode = async () => resolve(img);
    img.onerror = reject;
    img.crossOrigin = 'anonymous';
    img.src = url;
  });
};

const toPng = async (node: HTMLDivElement) => {
  const { offsetWidth: width, offsetHeight: height } = node;

  const svgDataUrl = await toSvg(node);

  const canvas = document.createElement('canvas');
  const offscreenCanvas = canvas.transferControlToOffscreen();
  offscreenCanvas.width = width;
  offscreenCanvas.height = height;
  const context = offscreenCanvas.getContext('2d', { alpha: false });
  if (context === null) return '';

  const img: HTMLImageElement = await createImage(svgDataUrl);
  let done = false;
  const onFrame = () => {
    context.drawImage(img, 0, 0, width, height);
    if (canvas.toDataURL('image/png', 1.0).length > 204800) done = true;
    if (!done) {
      window.requestAnimationFrame(onFrame);
    }
  };
  onFrame();

  return new Promise((resolve: (url: string) => void) => {
    setTimeout(() => {
      const url = canvas.toDataURL('image/png', 1.0);
      resolve(url);
    }, 500);
  });
};

const CertificateAndShareModal = ({ onClose }: CertificateAndShareModalProps) => {
  const { show, animationAfterClose } = useModalAnimation(onClose);
  const ref = useRef<HTMLDivElement>(null);

  const certificateDownload = () => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current).then(dataUrl => {
      const link = document.createElement('a');
      link.download = '임명장.png';
      link.href = dataUrl;
      link.click();
    });
  };

  const shareImage = async (callback: (imgUrl: string) => void) => {
    if (ref.current === null) {
      return;
    }
    try {
      const dataUrl = await toPng(ref.current);
      const { data } = await uploadImage(dataUrl);

      callback(data.display_url);
    } catch (e) {
      callback('');
    }
  };

  return (
    <Portal>
      <Background show={show} />
      <CertificateAndShareContainer show={show} id='container'>
        <CertificateAndShareWrapper>
          <CloseButton style={{ alignSelf: 'flex-end' }} onClick={animationAfterClose} />
          <Certificate ref={ref} />
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
