import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

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
const Indicator = ({ length, order }: { length: number; order: number }) => {
  return (
    <AnimatePresence>
      <IndicatorWrapper>
        {Array(length)
          .fill(0)
          .map((_, i) => (order === i ? <Current /> : <NotCurrent />))}
      </IndicatorWrapper>
    </AnimatePresence>
  );
};
export default Indicator;
