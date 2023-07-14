import Image from 'next/image';

import * as Style from '@/components/common/Header/style';
import * as Buttons from '@/components/common/buttons';
import * as Layout from '@/components/common/layout';
import * as Font from '@/styles/font';

const UserResearchFormCard = () => {
  return (
    <Style.UserFormHref padding='20px 32px' width='100%' height='auto' gap='12px'>
      <Layout.HStack width='100%'>
        <Layout.VStack
          alignItems='flex-start'
          justifyContent='center'
          width='auto'
          style={{ flex: 'none' }}
        >
          <Style.TagRoundOrang padding='0px 8px' margin='0 0 8px'>
            <Font.SmallOrange>수정제의</Font.SmallOrange>
          </Style.TagRoundOrang>
          <Font.Medium>소비사 서비스 개선을 도와주세요!</Font.Medium>
        </Layout.VStack>

        {/* MEMO: 디자인 상 이미지가 flex에 정렬되어 있지 않아,
            마진을 주어 시각적 보정을 해주었음 */}
        <Layout.VStack alignItems='flex-end' width='100%' margin='-12px -12px 0 0'>
          <Layout.Box
            width='100%'
            height='100%'
            maxWidth='63px'
            maxHeight='70px'
            position='absolute'
            style={{ zIndex: 1 }}
          >
            <Image
              src='assets/image/search-input/sobisa-with-sunglass-and-hello.webp'
              fill
              alt='sobisa-with-sunglass-and-hello'
              style={{ objectFit: 'contain' }}
            />
          </Layout.Box>
        </Layout.VStack>
      </Layout.HStack>

      <Layout.HStack width='100%' alignItems='center' justifyContent='center' maxHeight='26px'>
        <Font.Small style={{ flex: '1' }}>개선점 알리러 가기</Font.Small>
        <Buttons.LightGrayTag>바로가기</Buttons.LightGrayTag>
      </Layout.HStack>
    </Style.UserFormHref>
  );
};

export default UserResearchFormCard;
