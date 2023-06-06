import { useState } from 'react';

const useLocalStorage = <T>(key: string, initialValue: T): [T, (value: T) => void] => {
  const [state, setState] = useState<T>(() => {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      return error as T;
    }
  });

  const setValue = (value: T | ((prevState: T) => T)) => {
    const valueToStore =
      typeof value === 'function' ? (value as (prevState: T) => T)(state) : value;
    window.localStorage.setItem(key, JSON.stringify(valueToStore));
    setState(value);
  };

  return [state, setValue];
};

export default useLocalStorage;
