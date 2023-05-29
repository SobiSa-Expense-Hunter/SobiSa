import { useState } from 'react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { useSearchDispatch, useSearchStore } from '@/components/SearchProvider';
import { BottomButton } from '@/components/common/buttons';
import { DefaultInput } from '@/components/common/input';
import { InputRegExp } from '@/constant';
import { Medium } from '@/styles/font';

const NoticeModal = dynamic(() => import('@/components/modal/NoticeModal'), { ssr: false });

const SavingAmount = () => {
  const [amount, setAmount] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [typingModal, setTypingModal] = useState(false);

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
    <Container>
      <InputContainer>
        <InputBox>
          <Span> {store.product.title} </Span>
          <Medium>을(를) 갖기 위해</Medium>
        </InputBox>
        <InputBox>
          <Span>한달</Span>
          <Medium>동안</Medium>
        </InputBox>
        <InputBox>
          <Input
            pattern='[0-9]*'
            inputMode='decimal'
            value={amount}
            onChange={e => handleChange(e)}
          />
          <Medium>원을 모은다면?</Medium>
        </InputBox>
      </InputContainer>
      <ButtonBox onClick={handleSubmit}>
        <BottomButton>다음으로</BottomButton>
      </ButtonBox>

      {showModal && (
        <NoticeModal onClose={() => setShowModal(false)} message='숫자만 입력해주세요!' />
      )}
      {typingModal && (
        <NoticeModal onClose={() => setTypingModal(false)} message='모든 칸을 채워주세요!' />
      )}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 101px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

const InputBox = styled.div`
  display: flex;
  width: 310px;
  align-items: center;
  gap: 16px;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`;

const Span = styled.span`
  ${DefaultInput}
  display: flex;
  align-items: center;
  min-height: 50px;
`;

const Input = styled.input`
  ${DefaultInput}

  height: 50px;
`;

export default SavingAmount;
