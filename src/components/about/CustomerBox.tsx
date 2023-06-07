import Image from 'next/image';
import styled from 'styled-components';

import * as Layout from '@/components/common/layout';
import * as Font from '@/styles/font';

interface CustomerProps {
  imgNum: number;
  mainText: string;
  subText: string;
  subTextOrange: string;
}

function CustomerBox({ imgNum, mainText, subText, subTextOrange }: CustomerProps) {
  return (
    <StyledHStack height='94px' alignItems='center' padding='0 16px'>
      <Image
        src={`assets/image/about/customer/profile_${imgNum}.png`}
        width={54}
        height={54}
        alt={`고민하는 소비자 이모지 ${imgNum}`}
      />
      <Layout.VStack margin='0 0 0 16px'>
        <Font.Large>{mainText}</Font.Large>
        <Layout.Box height='12px' />
        <Layout.Box>
          <Font.Small>{subText}</Font.Small>
          <Font.SmallOrange>{` ${subTextOrange}`}</Font.SmallOrange>
        </Layout.Box>
      </Layout.VStack>
    </StyledHStack>
  );
}

export default CustomerBox;

const StyledHStack = styled(Layout.HStack)`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
`;
