import { Dispatch, SetStateAction, useRef, useState, useEffect, memo } from 'react';

import * as Style from '@/components/savingamount/styles';

interface AmountInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  resetAmount: Dispatch<SetStateAction<string>>;
  amount: string;
}

const AmountInput = ({ onChange, resetAmount, amount }: AmountInputProps) => {
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

export default memo(AmountInput);
