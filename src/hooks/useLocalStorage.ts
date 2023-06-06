import { useState } from 'react';

const useLocalStorage = (key: string, initialValue: string): [string, (value: string) => void] => {
  const [state, setState] = useState(() => {
    try {
      const value = window.localStorage.getItem(key);
      return value || initialValue;
    } catch (error) {
      return error as string;
    }
  });

  const setValue = (value: string) => {
    window.localStorage.setItem(key, value);
    setState(value);
  };

  return [state, setValue];
};

export default useLocalStorage;
