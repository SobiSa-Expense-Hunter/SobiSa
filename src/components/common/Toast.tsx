import React, { useEffect, useState } from 'react';

import { AnimatePresence, motion, usePresence } from 'framer-motion';
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
  bottom: 5vh;
  width: max-content;
  line-height: 30px;
  text-align: center;
  color: white;
  background-color: ${props => props.theme.colors.gray[6]};
  opacity: 70%;
  border-radius: 10px;
  backdrop-filter: brightness(0.5);
  padding: 4px 24px;
  font-size: 15px;
  left: 50%;
  transform: translate(-50%, 0);
`;
