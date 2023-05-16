import { useState } from 'react';

import { useRouter } from 'next/router';
import styled from 'styled-components';

import { Indicator01 } from '@/assets/Indicators';
import { useSearchStore } from '@/components/SearchProvider';
import { BottomButton } from '@/components/common/buttons';
import NoticeModal from '@/components/modal/NoticeModal';
import { InputRegExp } from '@/constant';
import { Medium } from '@/styles/font';

const SavingAmount = () => {
  const [amount, setAmount] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [typingModal, setTypingModal] = useState(false);
  const store = useSearchStore();
  const router = useRouter();

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
    const isFillAll = store.product && store.savingAmount;
    if (!isFillAll) {
      setTypingModal(true);
    }

    // router.push()
  };
  return (
    <Container>
      <InputContainer>
        <InputBox>
          <Input value={store.product.title} disabled />
          <Medium>을(를) 갖기 위해</Medium>
        </InputBox>
        <InputBox>
          <Input value='한 달' disabled />
          <Medium>동안</Medium>
        </InputBox>
        <InputBox>
          <Input type='text' value={amount} onChange={e => handleChange(e)} />
          <Medium>원을 모은다면?</Medium>
        </InputBox>
      </InputContainer>
      <ButtonBox onClick={handleSubmit}>
        <BottomButton>다음으로</BottomButton>
      </ButtonBox>
      <div style={{ marginTop: '56px', display: 'flex', justifyContent: 'center' }}>
        <Indicator01 />
      </div>
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
`;
const ButtonBox = styled.div`
  margin-top: 321px;
  display: flex;
  justify-content: center;
`;
const InputBox = styled.div`
  width: 231px;
  display: flex;
  align-items: center;
  gap: 16px;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`;
const Input = styled.input`
  width: 128px;
  height: 38px;
  outline: none;
  border: 1px solid #cbcbcb;
  padding: 10px 20px;
  border-radius: 6px;
  text-overflow: ellipsis;
  &:disabled {
    background-color: white;
    cursor: not-allowed;
  }
`;
export default SavingAmount;
