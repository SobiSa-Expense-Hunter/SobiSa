/* eslint-disable import/no-extraneous-dependencies */
import { Dispatch, SetStateAction } from 'react';

import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

import { DefaultTagStyle } from '@/components/common/buttons';
import * as Layout from '@/components/common/layout';

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
    <Layout.HScroll>
      {savingsAmountOptions.map((option, idx) => (
        <MoneyInputButton
          key={uuid()}
          value={option}
          onClick={e => sumAmountOptions(Number(e.currentTarget.value))}
        >
          {idx === 0 ? '전액' : `${option.toLocaleString()}원`}
        </MoneyInputButton>
      ))}
    </Layout.HScroll>
  );
}

export default SavingAmountOptions;

const MoneyInputButton = styled.button`
  ${DefaultTagStyle}

  :hover {
    color: white;
    background-color: ${({ theme }) => theme.colors.gray[2]};
  }
`;
