/* eslint-disable import/no-extraneous-dependencies */
import { Dispatch, SetStateAction } from 'react';

import ScrollContainer from 'react-indiana-drag-scroll';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

import { DefaultTagStyle } from '@/components/common/buttons';

interface SavingAmountOptionsProps {
  productPrice: number;
  setAmount: Dispatch<SetStateAction<string>>;
}

function SavingAmountOptions({ productPrice, setAmount }: SavingAmountOptionsProps) {
  const savingsAmountOptions = [productPrice || 0, 10000, 50000, 100000, 200000];

  const sumAmountOptions = (value: number) => {
    setAmount(prev => {
      const beforeAmount = Number(prev.replaceAll(',', ''));
      return (beforeAmount + value).toLocaleString('ko-KR');
    });
  };

  return (
    <HScroll>
      {savingsAmountOptions.map((option, idx) => (
        <MoneyInputButton
          key={uuid()}
          value={option}
          onClick={e => sumAmountOptions(Number(e.currentTarget.value))}
        >
          {idx === 0 ? '전액' : `${option.toLocaleString()}원`}
        </MoneyInputButton>
      ))}
    </HScroll>
  );
}

export default SavingAmountOptions;

const HScroll = styled(ScrollContainer)`
  display: flex;
  overflow-x: hidden;
  word-break: keep-all;
  max-width: 310px;
  gap: 6px;
`;

const MoneyInputButton = styled.button`
  ${DefaultTagStyle}

  :hover {
    color: white;
    background-color: ${({ theme }) => theme.colors.gray[2]};
  }
`;
