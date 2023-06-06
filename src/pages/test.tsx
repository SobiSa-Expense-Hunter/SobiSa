import { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

const ExampleComponent = () => {
  const [isShowing, setIsShowing] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowing(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {isShowing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ width: '50px', height: '50px', background: 'red' }}
        />
      )}
    </AnimatePresence>
  );
};

export default ExampleComponent;
