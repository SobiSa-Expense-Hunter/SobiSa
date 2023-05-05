import React, { createContext, useState } from 'react';

type MyContextType = [string, React.Dispatch<React.SetStateAction<string>>];

const MyContext = createContext<MyContextType>(['', () => {}]);

interface MyContextProviderProps {
  children: React.ReactNode;
}

function MyContextProvider({ children }: MyContextProviderProps) {
  const [myState, setMyState] = useState<string>('initial state');

  return <MyContext.Provider value={[myState, setMyState]}>{children}</MyContext.Provider>;
}

export { MyContext, MyContextProvider };
