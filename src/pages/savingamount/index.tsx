import { useState } from 'react';

import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';

import { Indicator01 } from '@/assets/Indicators';
import { useSearchDispatch, useSearchStore } from '@/components/SearchProvider';
import { BottomButton } from '@/components/common/buttons';
import NoticeModal from '@/components/modal/NoticeModal';
import { InputRegExp } from '@/constant';
import { Medium } from '@/styles/font';

const devTitle = ` 내셔널지오그래픽 코어 오리지날 슬링백 N235ACR890`;

const SavingAmount = () => {
  const [amount, setAmount] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [typingModal, setTypingModal] = useState(false);

  const store = useSearchStore();
  const dispatch = useSearchDispatch();
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
          <TitleInput value={store.product.title || devTitle} disabled />
          <Medium>을(를) 갖기 위해</Medium>
        </InputBox>
        <InputBox>
          <Input value='한 달' disabled />
          <Medium>동안</Medium>
        </InputBox>
        <InputBox>
          <Input pattern='[0-9]*' value={amount} onChange={e => handleChange(e)} />
          <Medium>원을 모은다면?</Medium>
        </InputBox>
      </InputContainer>
      <ButtonBox onClick={handleSubmit}>
        <BottomBtn>다음으로</BottomBtn>
      </ButtonBox>
      {/* <div style={{ marginTop: '56px', display: 'flex', justifyContent: 'center' }}>
        <Indicator01 />
      </div> */}
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
  @supports (height: 30svh) {
    margin-top: min(321px, 30svh);
  }

  margin-top: min(321px, 30vh);
  display: flex;
  justify-content: center;
`;

const BottomBtn = styled(BottomButton)`
  margin-bottom: 20px;
`;
const InputBox = styled.div`
  width: 310px;
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

const DefaultInput = css`
  width: 194px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.gray[2]};
  padding: 10px 20px;
  border-radius: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;

  &:disabled {
    background-color: white;
    cursor: not-allowed;
  }

  /*INPUT-FONT */
  font-family: 'Pretendard Variable';
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.022em;

  color: ${({ theme }) => theme.colors.gray[3]};
`;

const TitleInput = styled.textarea`
  ${DefaultInput}
  resize: none;
`;

const Input = styled.input`
  ${DefaultInput}

  height: 50px;
`;

export default SavingAmount;
