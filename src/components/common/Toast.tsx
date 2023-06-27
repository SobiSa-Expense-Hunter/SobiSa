import { useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

const ToastItem = ({
  msg,
  duration,
  removeItem: setThisVisible,
}: {
  msg: string;
  duration: number;
  removeItem: () => void;
}) => {
  useEffect(() => {
    setTimeout(setThisVisible, duration);
  }, [setThisVisible, duration]);

  return (
    <ToastContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {msg}
    </ToastContainer>
  );
};

const Toast = ({
  msg,
  duration = 2000,
  toastHide,
}: {
  msg: string;
  duration?: number;
  toastHide: () => void;
}) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence onExitComplete={toastHide}>
      {isVisible ? (
        <ToastItem
          msg={msg}
          duration={duration}
          removeItem={() => {
            setIsVisible(!isVisible);
          }}
        />
      ) : null}
    </AnimatePresence>
  );
};

Toast.defaultProps = {
  duration: 2000,
};

export default Toast;

const ToastContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  min-width: 19rem;
  min-height: 3.4375rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  bottom: 5vh;
  line-height: 1.3125rem;
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  font-size: ${props => props.theme.fontSize.xs};
  left: 50%;
  transform: translate(-50%, 0);
`;
