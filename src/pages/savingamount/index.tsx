import { useRef, useState } from 'react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { useSearchDispatch, useSearchStore } from '@/components/SearchProvider';
import { BottomButton, DefaultTagStyle } from '@/components/common/buttons';
import * as Layout from '@/components/common/layout';
import * as Style from '@/components/savingamount/styles';
import { InputRegExp } from '@/constant';
import useMouseScroll from '@/hooks/useMouseScroll';
import * as Font from '@/styles/font';

const NoticeModal = dynamic(() => import('@/components/modal/NoticeModal'), { ssr: false });

const SavingAmount = () => {
  const [amount, setAmount] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [typingModal, setTypingModal] = useState(false);
  const dragScrollRef = useRef<HTMLDivElement>(null);
  const { onMouseDown, onMouseEnter, onMouseLeave, onMouseMove } = useMouseScroll(dragScrollRef);

  const store = useSearchStore();
  const dispatch = useSearchDispatch();
  const router = useRouter();

  if (store.product.title === undefined || store.product.title === '') {
    return (
      <NoticeModal
        onClose={() => router.replace('/list')}
        message='물품이 제대로 선택되지 않았습니다.'
      />
    );
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const numberReg = InputRegExp.numberAndComma;
    const emptystringReg = InputRegExp.emptyString;
    if (numberReg.test(value) || emptystringReg.test(value)) {
      setAmount(Number(value.replaceAll(',', '')).toLocaleString('ko-KR'));
    } else {
      setShowModal(true);
    }
  };

  const handleSubmit = () => {
    if (!amount) {
      setTypingModal(true);
    } else {
      dispatch({
        type: 'ADD_SAVINGAMOUNT',
        item: Number(amount.replaceAll(',', '')),
      });
      router.push('/result');
    }
  };

  return (
    <Layout.VStack margin='103px 0 0' height='100%' justifyContent='space-around'>
      <Layout.VStack alignItems='flex-start' gap='16px'>
        <Layout.HStack alignItems='center' gap='16px'>
          <Style.Span> {`${store.product.price?.toLocaleString()} ₩`} </Style.Span>
          <Font.Medium>인</Font.Medium>
        </Layout.HStack>

        <Layout.HStack alignItems='center' gap='16px'>
          <Style.Span> {store.product.title} </Style.Span>
          <Font.Medium>을(를) 갖기 위해</Font.Medium>
        </Layout.HStack>

        <Layout.HStack alignItems='center' gap='16px'>
          <Style.Span>한달</Style.Span>
          <Font.Medium>동안</Font.Medium>
        </Layout.HStack>

        <Layout.HStack alignItems='center' gap='16px'>
          <Style.Input
            onChange={e => handleChange(e)}
            pattern='[0-9]*'
            inputMode='decimal'
            value={amount}
          />
          <Font.Medium>원을 모은다면?</Font.Medium>
        </Layout.HStack>
        <HScroll
          gap='6px'
          maxWidth='310px'
          ref={dragScrollRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseEnter={onMouseEnter}
          onMouseMove={onMouseMove}
        >
          <MoneyInputButton>전액</MoneyInputButton>
          <MoneyInputButton>10,000원</MoneyInputButton>
          <MoneyInputButton>50,000원</MoneyInputButton>
          <MoneyInputButton>100,000원</MoneyInputButton>
          <MoneyInputButton>200,000원</MoneyInputButton>
        </HScroll>
      </Layout.VStack>
      <Layout.Flex onClick={handleSubmit} justifyContent='center'>
        <BottomButton>다음으로</BottomButton>
      </Layout.Flex>

      {showModal && (
        <NoticeModal onClose={() => setShowModal(false)} message='숫자만 입력해주세요!' />
      )}
      {typingModal && (
        <NoticeModal onClose={() => setTypingModal(false)} message='모든 칸을 채워주세요!' />
      )}
    </Layout.VStack>
  );
};

export default SavingAmount;

const MoneyInputButton = styled.button`
  ${DefaultTagStyle}

  :hover {
    color: white;
    background-color: ${({ theme }) => theme.colors.gray[2]};
  }
`;

const HScroll = styled(Layout.HStack)`
  overflow-x: scroll;
  word-break: keep-all;
  ::-webkit-scrollbar {
    display: none;
  }
`;
