import FacebookButton from '@/components/common/share/FacebookButton';
import KakaoButton from '@/components/common/share/KakaoButton';
import LinkButton from '@/components/common/share/LinkButton';
import NativeShareButton from '@/components/common/share/NativeShareButton';
import TwitterButton from '@/components/common/share/TwitterButton';
import * as Style from '@/components/results/result-share-modal/style';
import { sharedMessage } from '@/constant';

const ShareButtons = () => {
  const { title = '', url = '' } = sharedMessage;
  return (
    <Style.ShareButtonsContainer>
      <FacebookButton pageUrl={url} />
      <TwitterButton sendText={title} pageUrl={url} />
      <KakaoButton webUrl={url} />
      <LinkButton pageUrl={url} />
      <NativeShareButton sharedMessage={sharedMessage} />
    </Style.ShareButtonsContainer>
  );
};

export default ShareButtons;
