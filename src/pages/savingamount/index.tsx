import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { useSearchDispatch, useSearchStore } from '@/components/SearchProvider';
import { BottomButton } from '@/components/common/buttons';
import * as Layout from '@/components/common/layout';
import SavingAmountOptions from '@/components/savingamount/SavingAmountOptions';
import * as Style from '@/components/savingamount/styles';
import { InputRegExp } from '@/constant';

const NoticeModal = dynamic(() => import('@/components/modal/NoticeModal'), { ssr: false });

const SavingAmount = () => {
  const [amount, setAmount] = useState('');
  const [isShowModal, setIsShowModal] = useState(false);
  const [isTypingModal, setIsTypingModal] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const store = useSearchStore();
  const dispatch = useSearchDispatch();
  const router = useRouter();

  useEffect(() => inputRef?.current?.focus(), []);

  if (store.product.title === undefined || store.product.title === '') {
    return (
      <NoticeModal
        onClose={() => router.replace('/list')}
        message='물품이 제대로 선택되지 않았습니다.'
      />
    );
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const numberReg = InputRegExp.numberAndComma;
    const emptystringReg = InputRegExp.emptyString;

    if (numberReg.test(value) || emptystringReg.test(value)) {
      setAmount(Number(value.replaceAll(',', '')).toLocaleString('ko-KR'));
    } else setIsShowModal(true);
  };

  const handleInputSubmit = () => {
    if (!amount) {
      setIsTypingModal(true);
      return;
    }
    dispatch({
      type: 'ADD_SAVINGAMOUNT',
      item: Number(amount.replaceAll(',', '')),
    });
    router.push('/result');
  };

  return (
    <Layout.FixButtonBottom alignItems='center' padding='0 0 30px 0'>
      <Layout.VStack
        alignItems='flex-start'
        gap='16px'
        width='100%'
        height='100%'
        margin='41px 41px'
        justifyContent='center'
      >
        <Layout.HStack alignItems='center' gap='16px'>
          <Style.Span> {`${store.product.price?.toLocaleString()} ₩`} </Style.Span>
          <Style.KeepAllFont>인</Style.KeepAllFont>
        </Layout.HStack>

        <Layout.HStack alignItems='center' gap='16px'>
          <Style.Span> {store.product.title} </Style.Span>
          <Style.KeepAllFont>을(를) 갖기 위해</Style.KeepAllFont>
        </Layout.HStack>

        <Layout.HStack alignItems='center' gap='16px'>
          <Style.Span>한달</Style.Span>
          <Style.KeepAllFont>동안</Style.KeepAllFont>
        </Layout.HStack>

        <Layout.HStack alignItems='center' gap='16px'>
          <AmoutInput onChange={handleInputChange} resetAmount={setAmount} amount={amount} />
          <Style.KeepAllFont>원을 모은다면?</Style.KeepAllFont>
        </Layout.HStack>
        <SavingAmountOptions productPrice={store.product.price || 0} setAmount={setAmount} />
      </Layout.VStack>

      <Layout.Flex onClick={handleInputSubmit} justifyContent='center'>
        <BottomButton>다음으로</BottomButton>
      </Layout.Flex>

      {isShowModal && (
        <NoticeModal onClose={() => setIsShowModal(false)} message='숫자만 입력해주세요!' />
      )}
      {isTypingModal && (
        <NoticeModal onClose={() => setIsTypingModal(false)} message='모든 칸을 채워주세요!' />
      )}
    </Layout.FixButtonBottom>
  );
};

export default SavingAmount;

interface AmountInput {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  resetAmount: Dispatch<SetStateAction<string>>;
  amount: string;
}

const AmoutInput = ({ onChange, resetAmount, amount }: AmountInput) => {
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => inputRef?.current?.focus(), []);

  return (
    <Style.InputBorder alignItems='center' focus={isFocus}>
      <Style.Input
        type='text'
        onChange={e => onChange(e)}
        pattern='[0-9]*'
        inputMode='decimal'
        value={amount}
        ref={inputRef}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />

      <Style.ButtonStyleInit type='button' onClick={() => resetAmount('0')}>
        <Style.InitializationIcon />
      </Style.ButtonStyleInit>
    </Style.InputBorder>
  );
};
