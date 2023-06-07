import { useRouter } from 'next/router';

import { MainImage } from '@/assets/Images';
import SearchInput from '@/components/SearchInput';
import * as Layout from '@/components/common/layout';
import FacebookButton from '@/components/common/share/FacebookButton';
import KakaoButton from '@/components/common/share/KakaoButton';
import LinkButton from '@/components/common/share/LinkButton';
import TwitterButton from '@/components/common/share/TwitterButton';
import { sharedMessage } from '@/constant';
import * as Font from '@/styles/font';

function Home() {
  const { title = '', text = '', url = '' } = sharedMessage;

  const router = useRouter();
  const VISTED = 'visited';

  if (typeof window !== 'undefined' && !localStorage.getItem(VISTED)) {
    localStorage.setItem(VISTED, 'true');
    router.push('/about');
  }

  return (
    <Layout.VStack margin='20px 0 0' width='100%' alignItems='center'>
      <Font.Medium>지금 뭘 사고 싶나요?</Font.Medium>
      <Font.Large>소비사와 같이 고민해 봐요!</Font.Large>
      <Layout.Box margin='16px 0px'>
        <MainImage width={220} height={220} />
      </Layout.Box>
      <SearchInput />
      <Layout.HStack margin='66px 0 0' gap='8px'>
        <FacebookButton pageUrl={url} />
        <TwitterButton pageUrl={url} sendText={text} />
        <KakaoButton webUrl={url} />
        <LinkButton pageUrl={url} />
      </Layout.HStack>
    </Layout.VStack>
  );
}
export default Home;
