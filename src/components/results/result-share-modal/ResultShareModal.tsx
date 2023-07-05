import { useRef } from 'react';

import { useRouter } from 'next/router';

import { DownloadIcon } from '@/assets/Icons';
import Portal from '@/components/Portal';
import { Background } from '@/components/common/Modal';
import { CloseButton } from '@/components/common/buttons';
import Certificate from '@/components/results/certificate/Certificate';
import Receipt from '@/components/results/receipt/Receipt';
import ShareButtons from '@/components/results/result-share-modal/SNSShareButtons';
import { toPng } from '@/components/results/result-share-modal/html-to-image';
import * as Style from '@/components/results/result-share-modal/style';
import useModalAnimation from '@/hooks/useModalAnimation';

interface ResultShareModalProps {
  onClose: () => void;
  isPurchase: boolean;
}

const ResultShareModal = ({ onClose, isPurchase }: ResultShareModalProps) => {
  const { show, animationAfterClose } = useModalAnimation(onClose);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

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

  const redirectHome = () => {
    router.push({ pathname: '/' });
  };

  return (
    <Portal>
      <Background show={show} />
      <Style.Container show={show} id='container'>
        <Style.Wrapper>
          <Style.ResultShareWrapper>
            <CloseButton style={{ alignSelf: 'flex-end' }} onClick={animationAfterClose} />
            {isPurchase ? <Receipt ref={ref} /> : <Certificate ref={ref} />}
            <ShareButtons />
            <Style.ModalButton onClick={certificateDownload}>
              이미지 저장하기! <DownloadIcon />
            </Style.ModalButton>
            <Style.ModalGrayButton onClick={redirectHome}>홈으로 돌아가기</Style.ModalGrayButton>
          </Style.ResultShareWrapper>
        </Style.Wrapper>
      </Style.Container>
    </Portal>
  );
};
export default ResultShareModal;
