import { Dispatch, SetStateAction, useRef } from 'react';

import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

import { DefaultTagStyle } from '@/components/common/buttons';
import * as Layout from '@/components/common/layout';
import useMouseScroll from '@/hooks/useMouseScroll';

interface SavingAmountOptionsProps {
  productPrice: number;
  setAmount: Dispatch<SetStateAction<string>>;
}

function SavingAmountOptions({ productPrice, setAmount }: SavingAmountOptionsProps) {
  const dragScrollRef = useRef<HTMLDivElement>(null);
  const { onMouseDown, onMouseLeave, onMouseMove, onMouseEnter } = useMouseScroll(dragScrollRef);
  const savingsAmountOptions = [productPrice || 0, 10000, 50000, 100000, 200000];

  const sumAmountOptions = (value: number) => {
    console.log(value);
    setAmount(prev => {
      if (prev === '') return '0';
      const beforeAmount = Number(prev.replaceAll(',', ''));
      return (beforeAmount + value).toLocaleString('ko-KR');
    });
  };

  return (
    <HScroll
      gap='6px'
      maxWidth='310px'
      ref={dragScrollRef}
      onMouseDown={onMouseDown}
      onMouseOut={onMouseLeave}
      onMouseOver={onMouseEnter}
    >
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

const HScroll = styled(Layout.HStack)`
  overflow-x: auto;
  word-break: keep-all;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const MoneyInputButton = styled.button`
  ${DefaultTagStyle}

  :hover {
    color: white;
    background-color: ${({ theme }) => theme.colors.gray[2]};
  }
`;
