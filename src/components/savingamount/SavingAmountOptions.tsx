/* eslint-disable import/no-extraneous-dependencies */
import { memo } from 'react';

import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

import { DefaultTagStyle } from '@/components/common/buttons';
import * as Layout from '@/components/common/layout';

interface SavingAmountOptionsProps {
  productPrice: number;
  setAmount: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function SavingAmountOptions({ productPrice, setAmount }: SavingAmountOptionsProps) {
  const savingsAmountOptions = makeDynamicAssistVal(productPrice);

  return (
    <Layout.HScroll>
      {savingsAmountOptions.map((option, idx) => (
        <MoneyInputButton key={uuid()} value={option} onClick={e => setAmount(e)}>
          {idx === 0 ? '전액' : `${option.toLocaleString()}원`}
        </MoneyInputButton>
      ))}
    </Layout.HScroll>
  );
}

export default memo(SavingAmountOptions);

/**
 *
 * @param productPrice 기존 상품 가격
 * @returns Number[] - 기존 상품 가격을 넘지 않는 동적인 보조 버튼 값 배열
 */
function makeDynamicAssistVal(productPrice: number) {
  const productDigit = String(productPrice).length;

  // 1000원 단위 이하일 경우
  if (productDigit <= 4) return [0, 100, 500, 1000];

  // 10000원 단위 이상일 경우, defaultAssist 최소 1000원부터 시작
  const defaultAssist = Number(`1${`0`.repeat(productDigit - 2)}`);

  // 값 중 productPrice보다 큰 값 제거
  return Array.from({ length: 4 }, (_, idx) => defaultAssist * (idx * 5)).filter(
    val => val < productPrice,
  );
}

const MoneyInputButton = styled.button`
  ${DefaultTagStyle}

  :hover {
    color: white;
    background-color: ${({ theme }) => theme.colors.gray[2]};
  }
`;
