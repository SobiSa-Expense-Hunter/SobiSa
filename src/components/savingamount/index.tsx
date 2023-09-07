import { useState, useCallback } from 'react';

import { useRouter } from 'next/router';

import { useSearchDispatch, useSearchStore } from '@/components/SearchProvider';
import { BottomButton } from '@/components/common/buttons';
import * as Layout from '@/components/common/layout';
import NoticeModal from '@/components/modal/NoticeModal';
import AmountInput from '@/components/savingamount/AmountInput';
import SavingAmountOptions from '@/components/savingamount/SavingAmountOptions';
import TextHolder from '@/components/savingamount/TextHolder';
import * as Style from '@/components/savingamount/styles';
import { InputRegExp } from '@/constant';

// TODO :전액 BTN 자체에 값 부여하는 방법
// TODO :store - amount 관심사 분리

type AmountChangeEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.MouseEvent<HTMLButtonElement, MouseEvent>;

const SavingAmount = () => {
  const [showModal, setShowModal] = useState(false);
  const [typingModal, setTypingModal] = useState(false);

  const [amount, setAmount] = useState('');

  const router = useRouter();
  const { product } = useSearchStore();

  const dispatch = useSearchDispatch();

  const handleAmountChange = useCallback(
    (event: AmountChangeEvent) => {
      if (!product.price) return;

      switch (event.type) {
        case 'click': {
          const value = Number(
            (event as React.MouseEvent<HTMLButtonElement, MouseEvent>).currentTarget.value,
          );
          const beforeAmount = Number(amount.replaceAll(',', ''));

          if (beforeAmount + value > product.price) {
            setAmount(product.price.toLocaleString('ko-KR'));
            break;
          }
          setAmount((beforeAmount + value).toLocaleString('ko-KR'));
          break;
        }

        case 'change': {
          const { value } = event.target as HTMLInputElement;
          const numberReg = InputRegExp.numberAndComma;
          const emptyStringReg = InputRegExp.emptyString;

          if (numberReg.test(value) || emptyStringReg.test(value)) {
            setAmount(Number(value.replaceAll(',', '')).toLocaleString('ko-KR'));
          } else setShowModal(true);
          break;
        }
        default:
          break;
      }
    },
    [amount, product.price],
  );

  const handleInputSubmit = () => {
    if (!amount) {
      setTypingModal(true);
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
        <TextHolder contents={[`${product.price?.toLocaleString()} ₩`, '인']} />
        <TextHolder contents={[`${product.title}`, '을(를) 갖기 위해']} />
        <TextHolder contents={[`한달`, '동안']} />

        <Layout.HStack alignItems='center' gap='16px'>
          <AmountInput onChange={handleAmountChange} resetAmount={setAmount} amount={amount} />
          <Style.KeepAllFont>원을 모은다면?</Style.KeepAllFont>
        </Layout.HStack>
        <SavingAmountOptions productPrice={product.price || 0} setAmount={handleAmountChange} />
      </Layout.VStack>

      <Layout.Flex onClick={handleInputSubmit} justifyContent='center'>
        <BottomButton>다음으로</BottomButton>
      </Layout.Flex>

      {showModal && (
        <NoticeModal onClose={() => setShowModal(false)} message='숫자만 입력해주세요!' />
      )}
      {typingModal && (
        <NoticeModal onClose={() => setTypingModal(false)} message='모든 칸을 채워주세요!' />
      )}
    </Layout.FixButtonBottom>
  );
};

export default SavingAmount;
