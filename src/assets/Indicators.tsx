import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

const Indicator = ({ length, order }: { length: number; order: number }) => {
  const [indexes, setIndexes] = useState<string[]>(Array.from({ length }, () => uuid()));

  return (
    <AnimatePresence>
      <IndicatorWrapper>
        {indexes.map((key, i) =>
          i === order ? (
            <Current
              key={key}
              animate={i > 0 && { x: [-15, 0], transition: { type: 'spring', stiffness: 70 } }}
            />
          ) : (
            <NotCurrent key={key} />
          ),
        )}
      </IndicatorWrapper>
    </AnimatePresence>
  );
};

export default Indicator;

const Current = styled(motion.span)`
  width: 16px;
  height: 4px;
  background: ${props => props.theme.colors.gray[2]};
  border-radius: 20px;
`;

const NotCurrent = styled(motion.span)`
  width: 4px;
  height: 4px;
  background: ${props => props.theme.colors.gray[1]};
  border-radius: 50%;
`;

const IndicatorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;
